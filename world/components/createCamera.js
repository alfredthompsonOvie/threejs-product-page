import { PerspectiveCamera } from "three";  

function createCamera() { 
  const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 10;

  return camera;
}

export { createCamera };