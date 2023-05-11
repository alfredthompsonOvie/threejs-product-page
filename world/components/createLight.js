import { DirectionalLight, HemisphereLight } from "three";

function createLight() {
	const ambientLight = new HemisphereLight("white", "darkslategrey", 1);
	const mainLight = new DirectionalLight("white", 1);
	mainLight.position.set(10, 10, 10);

	return { ambientLight, mainLight };
}

export { createLight };
