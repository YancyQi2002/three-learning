export class TCanvasTextureEditor {
    // 画布纹理编辑类

    canvas: HTMLCanvasElement

    constructor(width: number = 500, height: number = 500, bgColor: string = 'rgb(255, 255, 255)') {
        this.canvas = document.createElement('canvas')
        this.canvas.width = width
        this.canvas.height = height
        this.canvas.style.backgroundColor = bgColor
    }

    draw(fun: (ctx: CanvasRenderingContext2D) => void): this {
        const ctx = this.canvas.getContext('2d')
        if (ctx) {
            fun(ctx)
            return this
        } else {
            console.warn(`Your Browser CANNOT Support Canvas 2d`)
            return this
        }
    }

    preview(): this {
        const canvas = this.canvas
        canvas.style.position = 'fixed'
        canvas.style.top = '25%'
        canvas.style.left = '25%'
        document.body.appendChild(this.canvas)
        return this
    }
}