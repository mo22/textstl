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
    console.log('triangles', triangles);

    let width = 5;

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

    console.log('sides', sides);






    console.log('segments', segments.length, 'holes', holes.length);

}

main().catch(console.error);
