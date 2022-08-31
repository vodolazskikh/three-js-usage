import { drawCube } from './drawers/cube'
import { drawLine } from './drawers/line'
import { drawModel } from './drawers/model'

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
        case 'model':
            drawModel()
            break
    }
}
// Изначальная сцена
drawModel()
