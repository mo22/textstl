import * as opentype from 'opentype.js';
import * as THREE from 'three';
import * as exportSTL from 'threejs-export-stl';

// -> use three.js shapes for font
// -> dynamically download fonts: https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR-API-KEY
// -> live preview? / html version?
// -> test CSG: https://github.com/chandlerprall/ThreeCSG/blob/master/threeCSG.es6


export interface ContourPoint {
  x: number;
  y: number;
  onCurve: boolean;
}

export type Contour = ContourPoint[];

export function glyphToShapes(glyph: opentype.Glyph) {
  glyph.getMetrics();
  const shapes: THREE.Shape[] = [];
  const holes: THREE.Path[] = [];
  for (const contour of (glyph.getContours() as Contour[])) {
    const path = new THREE.Path();
    let prev: ContourPoint|null = null;
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
          prev2 = { x: (curr.x + prev.x) * 0.5, y: (curr.y + prev.y) * 0.5, onCurve: false };
          path.lineTo(prev2.x, prev2.y);
        }
        if (!next.onCurve) {
          next2 = { x: (curr.x + next.x) * 0.5, y: (curr.y + next.y) * 0.5, onCurve: false };
        }
        path.lineTo(prev2.x, prev2.y);
        path.quadraticCurveTo(curr.x, curr.y, next2.x, next2.y);
      }
    }
    path.closePath();
    let sum = 0;
    let lastPoint = contour[contour.length - 1];
    for (const point of contour) {
      sum += (lastPoint.x - point.x) * (point.y + lastPoint.y);
      lastPoint = point;
    }
    if (sum > 0) {
      holes.push(path);
    } else {
      const shape = new THREE.Shape();
      shape.add(path);
      shapes.push(shape);
    }
  }
  for (const shape of shapes) {
    shape.holes = holes;
  }
  return shapes;
}

export function stringToGeometry(args: {
  font: opentype.Font;
  text: string;
  size: number;
  width: number;
  kerning?: number|number[];
}): THREE.Geometry {
  const geometries: THREE.Geometry[] = [];
  let dx = 0;
  args.font.forEachGlyph(args.text, 0, 0, args.size, undefined, (glyph, x, y) => {
    x += dx;
    if (typeof args.kerning === 'number') {
      dx += args.kerning;
    } else if (Array.isArray(args.kerning) && args.kerning.length > 0) {
      dx += args.kerning.shift()!;
    }
    const shapes = glyphToShapes(glyph);
    const geometry = new THREE.ExtrudeGeometry(shapes, {
      steps: 1,
      depth: args.width,
      // amount: args.width,
      bevelEnabled: false,
    });
    geometry.applyMatrix( new THREE.Matrix4().makeScale(1 / args.font.unitsPerEm * args.size, 1 / args.font.unitsPerEm * args.size, 1) );
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation(x, y, 0) );
    geometries.push(geometry);
  });
  const geometry = geometries[0];
  for (const i of geometries.slice(1)) geometry.merge(i);
  return geometry;
}

export function loadFont(arg: ArrayBuffer): opentype.Font {
  const font = opentype.parse(arg);
  return font;
}

export function geometryToSTL(geometry: THREE.Geometry) {
  const tmp = geometry.type;
  geometry.type = 'Geometry'; // bug in exportSTL?
  const data = exportSTL.fromGeometry(geometry);
  geometry.type = tmp;
  return data;
}
