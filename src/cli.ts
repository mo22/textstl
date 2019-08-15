import * as TextMaker from './TextMaker.js';
import optimist from 'optimist';
import { fetch } from 'cross-fetch';
import * as fs from 'fs';
import * as googleFonts from 'google-fonts-complete';

async function main() {
  const fontSize = optimist.argv.fontSize || 72;
  const width = optimist.argv.width || 20;
  const text = optimist.argv.text || 'Hello';
  const kerning = optimist.argv.kerning || '0';
  const output = optimist.argv.output || 'output.stl';
  const fontName = optimist.argv.font || 'Damion';
  const fontVariant = optimist.argv.fontVariant || 'normal';

  if (!(fontName in googleFonts)) {
    console.log(Object.keys(googleFonts));
    throw new Error('font not found');
  }
  const variants = googleFonts[fontName].variants;
  const variant = variants[fontVariant] || variants[Object.keys(variants)[0]];
  const face = variant['400'] || variant[Object.keys(variant)[0]];

  const req = await fetch(face.url.ttf!);
  const fontBin = await req.arrayBuffer();

  const font = TextMaker.loadFont(fontBin);
  const geometry = TextMaker.stringToGeometry({
    font: font,
    text: text,
    size: fontSize,
    width: width,
    kerning: kerning,
  });

  const stl = TextMaker.geometryToSTL(geometry);
  fs.writeFileSync(output, Buffer.from(stl));
}

main().catch(console.error);
