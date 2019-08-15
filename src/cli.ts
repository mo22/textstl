import * as TextMaker from './TextMaker.js';
import base64arraybuffer from 'base64-arraybuffer';
import optimist from 'optimist';
import fs from 'fs';
import request from 'request';

async function main() {
  const fontSize = optimist.argv.fontSize || 72;
  const width = optimist.argv.width || 20;
  const text = optimist.argv.text || 'Hello';
  const kerning = optimist.argv.kerning || '0';
  const output = optimist.argv.output || 'output.stl';
  const fontName = optimist.argv.font || 'Damion';
  const fontVariant = optimist.argv.fontVariant || 'normal';

  const googleFonts = require('google-fonts-complete');
  if (!(fontName in googleFonts)) {
    console.log(Object.keys(googleFonts));
    throw new Error('font not found');
  }

  const variants = googleFonts[fontName].variants;
  const variant = variants[fontVariant] || variants[Object.keys(variants)[0]];
  const face = variant['400'] || variant[Object.keys(variant)[0]];

  const fontData = await new Promise<Buffer>((resolve, reject) => {
    request({
      url: face.url.ttf,
      encoding: null,
    }, (e, _res, data) => {
      e ? reject(e) : resolve(data);
    });
  });
  const fontBin = base64arraybuffer.decode(fontData.toString('base64'));

  const font = TextMaker.loadFont(fontBin);
  const geometry = TextMaker.stringToGeometry({
    font: font,
    text: text,
    size: fontSize,
    width: width,
    kerning: kerning,
  });

  const stl = TextMaker.geometryToSTL(geometry);

  fs.writeFileSync(output, Buffer.from(base64arraybuffer.encode(stl), 'base64'));
}

main().catch(console.error);
