import * as TextMaker from './TextMaker.js';
import * as base64arraybuffer from 'base64-arraybuffer';
import base64font from './Damion-Regular.js';
import optimist from 'optimist';
import fs from 'fs';

async function main() {
  let fontSize = optimist.argv.fontSize || 72;
  let width = optimist.argv.width || 20;
  let text = optimist.argv.text || 'Hello';
  let kerning = optimist.argv.kerning || 0;
  let output = optimist.argv.output || 'output.stl';
  // font?


  let font = TextMaker.loadFont(base64arraybuffer.decode(base64font));
  let geometry = TextMaker.stringToGeometry(font, text, fontSize, width);
  // per-char offset
  // per-char size?
  // kerning offset
  let stl = TextMaker.geometryToSTL(geometry);

  // System._nodeRequire('fs').writeFileSync(output, Buffer.from(base64arraybuffer.encode(stl), 'base64'));
  fs.writeFileSync(output, Buffer.from(base64arraybuffer.encode(stl), 'base64'));
}

main().catch(console.error);
