import {
    AmbientLight,
    AxesHelper,
    GridHelper,
    MOUSE,
    Object3D,
    PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer
} from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export class TEngine {
    private dom: HTMLElement
    private renderer: WebGLRenderer // WebGL渲染器

    private scene: Scene // 场景
    private camera: PerspectiveCamera // 透视相机

    constructor(dom: HTMLElement) {
        this.dom = dom

        this.renderer = new WebGLRenderer({
            antialias: true // 抗锯齿
        })

        this.scene = new Scene()

        this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)
        this.camera.position.set(20, 20, 20) // 设置相机位置
        this.camera.lookAt(new Vector3(0, 0, 0)) // 设置相机朝向的位置
        this.camera.up = new Vector3(0, 1, 0)

        console.log('TEngine实例了！')

        // console.log(dom)

        // this.renderer.domElement.width = dom.offsetWidth
        // this.renderer.domElement.height = dom.offsetHeight
        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)

        // const box: Mesh = new Mesh(
        //     new BoxBufferGeometry(10, 10, 10),
        //     new MeshStandardMaterial({
        //         color: 'rgb(255, 0, 0)'
        //     })
        // ) // 立方体

        // const ambientLight: AmbientLight = new AmbientLight('rgb(255, 255, 255)', 1) // 环境光

        const axesHelper: AxesHelper = new AxesHelper(500) // 辅助坐标轴
        const gridHelper: GridHelper = new GridHelper(500, 20, 'rgb(200, 200, 200)', 'rgb(100, 100, 100)') // 辅助网格

        // this.scene.add(box)
        // this.scene.add(ambientLight)
        this.scene.add(axesHelper)
        this.scene.add(gridHelper)

        // this.renderer.setClearColor('rgb(255, 255, 255)')
        // this.renderer.clearColor() // 清空颜色
        // this.renderer.render(this.scene, this.camera) // 渲染场景和相机

        // 初始性能监视器
        const stats = Stats()
        const statsDom = stats.domElement
        statsDom.style.position = 'fixed'
        statsDom.style.top = '6px'
        statsDom.style.right = '6px'
        statsDom.style.left = 'unset'

        // 初始 orbitControls 轨道控制器
        const orbitControls: OrbitControls = new OrbitControls(this.camera, this.renderer.domElement)
        // orbitControls.autoRotate = true // 设置自动旋转
        orbitControls.enableDamping = true // 阻尼惯性
        orbitControls.mouseButtons = {
            LEFT: null as unknown as MOUSE,
            MIDDLE: MOUSE.DOLLY, // 移动
            RIGHT: MOUSE.ROTATE  // 旋转
        }

        // 时效性渲染

        // setInterval(() => {
        //     console.log(1)
        //     this.renderer.render(this.scene, this.camera)
        // }, 1000 / 60)

        const renderFun = () => {
            // console.log(1)

            // 更改 box 的路径
            // box.position.x += -.01
            // box.rotation.y += .001

            // 更改 camera 的路径
            // this.camera.position.x += -.01
            orbitControls.update()

            this.renderer.render(this.scene, this.camera)
            stats.update()
            requestAnimationFrame(renderFun)
        }
        renderFun()

        dom.appendChild(this.renderer.domElement)
        dom.appendChild(statsDom)
    }

    addObject(...object: Object3D) {
        object.forEach(elem => {
            this.scene.add(elem)
        })
    }
}