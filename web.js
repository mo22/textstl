import * as TextMaker from './TextMaker.js';
import * as base64arraybuffer from 'base64-arraybuffer';
import * as THREE from 'three';
import base64font from './Damion-Regular.js';

async function main() {
  let font = TextMaker.loadFont(base64arraybuffer.decode(base64font));
  let geometry = TextMaker.stringToGeometry(font, 'Hallo', 72, 20);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(1024, 768);
  document.querySelector('#surface').appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera =
    new THREE.PerspectiveCamera(
      45,
      1024.0 / 768.0,
      0.1,
      10000
    );
  scene.add(camera);

  const pointLight = new THREE.PointLight(0xFFFFFF);
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;
  scene.add(pointLight);

  const material =new THREE.MeshLambertMaterial({
    color: 0xCC0000
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -3000;

  scene.add(mesh);

  renderer.render(scene, camera);




  // per-char offset
  // per-char size?
  // kerning offset
  // let stl = TextMaker.geometryToSTL(geometry);


}

main().catch(console.error);
