import * as React from 'react';
import ReactDOM from 'react-dom';

import * as TextMaker from './TextMaker.js';
import * as base64arraybuffer from 'base64-arraybuffer';
import * as THREE from 'three';
import googleFonts from 'google-fonts-complete';
import OrbitControls from 'three-orbit-controls';




async function generateGeometry(options) {
  let fontSize = options.fontSize || 72;
  let width = options.width || 20;
  let text = options.text || 'Hello';
  let kerning = options.kerning || 0;
  let fontName = options.font || 'Damion';
  let fontVariant = options.fontVariant || 'normal'; // 'italic?'
  let fontWeight = options.fontWeight || '400';
  if (!(fontName in googleFonts)) {
    console.log(Object.keys(googleFonts));
    throw new Error('font not found');
  }
  let variants = googleFonts[fontName].variants;
  let variant = variants[fontVariant] || variants[Object.keys(variants)[0]];
  let face = variant[fontWeight] || variant[Object.keys(variant)[0]];
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
  let geometry = TextMaker.stringToGeometry(font, text, fontSize, width, kerning);
  return geometry;
}





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
    requestAnimationFrame(() => this.renderFrame());
    this.frame++;
    // this.mesh.rotation.x = 0.005 * this.frame;
    // this.mesh.rotation.y = 0.002 * this.frame;
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }

  setSurface(div) {
    this.surface = div;
    if (!div) return;
  }

  render() {
    return (
      <div style={{width:1024, height:768}} ref={() => this.setSurface()} />
    );
  }

}







class Main extends React.Component {
  state = {
    text: 'Hello!',
    fontName: 'Damion',
    fontSize: '72',
    width: '20',
    fontVariant: 'normal',
    fontWeight: '400',
    kerning: '0',
    geometry: null,
  }

  async updateGeometry() {
    let geometry = await generateGeometry({
      text: this.state.text,
      font: this.state.fontName,
      fontSize: parseFloat(this.state.fontSize),
      width: parseFloat(this.state.width),
      fontWeight: this.state.fontWeight,
      fontVariant: this.state.fontVariant,
      kerning: (this.state.kerning.indexOf(',')>=0) ? this.state.kerning.split(',').map(parseFloat) : parseFloat(this.state.kerning),
    });
    this.geometry = geometry;
    geometry.computeBoundingBox();
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation(-geometry.boundingBox.max.x/2, -geometry.boundingBox.max.y/2, 0) );
    this.setState({ geometry: geometry });
  }

  download() {
    let stl = TextMaker.geometryToSTL(this.geometry);
    let blob = new Blob([stl], { type: 'application/octet-stream' });
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'output.stl';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.text != this.state.text ||
        prevState.fontName != this.state.fontName ||
        prevState.fontSize != this.state.fontSize ||
        prevState.fontVariant != this.state.fontVariant ||
        prevState.fontWeight != this.state.fontWeight ||
        prevState.kerning != this.state.kerning ||
        prevState.width != this.state.width
      ) {
      this.updateGeometry();
    }
  }

  componentDidMount() {
    this.updateGeometry();
  }

  renderSettings() {
    return (
      <div>
        <div>
          <label style={{ display: 'inline-block', width: 80, margin: 10 }}>Text</label>
          <input style={{ width: 160, margin: 10 }} type="text" value={this.state.text} onChange={(event) => this.setState({ text: event.target.value })} />
        </div>
        <div>
          <label style={{ display: 'inline-block', width: 80, margin: 10 }}>Font</label>
          <select style={{ width: 160, margin: 10 }} value={this.state.fontName} onChange={(event) => this.setState({ fontName: event.target.value })}>
            {Object.keys(googleFonts).map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ display: 'inline-block', width: 80, margin: 10 }}>Size</label>
          <input style={{ width: 160, margin: 10 }} type="text" value={this.state.fontSize} onChange={(event) => this.setState({ fontSize: event.target.value })} />
        </div>
        <div>
          <label style={{ display: 'inline-block', width: 80, margin: 10 }}>Kerning</label>
          <input style={{ width: 160, margin: 10 }} type="text" value={this.state.kerning} onChange={(event) => this.setState({ kerning: event.target.value })} />
        </div>
        <div>
          <label style={{ display: 'inline-block', width: 80, margin: 10 }}>Width</label>
          <input style={{ width: 160, margin: 10 }} type="text" value={this.state.width} onChange={(event) => this.setState({ width: event.target.value })} />
        </div>
        <div>
          <label style={{ display: 'inline-block', width: 80, margin: 10 }}>Variant</label>
          <select style={{ width: 160, margin: 10 }} value={this.state.fontVariant} onChange={(event) => this.setState({ fontVariant: event.target.value })}>
            <option value="normal">normal</option>
            <option value="italic">italic</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'inline-block', width: 80, margin: 10 }}>Weight</label>
          <select style={{ width: 160, margin: 10 }} value={this.state.fontWeight} onChange={(event) => this.setState({ fontWeight: event.target.value })}>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
          </select>
        </div>
        <div>
          <button style={{ alignSelf: 'center', margin: 10 }} onClick={() => this.download()}>download .stl</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        <ThreePreview geometry={this.state.geometry} style={{ display: 'flex', flex: 1 }} />
        <div style={{ display: 'flex', width: 300, backgroundColor: 'powderblue' }}>
          {this.renderSettings()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.querySelector('#root'));
