import * as TextMaker from './TextMaker.js';
import * as base64arraybuffer from 'base64-arraybuffer';
import base64font from './Damion-Regular.js';

async function main() {
  let font = TextMaker.loadFont(base64arraybuffer.decode(base64font));
  let geometry = stringToGeometry(font, 'Hallo', 72, 20);
  let stl = geometryToSTL(geometry);
  System._nodeRequire('fs').writeFileSync('test.stl', Buffer.from(base64arraybuffer.encode(data), 'base64'));
}

main().catch(console.error);
