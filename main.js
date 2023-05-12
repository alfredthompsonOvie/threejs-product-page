import './style.css'
import { World } from './world/World';

async function init() {
  const canvas = document.querySelector('#scene__container');
  const world = new World(canvas);

  // world.render()
  await world.init();

  world.start();
}
init().catch(err=>console.log(err));
