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

  componentWillUnmount() {
    this.active = false;
  }

  componentDidMount() {
    this.active = true;

    this.frame = 0;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, // 45? 75?
      this.surface.offsetWidth / this.surface.offsetHeight,
      0.1,
      10000
    );
    this.camera.position.z = 200;
    this.scene.add(this.camera);

    var lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );
    this.scene.add( lights[ 0 ] );
    this.scene.add( lights[ 1 ] );
    this.scene.add( lights[ 2 ] );

    // this.pointLight = new THREE.PointLight(0xffffff);
    // this.pointLight.position.x = 10;
    // this.pointLight.position.y = 50;
    // this.pointLight.position.z = 130;
    // this.scene.add(this.pointLight);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.surface.offsetWidth, this.surface.offsetHeight);
    this.renderer.setClearColor(0xffffff, 1);
    this.surface.appendChild(this.renderer.domElement);

    this.controls = new (OrbitControls(THREE))(this.camera, this.renderer.domElement);
    this.controls.maxPolarAngle = Math.PI * 1;
    this.controls.minDistance = 200;
    this.controls.maxDistance = 1000;

    if (this.props.geometry) {
      this.setGeometry(this.props.geometry);
    } else {
      this.setGeometry(new THREE.SphereGeometry(60, 8, 8));
    }

    this.renderFrame();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.geometry != this.props.geometry) {
      this.setGeometry(this.props.geometry);
    }
  }

  setGeometry(geometry) {
    if (this.mesh) this.scene.remove(this.mesh);
    this.geometry = geometry;
    this.mesh = new THREE.Mesh(
      this.geometry,
      new THREE.MeshPhongMaterial({
        color: 0x156289,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        shading: THREE.FlatShading,
      })
    );
    this.scene.add(this.mesh);
  }

  renderFrame() {
    if (!this.active) return;
    requestAnimationFrame(::this.renderFrame);
    this.frame++;
    this.mesh.rotation.x = 0.005 * this.frame;
    this.mesh.rotation.y = 0.002 * this.frame;
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }

  setSurface(div) {
    this.surface = div;
    if (!div) return;
  }

  render() {
    return (
      <div style={{width:1024, height:768}} ref={::this.setSurface} />
    );
  }

}







class Main extends React.Component {
  state = {
    text: 'Hello!',
    geometry: null,
  }

  setText(event) {
    this.setState({ text: event.target.value });
  }

  async updateGeometry() {
    let geometry = await generateGeometry({
      text: this.state.text,
    });
    geometry.computeBoundingBox();
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation(-geometry.boundingBox.max.x/2, -geometry.boundingBox.max.y/2, 0) );
    this.setState({ geometry: geometry });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.text != this.state.text) {
      this.updateGeometry();
    }
  }

  componentDidMount() {
    this.updateGeometry();
  }

  render() {
    return (
      <div>
        <h1>test</h1>
        <input type="text" value={this.state.text} onChange={::this.setText} />
        <ThreePreview geometry={this.state.geometry} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.querySelector('#root'));



