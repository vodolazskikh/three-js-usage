import { Scene, WebGLRenderer, AmbientLight, PerspectiveCamera } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// Import our glTF model.
import gltfUrl from '../models/fox/Fox.gltf'
export function drawModel() {
    // Create the renderer and scene, which will consist of one light and the main camera.
    const target = document.getElementById('three')

    // Готовим рендерер
    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new Scene()

    const camera = new PerspectiveCamera(
        10,
        window.innerWidth / window.innerHeight,
        1,
        1000
    )

    camera.position.set(200, 40, 760)
    camera.lookAt(0, 40, 0)
    scene.add(camera)

    const light = new AmbientLight()
    scene.add(light)

    // Load the glTF model and add it to the scene.
    const loader = new GLTFLoader()
    loader.load(gltfUrl, (gltf) => {
        scene.add(...gltf.scene.children)
    })

    // Готовим дом-ноду
    if (target.children[0]) {
        target.removeChild(target.children[0])
    }

    target.appendChild(renderer.domElement)

    // Start the engine's main render loop.
    function animate() {
        requestAnimationFrame(animate)

        renderer.render(scene, camera)
    }

    animate()
}
