declare module 'three-orbit-controls' {

  export class OrbitControls {
    public constructor();
  }

  export default function create(three: any): OrbitControls;

}
