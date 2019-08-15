declare module 'three-orbit-controls' {
  import * as THREE from 'three';

  export class OrbitControls {
    public constructor(camera: THREE.Camera, container: HTMLElement);
  }

  export default function create(three: any): typeof OrbitControls;

}
