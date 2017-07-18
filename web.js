import * as TextMaker from './TextMaker.js';
import * as base64arraybuffer from 'base64-arraybuffer';
import * as THREE from 'three';
import base64font from './Damion-Regular.js';
import OrbitControls from 'three-orbit-controls';

async function main() {
  let font = TextMaker.loadFont(base64arraybuffer.decode(base64font));
  let geometry = TextMaker.stringToGeometry(font, 'Hallo', 72, 20);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(document.querySelector('#surface').offsetWidth, document.querySelector('#surface').offsetHeight);
  renderer.setPixelRatio( window.devicePixelRatio );
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

  const controls = new (OrbitControls(THREE))(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI * 0.5;
  controls.minDistance = 1000;
  controls.maxDistance = 7500;

  const pointLight = new THREE.PointLight(0xFFFFFF);
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;
  scene.add(pointLight);

  const material =new THREE.MeshLambertMaterial({
    color: 0xCC0000
  });

  const mesh = new THREE.Mesh(geometry, material);
  console.log('ASD1', geometry.boundingBox);
  geometry.computeBoundingBox();
  console.log('ASD2', geometry.boundingBox);
  mesh.position.z = -200;
  //mesh.position.x = -100;

  scene.add(mesh);

  function render() {
    requestAnimationFrame(render);
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  render();
}

main().catch(console.error);
