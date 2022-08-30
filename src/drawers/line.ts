import {
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    LineBasicMaterial,
    Vector3,
    BufferGeometry,
    Line,
} from 'three'

// Рисуем линию
export function drawLine() {
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

    const target = document.getElementById('three')

    // Готовим рендерер
    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Готовим дом-ноду
    if (target.children[0]) {
        target.removeChild(target.children[0])
    }

    target.appendChild(renderer.domElement)

    // Готовим линию
    const material = new LineBasicMaterial({ color: 0x0000ff })

    const points = []
    points.push(new Vector3(-10, 0, 0))
    points.push(new Vector3(0, 10, 0))
    points.push(new Vector3(10, 0, 0))

    const geometry = new BufferGeometry().setFromPoints(points)

    const line = new Line(geometry, material)

    scene.add(line)
    renderer.render(scene, camera)

    // Рендерим и анимируем куб
    function animate() {
        requestAnimationFrame(animate)
        line.rotation.x += 0.02
        line.rotation.y += 0.02
        line.rotation.z += 0.02

        renderer.render(scene, camera)
    }

    animate()
}
