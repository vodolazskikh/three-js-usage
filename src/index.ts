import { drawCube } from './drawers/cube'
import { drawLine } from './drawers/line'

const select = document.getElementById('select')

select.onchange = (e) => {
    const value = (e.currentTarget as unknown as { value: string }).value

    switch (value) {
        case 'cube':
            drawCube()
            break
        case 'line':
            drawLine()
            break
    }
}
// Изначальная сцена
drawCube()
