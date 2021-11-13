import {
    AmbientLight, AxesHelper,
    BoxBufferGeometry, GridHelper,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer
} from "three";

export class TEngine {
    private dom: HTMLElement
    private renderer: WebGLRenderer // WebGL渲染器

    private scene: Scene // 场景
    private camera: PerspectiveCamera // 透视相机

    constructor(dom: HTMLElement) {
        this.dom = dom
        this.renderer = new WebGLRenderer()
        this.scene = new Scene()
        this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)
        this.camera.position.set(20, 20, 20) // 设置相机位置
        this.camera.lookAt(new Vector3(0, 0, 0)) // 设置相机朝向的位置
        this.camera.up = new Vector3(0, 1, 0)

        console.log('TEngine实例了！')

        console.log(dom)
        dom.appendChild(this.renderer.domElement)
        // this.renderer.domElement.width = dom.offsetWidth
        // this.renderer.domElement.height = dom.offsetHeight
        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)

        const box: Mesh = new Mesh(
            new BoxBufferGeometry(10, 10, 10),
            new MeshStandardMaterial({
                color: 'rgb(255, 0, 0)'
            })
        ) // 立方体

        const ambientLight: AmbientLight = new AmbientLight('rgb(255, 255, 255)', 1) // 环境光

        const axesHelper: AxesHelper = new AxesHelper(500) // 辅助坐标轴
        const gridHelper: GridHelper = new GridHelper(500, 20, 'rgb(200, 200, 200)', 'rgb(100, 100, 100)') // 辅助网格

        this.scene.add(box)
        this.scene.add(ambientLight)
        this.scene.add(axesHelper)
        this.scene.add(gridHelper)

        // this.renderer.setClearColor('rgb(255, 255, 255)')
        // this.renderer.clearColor() // 清空颜色
        // this.renderer.render(this.scene, this.camera) // 渲染场景和相机

        // 时效性渲染

        // setInterval(() => {
        //     console.log(1)
        //     this.renderer.render(this.scene, this.camera)
        // }, 1000 / 60)

        const renderFun = () => {
            // console.log(1)

            // 更改 box 的路径
            box.position.x += -.01
            box.rotation.y += .001

            // 更改 camera 的路径
            this.camera.position.x += -.01

            this.renderer.render(this.scene, this.camera)
            requestAnimationFrame(renderFun)
        }
        renderFun()
    }
}