import { DirectionalLight, HemisphereLight, RectAreaLight } from "three";

function createLight() {
	const rectLight = new RectAreaLight('white', 1, 15, 4)
	rectLight.position.set(0, 10, 9);
	const ambientLight = new HemisphereLight("white", "darkslategrey", 8);
	const mainLight = new DirectionalLight("white", 1);
	// mainLight.position.set(-10, 0, 10);
	mainLight.position.set(10, 10, 10);

	return { mainLight, rectLight };
}

export { createLight };
