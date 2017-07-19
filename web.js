import * as React from 'react';
import ReactDOM from 'react-dom';

import * as TextMaker from './TextMaker.js';
import * as base64arraybuffer from 'base64-arraybuffer';
import * as THREE from 'three';
import googleFonts from 'google-fonts-complete';
import OrbitControls from 'three-orbit-controls';

// font kerning
// click to download stl
// text field: text
// select field: font
// text field: size / width ?







async function generateGeometry(options) {
  let fontSize = options.fontSize || 72;
  let width = options.width || 20;
  let text = options.text || 'Hello';
  let kerning = options.kerning || 0;
  let output = options.output || 'output.stl';
  let fontName = options.font || 'Damion';
  let fontVariant = options.fontVariant || 'normal'; // 'italic?'
  let fontWeight = options.fontWeight || '400';
  if (!(fontName in googleFonts)) {
    console.log(Object.keys(googleFonts));
    throw new Error('font not found');
  }
  let variants = googleFonts[fontName].variants;
  let variant = variants[fontVariant] || variants[Object.keys(variants)[0]];
  let face = variant['400'] || variant[Object.keys(variant)[0]];
  generateGeometry.fontCache = generateGeometry.fontCache || {};
  let fontData;
  if (face.url.ttf in generateGeometry.fontCache) {
    fontData = generateGeometry.fontCache[face.url.ttf];
  } else {
    let res = await fetch(face.url.ttf);
    fontData = await res.arrayBuffer();
    generateGeometry.fontCache[face.url.ttf] = fontData;
  }
  let font = TextMaker.loadFont(fontData);
  let geometry = TextMaker.stringToGeometry(font, text, fontSize, width);
  // kerning!
  return geometry;
}






async function main() {
  let geometry = await generateGeometry({
  });

  // center
  geometry.computeBoundingBox();
  geometry.applyMatrix( new THREE.Matrix4().makeTranslation(-geometry.boundingBox.max.x/2, -geometry.boundingBox.max.y/2, 0) );

  // render
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(document.querySelector('#surface').offsetWidth, document.querySelector('#surface').offsetHeight);
  renderer.setPixelRatio( window.devicePixelRatio );
  document.querySelector('#surface').appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera =
    new THREE.PerspectiveCamera(
      45,
      document.querySelector('#surface').offsetWidth / document.querySelector('#surface').offsetHeight,
      0.1,
      10000
    );
  scene.add(camera);

  const controls = new (OrbitControls(THREE))(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI * 1;
  controls.minDistance = 200;
  controls.maxDistance = 1000;

  const pointLight = new THREE.PointLight(0xFFFFFF);
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;
  scene.add(pointLight);

  const material =new THREE.MeshLambertMaterial({
    color: 0xCCCCCC
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  function render() {
    requestAnimationFrame(render);
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
  render();

  // choose font
  // react?
  //

}

//main().catch(console.error);

class ThreePreview extends React.Component {

  setSurface(div) {
    console.log('div', div);
  }

  render() {
    return (
      <div style={{width:1024, height:768}} ref={::this.setSurface} />
    );
  }

}




class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>test</h1>
        <ThreePreview />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.querySelector('BODY'));



