declare module 'threejs-export-stl' {
  import THREE from 'three';
  export const mimeType: string;
  export function fromGeometry(geometry: THREE.Geometry, matrix?: THREE.Matrix, binary: boolean = true): ArrayBuffer;
  export function fromGeometry(geometry: THREE.Geometry, matrix?: THREE.Matrix, binary: boolean = false): string;
  export function fromMesh(mesh: THREE.Mesh, binary: boolean = true): ArrayBuffer;
  export function fromMesh(mesh: THREE.Mesh, binary: boolean = false): string;
}
