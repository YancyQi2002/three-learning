import {
    BoxBufferGeometry,
    CylinderBufferGeometry, Line,
    Mesh,
    MeshStandardMaterial,
    Object3D, Points, PointsMaterial,
    SphereBufferGeometry
} from "three";

export const basicObjectList: Object3D[] = []

// const material = new MeshStandardMaterial({ // MeshStandardMaterial 网格标准材质 可以共用
//     color: 'blue'
// })
//
// const geometry = new BoxBufferGeometry(10, 10, 10) // BufferGeometry 缓冲区几何
//
// export const box: Mesh = new Mesh( // Mesh 网格物体
//     geometry,
//     material
// ) // 立方体 —— 面 渲染
//
// box.position.x = -10
//
// export const sphere: Line = new Line(
//     geometry,
//     material
// ) // 立方体 —— 线 渲染
//
// // export const sphere: Mesh = new Mesh(
// //     new SphereBufferGeometry(5),
// //     new MeshStandardMaterial({
// //         color: 'rgb(255, 255, 255)'
// //     })
// // ) // 球体 —— 面 渲染
//
// // export const sphere: Line = new Line(
// //     new SphereBufferGeometry(5),
// //     material
// // ) // 球体 —— 线 渲染
//
// // export const sphere: Points = new Points(
// //     new SphereBufferGeometry(5),
// //     new PointsMaterial({
// //         color: 'gray'
// //     })
// // ) // 球体 —— 点 渲染
//
// sphere.position.x = 10
//
// export const cylinder: Mesh = new Mesh(
//     new CylinderBufferGeometry(5, 5, 10, 32, 5),
//     new MeshStandardMaterial({
//         color: 'rgb(0, 255, 255)'
//     })
// ) // 柱体
//
// cylinder.position.z = 10
//
// export const cylinder2: Mesh = new Mesh(
//     new CylinderBufferGeometry(5, 5, 10, 32, 5),
//     new MeshStandardMaterial({
//         color: 'rgb(0, 255, 255)'
//     })
// ) // 柱体 2
//
// cylinder2.position.z = -10
//
// basicObjectList.push(box, sphere, cylinder, cylinder2)

// 地面
const stage: Mesh = new Mesh(
    new BoxBufferGeometry(200, 10, 200),
    new MeshStandardMaterial({
        // color: 'rgb(150, 150, 150)'
        color: 'rgb(75, 75, 75)'
    })
)

stage.castShadow = true
stage.receiveShadow = true // 设置接收阴影

// console.log((stage.material as MeshStandardMaterial).color) // Object { r: 0.5882352941176471, g: 0.5882352941176471, b: 0.5882352941176471 }

stage.position.y = -5

// 立方体
const box: Mesh = new Mesh(
    new BoxBufferGeometry(20, 20, 20),
    new MeshStandardMaterial({
        color: 'red'
    })
)

box.castShadow = true // 设置可以产生阴影
box.receiveShadow = true

box.position.y = 10

basicObjectList.push(stage, box)