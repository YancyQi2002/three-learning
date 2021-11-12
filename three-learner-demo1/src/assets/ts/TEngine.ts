import {WebGLRenderer} from "three";

export class TEngine {
    private dom: HTMLElement
    private renderer: WebGLRenderer

    constructor(dom: HTMLElement) {
        this.dom = dom
        this.renderer = new WebGLRenderer()
        console.log('TEngine实例了！')
        console.log(this.dom)
        dom.appendChild(this.renderer.domElement)
        // this.renderer.domElement.width = dom.offsetWidth
        // this.renderer.domElement.height = dom.offsetHeight
        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)
    }
}