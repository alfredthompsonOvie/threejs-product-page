import './style.css'
import { World } from './world/World';

function init() {
  const canvas = document.querySelector('#scene__container');
  const world = new World(canvas);

  world.render()
}
init();
