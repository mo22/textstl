import * as React from 'react';
import ReactDOM from 'react-dom';
import * as TextMaker from './TextMaker';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbit-controls';
import * as googleFonts from 'google-fonts-complete';

console.log('googleFonts', googleFonts);
console.log('OrbitControls', OrbitControls);

async function generateGeometry(options: any): Promise<THREE.Geometry> {
  const fontSize = options.fontSize || 72;
  const width = options.width || 20;
  const text = options.text || 'Hello';
  const kerning = options.kerning || 0;
  const fontName = options.font || 'Damion';
  const fontVariant = options.fontVariant || 'normal'; // 'italic?'
  const fontWeight = options.fontWeight || '400';
  if (!(fontName in googleFonts)) {
    console.log(Object.keys(googleFonts));
    throw new Error('font not found');
  }
  const variants = googleFonts[fontName].variants;
  const variant = variants[fontVariant] || variants[Object.keys(variants)[0]];
  const face = variant[fontWeight] || variant[Object.keys(variant)[0]];
/*
  generateGeometry.fontCache = generateGeometry.fontCache || {};
  let fontData;
  if (face.url.ttf in generateGeometry.fontCache) {
    fontData = generateGeometry.fontCache[face.url.ttf];
  } else {
    let res = await fetch(face.url.ttf);
    fontData = await res.arrayBuffer();
    generateGeometry.fontCache[face.url.ttf] = fontData;
  }
*/
  const res = await fetch(face.url.ttf!);
  const fontData = await res.arrayBuffer();
  const font = TextMaker.loadFont(fontData);
  const geometry = TextMaker.stringToGeometry({
    font: font,
    text: text,
    size: fontSize,
    width: width,
    kerning: kerning,
  });
  return geometry;
}



interface ThreePreviewProps {
  geometry?: THREE.Geometry;
  style?: any;
}

class ThreePreview extends React.Component<ThreePreviewProps, {}> {
  private active = false;
  private frame: number;
  private scene: THREE.Scene;
  private camera: THREE.Camera;
  private renderer: THREE.WebGLRenderer;
  private geometry?: THREE.Geometry;
  private mesh?: THREE.Mesh;
  private surface: HTMLDivElement | null;
  private controls: any;

  public componentWillUnmount() {
    this.active = false;
  }

  public componentDidMount() {
    this.active = true;
    this.frame = 0;
    this.scene = new THREE.Scene();

    const lights = [];
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

    // surface does not exist yet.

    this.camera = new THREE.PerspectiveCamera(
      75, // 45? 75?
      1024 / 768,
      0.1,
      10000
    );
    this.camera.position.z = 200;
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(1024, 768);
    this.renderer.setClearColor(0xffffff, 1);

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

  public componentDidUpdate(prevProps: ThreePreviewProps) {
    if (prevProps.geometry !== this.props.geometry) {
      this.setGeometry(this.props.geometry);
    }
  }

  public setGeometry(geometry: THREE.Geometry|undefined) {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh = undefined;
    }
    this.geometry = geometry;
    if (this.geometry) {
      this.mesh = new THREE.Mesh(
        this.geometry,
        new THREE.MeshPhongMaterial({
          color: 0x156289,
          emissive: 0x072534,
          side: THREE.DoubleSide,
          // shading: THREE.FlatShading,
        })
      );
      this.scene.add(this.mesh);
    }
  }

  private renderFrame() {
    if (!this.active) return;
    requestAnimationFrame(() => this.renderFrame());
    this.frame++;
    if (this.mesh) {
      this.mesh.rotation.x = 0.005 * this.frame;
    }
    // this.mesh.rotation.y = 0.002 * this.frame;
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }

  private setSurface(surface: HTMLDivElement|null) {
    this.surface = surface;
    if (this.surface) {
      this.surface.appendChild(this.renderer.domElement);
    }
  }

  public render() {
    return (
      <div
        style={{ width: 1024, height: 768 }}
        ref={(ref) => this.setSurface(ref)}
      />
    );
  }

}



interface MainProps {
}
interface MainState {
  text: string;
  fontName: string;
  fontSize: string;
  width: string;
  fontVariant: string;
  fontWeight: string;
  kerning: string;
  geometry: THREE.Geometry|undefined;
}
class Main extends React.Component<MainProps, MainState> {
  public state: MainState = {
    text: 'Hello!',
    fontName: 'Damion',
    fontSize: '72',
    width: '20',
    fontVariant: 'normal',
    fontWeight: '400',
    kerning: '0',
    geometry: undefined,
  };

  private geometry: any;

  private async updateGeometry() {
    const geometry = await generateGeometry({
      text: this.state.text,
      font: this.state.fontName,
      fontSize: parseFloat(this.state.fontSize),
      width: parseFloat(this.state.width),
      fontWeight: this.state.fontWeight,
      fontVariant: this.state.fontVariant,
      kerning: (this.state.kerning.indexOf(',') >= 0) ? this.state.kerning.split(',').map(parseFloat) : parseFloat(this.state.kerning),
    });
    this.geometry = geometry;
    geometry.computeBoundingBox();
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation(-geometry.boundingBox.max.x / 2, -geometry.boundingBox.max.y / 2, 0) );
    this.setState({ geometry: geometry });
  }

  private download() {
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

  public componentDidUpdate(_prevProps: MainProps, prevState: MainState) {
    if (prevState.text !== this.state.text ||
        prevState.fontName !== this.state.fontName ||
        prevState.fontSize !== this.state.fontSize ||
        prevState.fontVariant !== this.state.fontVariant ||
        prevState.fontWeight !== this.state.fontWeight ||
        prevState.kerning !== this.state.kerning ||
        prevState.width !== this.state.width
      ) {
      this.updateGeometry();
    }
  }

  public componentDidMount() {
    this.updateGeometry();
  }

  private renderSettings() {
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

  public render() {
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
