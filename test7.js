import * as opentype from 'opentype.js';
import earcut from 'earcut';

// Signature: earcut(vertices[, holes, dimensions = 2]).
// vertices is a flat array of vertice coordinates like [x0,y0, x1,y1, x2,y2, ...].
// holes is an array of hole indices if any (e.g. [5, 8] for a 12-vertice input would mean one hole with vertices 5–7 and another with 8–11).
// dimensions is the number of coordinates per vertice in the input array (2 by default).

async function main() {
    let font = await new Promise((resolve, reject) => {
        opentype.load('Damion-Regular.ttf', (err, font) => err ? reject(err) : resolve(font));
    });

    let glyph = font.charToGlyph('8');
    glyph.getMetrics(); // required? why?

    // console.log('A', glyph.getMetrics()); // xMin, yMax, leftSideBearing, rightSideBearing
    // console.log('B', glyph.getContours()); // array of array, onCurve, lastPointOfContour, x, y

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

    let width = 200;

    let top = [];
    let bottom = [];
    for (let tri of triangles) {
        bottom.push({
            a: { x: tri.a.x, y: tri.a.y, z: -width/2 },
            b: { x: tri.c.x, y: tri.c.y, z: -width/2 },
            c: { x: tri.b.x, y: tri.b.y, z: -width/2 },
        });
        top.push({
            a: { x: tri.a.x, y: tri.a.y, z: +width/2 },
            b: { x: tri.b.x, y: tri.b.y, z: +width/2 },
            c: { x: tri.c.x, y: tri.c.y, z: +width/2 },
        });
    }

    let sides = [];
    for (let contour of [].concat(segments).concat(holes)) {
        var lastPoint = contour[contour.length-1];
        for (let point of contour) {
            sides.push({
                a: { x: lastPoint.x, y: lastPoint.y, z: +width/2 },
                b: { x: point.x,     y: point.y,     z: +width/2 },
                c: { x: lastPoint.x, y: lastPoint.y, z: -width/2 },
            });
            sides.push({
                a: { x: lastPoint.x, y: lastPoint.y, z: -width/2 },
                b: { x: point.x,     y: point.y,     z: +width/2 },
                c: { x: point.x,     y: point.y,     z: -width/2 },
            });
            lastPoint = point;
        }
    }

    let all = [].concat(top).concat(bottom).concat(sides);

    // STL?
    var buffer = 'solid test\n';
    for (let tri of all) {
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
    require('fs').writeFileSync('test.stl', buffer);

    // var geometry = new THREE.Geometry();
    // geometry.vertices.push(
    //     new THREE.Vector3( -10,  10, 0 ),
    //     new THREE.Vector3( -10, -10, 0 ),
    //     new THREE.Vector3(  10, -10, 0 )
    // );
    // geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

}

main().catch(console.error);
