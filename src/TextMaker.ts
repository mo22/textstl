import opentype from 'opentype.js';
import base64arraybuffer from 'base64-arraybuffer';
import THREE from 'three';
import * as exportSTL from 'threejs-export-stl';

console.log('exportSTL', exportSTL);

// -> use three.js shapes for font
// -> dynamically download fonts: https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR-API-KEY
// -> live preview? / html version?
// -> test CSG: https://github.com/chandlerprall/ThreeCSG/blob/master/threeCSG.es6
/*
function glyphToShapes(glyph) {
    glyph.getMetrics();
    let shapes = [];
    let holes = [];
    for (let contour of glyph.getContours()) {
        let path = new THREE.Path();
        let prev = null;
        let curr = contour[contour.length - 1];
        let next = contour[0];
        if (curr.onCurve) {
            path.moveTo(curr.x, curr.y);
        } else {
            if (next.onCurve) {
                path.moveTo(next.x, next.y);
            } else {
                const start = {x: (curr.x + next.x) * 0.5, y: (curr.y + next.y) * 0.5};
                path.moveTo(start.x, start.y);
            }
        }
        for (let i = 0; i < contour.length; ++i) {
            prev = curr;
            curr = next;
            next = contour[(i + 1) % contour.length];
            if (curr.onCurve) {
                path.lineTo(curr.x, curr.y);
            } else {
                let prev2 = prev;
                let next2 = next;
                if (!prev.onCurve) {
                    prev2 = { x: (curr.x + prev.x) * 0.5, y: (curr.y + prev.y) * 0.5 };
                    path.lineTo(prev2.x, prev2.y);
                }
                if (!next.onCurve) {
                    next2 = { x: (curr.x + next.x) * 0.5, y: (curr.y + next.y) * 0.5 };
                }
                path.lineTo(prev2.x, prev2.y);
                path.quadraticCurveTo(curr.x, curr.y, next2.x, next2.y);
            }
        }
        path.closePath();
        var sum = 0;
        var lastPoint = contour[contour.length-1];
        for (let point of contour) {
            sum += (lastPoint.x - point.x) * (point.y + lastPoint.y);
            lastPoint = point;
        }
        if (sum > 0) {
            holes.push(path);
        } else {
            let shape = new THREE.Shape();
            shape.add(path);
            shapes.push(shape);
        }
    }
    for (let shape of shapes) {
        shape.holes = holes;
    }
    return shapes;
}


function glyphToShapes2(glyph) {
    let shapes = [];
    // holes ?!
    var shape = new THREE.Shape();
    for (let cmd of glyph.getPath().commands) {
        if (cmd.type == 'M') {
            shape.moveTo(cmd.x, cmd.y);
        } else if (cmd.type == 'L') {
            shape.lineTo(cmd.x, cmd.y);
        } else if (cmd.type == 'Q') {
            shape.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y);
        } else if (cmd.type == 'Z') {
            shape.closePath();
            shapes.push(shape);
            shape = new THREE.Shape();
        } else {
            console.log('CMD', cmd);
        }
    }
    if (shape.curves.length > 0) shapes.push(shape);
    return shapes;
}

export function stringToGeometry(font, string, size, width, kerning=0) {
    let geometries = [];
    var dx = 0;
    font.forEachGlyph(string, 0, 0, size, {}, (glyph, x, y) => {
        x += dx;
        dx += (typeof kerning == 'number') ? kerning : kerning.shift();
        let shapes = glyphToShapes(glyph);
        let geometry = new THREE.ExtrudeGeometry(shapes, {
            steps: 1,
            amount: width,
            bevelEnabled: false,
        });
        geometry.applyMatrix( new THREE.Matrix4().makeScale(1 / font.unitsPerEm * size, 1 / font.unitsPerEm * size, 1) );
        geometry.applyMatrix( new THREE.Matrix4().makeTranslation(x, y, 0) );
        geometries.push(geometry);
    });

    let geometry = geometries[0];
    for (let i of geometries.slice(1)) geometry.merge(i);
    return geometry;
}
*/
export function loadFont(arg: string) {
    let font = opentype.parse(arg);
    return font;
}

export function geometryToSTL(geometry) {
    let tmp = geometry.type;
    geometry.type = 'Geometry'; // bug in exportSTL?
    let data = exportSTL.fromGeometry(geometry);
    geometry.type = tmp;
    return data;
}
