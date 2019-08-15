import * as TextMaker from './TextMaker.js';
import base64arraybuffer from 'base64-arraybuffer';
import optimist from 'optimist';
import googleFonts from 'google-fonts-complete';
import fs from 'fs';
import request from 'request';

async function main() {
  let fontSize = optimist.argv.fontSize || 72;
  let width = optimist.argv.width || 20;
  let text = optimist.argv.text || 'Hello';
  let kerning = optimist.argv.kerning || '0';
  let output = optimist.argv.output || 'output.stl';
  let fontName = optimist.argv.font || 'Damion';
  let fontVariant = optimist.argv.fontVariant || 'normal'; // 'italic?'
  let fontWeight = optimist.argv.fontWeight || '400';

  if (!(fontName in googleFonts)) {
    console.log(Object.keys(googleFonts));
    throw new Error('font not found');
  }
  let variants = googleFonts[fontName].variants;
  let variant = variants[fontVariant] || variants[Object.keys(variants)[0]];
  let face = variant['400'] || variant[Object.keys(variant)[0]];

  let fontData = await new Promise((resolve, reject) => {
    request({
      url: face.url.ttf,
      encoding: null
    }, (e, res, data) => {
      e ? reject(e) : resolve(data);
    })
  });

  let font = TextMaker.loadFont(base64arraybuffer.decode(fontData.toString('base64')));
  let geometry = TextMaker.stringToGeometry(font, text, fontSize, width, kerning);

  let stl = TextMaker.geometryToSTL(geometry);

  fs.writeFileSync(output, Buffer.from(base64arraybuffer.encode(stl), 'base64'));
}

main().catch(console.error);
