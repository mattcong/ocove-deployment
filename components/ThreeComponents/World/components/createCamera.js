import { PerspectiveCamera, OrthographicCamera } from "three";

const createCamera = () => {
    const camera = new PerspectiveCamera(
        20, 
        window.innerWidth/window.innerHeight, 
        0.1, 
        1000
    );
    
    camera.position.set(0, 0, 5);

    return camera;
}

export { createCamera };