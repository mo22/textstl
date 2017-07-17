import * as opentype from 'opentype.js';
import earcut from 'earcut';
import * as THREE from 'three';

// load font from google fonts?
// https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR-API-KEY
// access-control is da.

function loadFont(file) {
    return new Promise((resolve, reject) => {
        opentype.load('Damion-Regular.ttf', (err, font) => err ? reject(err) : resolve(font));
    });
}

function extrudeGlyph(font, glyph, size, width) {
    let metrics = glyph.getMetrics();
    let fontScale = 1 / font.unitsPerEm * size;

    let segments = [];
    let holes = [];
    for (let contour of glyph.getContours()) {
        var sum = 0;
        var lastPoint = contour[contour.length-1];
        for (let point of contour) {
            sum += (lastPoint.x - point.x) * (point.y + lastPoint.y);
            lastPoint = point;
        }
        if (sum > 0) {
            holes.push(contour);
        } else {
            segments.push(contour);
        }
    }

    let triangles = [];
    for (let segment of segments) {
        let points = [];
        let hole_indices = [];
        for (let i of segment) {
            points.push(i.x);
            points.push(i.y);
        }
        for (let hole of holes) {
            hole_indices.push(points.length/2);
            for (let i of hole) {
                points.push(i.x);
                points.push(i.y);
            }
        }
        let tris = earcut(points, hole_indices, 2);
        for (var i=0; i<tris.length; i+=3) {
            triangles.push({
                a: { x: points[tris[i+0]*2+0], y: points[tris[i+0]*2+1] },
                b: { x: points[tris[i+1]*2+0], y: points[tris[i+1]*2+1] },
                c: { x: points[tris[i+2]*2+0], y: points[tris[i+2]*2+1] },
            });
        }
    }

    let top = [];
    let bottom = [];
    for (let tri of triangles) {
        bottom.push({
            a: { x: tri.a.x, y: tri.a.y, z: -1 },
            b: { x: tri.c.x, y: tri.c.y, z: -1 },
            c: { x: tri.b.x, y: tri.b.y, z: -1 },
        });
        top.push({
            a: { x: tri.a.x, y: tri.a.y, z: +1 },
            b: { x: tri.b.x, y: tri.b.y, z: +1 },
            c: { x: tri.c.x, y: tri.c.y, z: +1 },
        });
    }

    let sides = [];
    for (let contour of [].concat(segments).concat(holes)) {
        var lastPoint = contour[contour.length-1];
        for (let point of contour) {
            sides.push({
                a: { x: lastPoint.x, y: lastPoint.y, z: +1 },
                b: { x: point.x,     y: point.y,     z: +1 },
                c: { x: lastPoint.x, y: lastPoint.y, z: -1 },
            });
            sides.push({
                a: { x: lastPoint.x, y: lastPoint.y, z: -1 },
                b: { x: point.x,     y: point.y,     z: +1 },
                c: { x: point.x,     y: point.y,     z: -1 },
            });
            lastPoint = point;
        }
    }

    let all = [].concat(top).concat(bottom).concat(sides);
    for (let tri of all) {
        tri.a.x *= fontScale;
        tri.a.y *= fontScale;
        tri.a.z *= width/2;
        tri.b.x *= fontScale;
        tri.b.y *= fontScale;
        tri.b.z *= width/2;
        tri.c.x *= fontScale;
        tri.c.y *= fontScale;
        tri.c.z *= width/2;
    }
    return all;
}

function extrudeString(font, string, size, width, options) {
    let result = [];
    var dx = 0;
    var dy = 0;
    font.forEachGlyph(string, 0, 0, size, options, (glyph, x, y) => {
        let triangles = extrudeGlyph(font, glyph, size, width);
        x += dx;
        y += dy;
        dx += options.dx || 0;
        dy += options.dy || 0;
        for (let tri of triangles) {
            tri.a.x += x;
            tri.b.x += x;
            tri.c.x += x;
            tri.a.y += y;
            tri.b.y += y;
            tri.c.y += y;
        }
        result = result.concat(triangles);
    });
    return result;
}

function saveSTL(triangles, filename) {
    var buffer = 'solid test\n';
    for (let tri of triangles) {
        let ab = { x: tri.b.x-tri.a.x, y: tri.b.y-tri.a.y, z: tri.b.z-tri.a.z };
        let cb = { x: tri.c.x-tri.b.x, y: tri.c.y-tri.b.y, z: tri.c.z-tri.b.z };
        let cc = {
            x: ab.y*cb.z - ab.z*cb.y,
            y: ab.z*cb.x - ab.x*cb.z,
            z: ab.x*cb.y - ab.y*cb.x,
        }
        let ccl = Math.sqrt(cc.x*cc.x + cc.y*cc.y + cc.z*cc.z);
        cc.x /= ccl;
        cc.y /= ccl;
        cc.z /= ccl;
        buffer += 'facet normal ' + cc.x + ' ' + cc.y + ' ' + cc.z + '\n';
        buffer += 'outer loop\n';
        buffer += 'vertex ' + tri.a.x + ' ' + tri.a.y + ' ' + tri.a.z + '\n';
        buffer += 'vertex ' + tri.b.x + ' ' + tri.b.y + ' ' + tri.b.z + '\n';
        buffer += 'vertex ' + tri.c.x + ' ' + tri.c.y + ' ' + tri.c.z + '\n';
        buffer += 'endloop\n';
        buffer += 'endfacet\n';
    }
    buffer += 'endsolid test\n';
    require('fs').writeFileSync(filename, buffer);    
}

function toTHREE(triangles) {
    let geometry = new THREE.Geometry();
    for (let tri of triangles) {
        geometry.vertices.push(
            new THREE.Vector3(tri.a.x, tri.a.y, tri.a.z),
            new THREE.Vector3(tri.b.x, tri.b.y, tri.b.z),
            new THREE.Vector3(tri.c.x, tri.c.y, tri.c.z),
        );
        geometry.faces.push(
            new THREE.Face3(geometry.vertices.length-3, geometry.vertices.length-2, geometry.vertices.length-1)
        );
    }
    return geometry;
}

// THREE to binary STL...

async function main() {
    let font = await loadFont('Damion-Regular.ttf');
    // let triangles = extrudeGlyph(font, font.charToGlyph('8'), 72, 20);
    let triangles = extrudeString(font, 'Hallo', 72, 20, {dx: 0});
    saveSTL(triangles, 'test.stl');
}

main().catch(console.error);
