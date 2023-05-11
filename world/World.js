import { createCamera } from './components/createCamera';
import { createLight } from './components/createLight';
import { createModel } from './components/models/createModel';
import { createScene } from './components/createScene';

import { createRenderer } from './systems/createRenderer';
import { Resizer } from './systems/Resizer';

class World {
  #camera
  #scene;
  #renderer;
  // don't think i'll be needing loop
  #loop;
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    container.append(this.#renderer.domElement);

    const { ambientLight, mainLight } = createLight();
    this.#scene.add(ambientLight, mainLight);
    
    const resizer = new Resizer(this.#camera, container, this.#renderer)
    
    // const model = createModel();
    // this.#scene.add(model);

  }

  render() { 
    this.#renderer.render(this.#scene, this.#camera);
  }
  start() { }
  stop() { }
    async init() {
    const { parrot } = await createModel();

    // controls.target.copy(parrot.position);
    // loop.updatables.push(parrot, stork, flamingo);

    this.#scene.add(parrot);
  }
}

export { World };