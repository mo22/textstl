import * as TextMaker from './TextMaker.js';
import * as base64arraybuffer from 'base64-arraybuffer';
import * as THREE from 'three';
import base64font from './Damion-Regular.js';
import OrbitControls from 'three-orbit-controls';

async function main() {
  let font = TextMaker.loadFont(base64arraybuffer.decode(base64font));
  let geometry = TextMaker.stringToGeometry(font, 'Hallo', 72, 20);

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
      1024.0 / 768.0,
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

  // input for text
  // select for font?
  
  // click -> download stl
}

main().catch(console.error);
