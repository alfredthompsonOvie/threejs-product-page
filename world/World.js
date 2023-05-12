import { createCamera } from "./components/createCamera";
import { createLight } from "./components/createLight";
import { createModel } from "./components/models/createModel";
import { createScene } from "./components/createScene";

import { createControls } from "./systems/createControls";
import { createRenderer } from "./systems/createRenderer";
import { Loop } from "./systems/Loop";
import { Resizer } from "./systems/Resizer";

class World {
	#camera;
	#scene;
	#renderer;
	// don't think i'll be needing loop
  #loop;
  #controls
	constructor(container) {
		this.#camera = createCamera();
		this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer)
    container.append(this.#renderer.domElement);
    this.#controls = createControls(this.#camera, this.#renderer.domElement);

    const { mainLight, rectLight } = createLight();

    this.#loop.updatables.push(this.#controls);
		// this.#scene.add(ambientLight, mainLight);
		this.#scene.add(mainLight, rectLight);

		const resizer = new Resizer(this.#camera, container, this.#renderer);

	}

	render() {
		this.#renderer.render(this.#scene, this.#camera);
	}
  start() {
    this.#loop.start()
  }
	stop() {}
  async init() {
    
		// const { parrot } = await createModel();
		// const { sheenChair } = await createModel();
		// const { ponyCartoon } = await createModel();
		// const { cornFlakes } = await createModel();
		// const { diamondRing } = await createModel();

		const { appleJuiceBottle } = await createModel();
		// const { blackDiamondRing } = await createModel();
		// const { facecap } = await createModel();
		// const { horse } = await createModel();
		// const { wireless_gaming_headset } = await createModel();

		// controls.target.copy(parrot.position);
		// loop.updatables.push(parrot, stork, flamingo);
		// const model = await createModel();
		// console.log(model);
		// this.#scene.add(model.scene);

		// this.#scene.add(parrot);
		// this.#scene.add(sheenChair);
		// this.#scene.add(ponyCartoon);
		// this.#loop.updatables.push(cornFlakes);
		// this.#scene.add(cornFlakes);
		// this.#loop.updatables.push(diamondRing);
		// this.#scene.add(diamondRing);

		this.#loop.updatables.push(appleJuiceBottle);
		this.#scene.add(appleJuiceBottle);

		//! not working
		// this.#loop.updatables.push(blackDiamondRing);
		// this.#scene.add(blackDiamondRing);
		// this.#loop.updatables.push(facecap);
		// this.#scene.add(facecap);
		// this.#loop.updatables.push(horse);
		// this.#scene.add(horse);
		// this.#loop.updatables.push(wireless_gaming_headset);
		// this.#scene.add(wireless_gaming_headset);
	}
}

export { World };
