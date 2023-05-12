import { AnimationMixer } from "three";
import { MathUtils } from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const hero = document.querySelector('.hero');
// console.log(hero.getBoundingClientRect());
function setupModel(data) {
	const model = data.scene.children[0];
	// const clip = data.animations[0];

	// const mixer = new AnimationMixer(model);
	// const action = mixer.clipAction(clip);
	// action.play();

	// model.tick = (delta) => mixer.update(delta);

  // const scroll = { y: 0 };

  model.tick = (delta) => {
    const radiansPerSecond = MathUtils.degToRad(30);
    model.rotation.z += radiansPerSecond * delta
    // model.rotation.x += radiansPerSecond * delta
    // model.rotation.y += radiansPerSecond * delta
	};

	return model;
}

export { setupModel };
