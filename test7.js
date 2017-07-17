import * as opentype from 'opentype.js';

async function main() {
    let font = await new Promise((resolve, reject) => {
        opentype.load('Damion-Regular.ttf', (err, font) => err ? reject(err) : resolve(font));
    });

    let path = font.getPath('Hello, World!', 0, 150, 72);
    console.log('path', path.commands);
}

main().catch(console.error);


// opentype.load('Damion-Regular.ttf', (err, font) => {
//   console.log('test?', err, font);
//     // if (err) {
//     //      alert('Font could not be loaded: ' + err);
//     // } else {
//     //     var ctx = document.getElementById('canvas').getContext('2d');
//     //     // Construct a Path object containing the letter shapes of the given text.
//     //     // The other parameters are x, y and fontSize.
//     //     // Note that y is the position of the baseline.
//     //     var path = font.getPath('Hello, World!', 0, 150, 72);
//     //     // If you just want to draw the text you can also use font.draw(ctx, text, x, y, fontSize).
//     //     path.draw(ctx);
//     // }
// });



// var glyphs = [notdefGlyph, aGlyph];
// var font = new opentype.Font({
//     familyName: 'OpenTypeSans',
//     styleName: 'Medium',
//     unitsPerEm: 1000,
//     ascender: 800,
//     descender: -200,
//     glyphs: glyphs});
// font.download();


// var aPath = new opentype.Path();
// aPath.moveTo(100, 0);
// aPath.lineTo(100, 700);
// // more drawing instructions...
// var aGlyph = new opentype.Glyph({
//     name: 'A',
//     unicode: 65,
//     advanceWidth: 650,
//     path: aPath
// });
