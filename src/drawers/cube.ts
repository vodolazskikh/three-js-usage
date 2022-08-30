import {
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
} from 'three'

// Рисуем куб
export function drawCube() {
    const scene = new Scene()

    // Готовим камеру
    const camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        500
    )
    camera.position.set(0, 0, 100)
    camera.lookAt(0, 0, 0)

    // Готовим дом-ноду
    const target = document.getElementById('three')
    if (target.children[0]) {
        target.removeChild(target.children[0])
    }

    // Готовим рендерер
    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    target.appendChild(renderer.domElement)

    // Готовим куб
    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial({ color: 'red' })
    const cube = new Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    // Рендерим и анимируем куб
    function animate() {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera)
    }

    animate()
}
