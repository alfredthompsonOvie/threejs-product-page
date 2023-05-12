import { PerspectiveCamera, OrthographicCamera } from "three";  

function createCamera() { 
  const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 10;
  // const left = -2;
  // const right = 2;
  // const bottom = -2;
  // const top = 2;
  // const orthNear = 1;
  // const orthFar = 50;
  // const camera = new OrthographicCamera(left, right, top, bottom, orthNear, orthFar);
  // camera.zoom = 0.1;
  
  camera.position.x = 10;
  // camera.rotation.x = 10;

  return camera;
}

export { createCamera };