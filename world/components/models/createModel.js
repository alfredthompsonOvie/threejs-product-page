import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setupModel } from './setupModels';

async function createModel() { 
  const loader = new GLTFLoader();

  const pony_cartoonData = await loader.loadAsync('src/assets/models/Parrot.glb');
  // const pony_cartoonData = await loader.loadAsync('src/assets/models/SheenChair.glb');
  
  console.log(pony_cartoonData);
  const pony_cartoon = setupModel(pony_cartoonData)
  console.log(pony_cartoon);
  pony_cartoon.position.set(10, -5, -8)
  return pony_cartoon;
}

export { createModel };