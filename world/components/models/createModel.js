import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setupModel } from './setupModels';


async function createModel() { 
  const loader = new GLTFLoader();
  const parrotUrl = 'src/assets/models/Parrot.glb';
  const sheenChairUrl = 'src/assets/models/SheenChair.glb';
  const ponyCartoonUrl = 'src/assets/models/pony_cartoon.glb';
  const cornFlakesUrl = 'src/assets/models/corn_flakes_retro_edition.glb';
  const diamondRingUrl = 'src/assets/models/diamond_encrusted_gold_ring.glb';
  
  const appleJuiceBottleUrl = 'src/assets/models/apple_juice_bottle.glb';
  const blackDiamondRingUrl = 'src/assets/models/black_diamond_ring.glb';
  const facecapUrl = 'src/assets/models/facecap.glb';
  const horseUrl = 'src/assets/models/Horse.glb';
  const wireless_gaming_headsetUrl = 'src/assets/models/wireless_gaming_headset.glb';


  const parrotData = await loader.loadAsync(parrotUrl);
  const sheenChairData = await loader.loadAsync(sheenChairUrl);
  const ponyCartoonData = await loader.loadAsync(ponyCartoonUrl);
  const cornFlakesData = await loader.loadAsync(cornFlakesUrl);
  // const diamondRingData = await loader.loadAsync(diamondRingUrl);
  const appleJuiceBottleData = await loader.loadAsync(appleJuiceBottleUrl);
  // const blackDiamondRingData = await loader.loadAsync(blackDiamondRingUrl);
  // const facecapData = await loader.loadAsync(facecapUrl);
  // const horseData = await loader.loadAsync(horseUrl);
  // const wireless_gaming_headsetData = await loader.loadAsync(wireless_gaming_headsetUrl);

  // console.log(parrotData);
  // console.log(ponyCartoonData);

  // const parrot = setupModel(parrotData);
  // parrot.position.set(0, 0, -85);
  
  // const sheenChair = setupModel(sheenChairData);
  // sheenChair.position.set(0, 0, 9);
  // sheenChair.rotation.set(-4.5, 0, 0)

  // const ponyCartoon = setupModel(ponyCartoonData)
  // ponyCartoon.position.set(0, -1, 6);
  
  // const cornFlakes = setupModel(cornFlakesData)
  // cornFlakes.position.set(0, -0.3, 9.3);
  // // cornFlakes.rotation.set(-0.6, 0.6, 0)
  // cornFlakes.rotation.z = 1.6
  
  // const diamondRing = setupModel(diamondRingData)
  // diamondRing.position.set(0, 0, 8.5);
  // diamondRing.position.set(0, 0, 8);
  
  const appleJuiceBottle = setupModel(appleJuiceBottleData)
  // // appleJuiceBottle.position.set(0, -12, -12);
  // appleJuiceBottle.position.set(0, -12, -12);
  appleJuiceBottle.position.set(0, -12, -12);
  // appleJuiceBottle.rotation.set(0, 0, 0);
  appleJuiceBottle.scale.set(0.9, 0.9, 0.9);
  
  // const blackDiamondRing = setupModel(blackDiamondRingData)
  // appleJuiceBottle.position.set(0, -12, -12);
  // appleJuiceBottle.position.set(0, -12, -12);
  // appleJuiceBottle.position.set(0, -12, -12);
  // appleJuiceBottle.scale.set(0.9, 0.9, 0.9);
  
  // const blackDiamondRing = setupModel(blackDiamondRingData);
  // const facecap = setupModel(facecapData);
  // const horse = setupModel(horseData);
  // const wireless_gaming_headset = setupModel(wireless_gaming_headsetData);

  // return { parrot };
  // return { sheenChair };
  // return { ponyCartoon };
  // return { cornFlakes };
  // return { diamondRing };

  return { appleJuiceBottle };
  // return { blackDiamondRing };
  // return { facecap };
  // return { horse };
  // return { wireless_gaming_headset };

}

export { createModel };