import {AmbientLight, Object3D, PointLight} from "three";

export const lightsList: Object3D[] = []

// const ambientLight: AmbientLight = new AmbientLight('rgb(255, 255, 255)', 1) // 环境光
// 强度对环境的影响
// const ambientLight: AmbientLight = new AmbientLight('rgb(255, 255, 255)', .5) // 环境光变暗
// const ambientLight: AmbientLight = new AmbientLight('rgb(255, 255, 255)', 1.5) // 环境光变亮
// 颜色对环境的影响
// const ambientLight: AmbientLight = new AmbientLight('rgb(255, 0, 0)', 1) // 地面变红
// const ambientLight: AmbientLight = new AmbientLight('rgb(0, 255, 0)', 1) // 地面变绿，立方体变黑
// console.log(ambientLight.color) // Object { r: 0, g: 1, b: 0 }
// const ambientLight: AmbientLight = new AmbientLight('rgb(0, 255, 255)', 1) // 地面变青，立方体变黑
// console.log(ambientLight.color) // Object { r: 0, g: 1, b: 1 }
// const ambientLight: AmbientLight = new AmbientLight('rgb(0, 255, 255)', .5) // 地面变暗青，立方体变黑
// console.log(ambientLight.color) // Object { r: 0, g: 1, b: 1 }
//
// 0 - 255 ==> 0 - 1
//
//   0, 1, 1
// * 1, 0, 0
//   0, 0, 0
//
//   0, 1, 1
// * .59, .59, .59 -> 灰色
// * 1, 1, 1 -> 强度
//   0, .59, .59 -> 青色
//
//   0, 1, 1
// * .59, .59, .59 -> 灰色
// * .5, .5, .5 -> 强度
//   0, .3, .3 -> 暗青色

const ambientLight: AmbientLight = new AmbientLight('rgb(255, 255, 255)', .3) // 环境光

const pointLight: PointLight = new PointLight(
    'rgb(255, 255, 255)',
    .6,
    200,
    .1
)

pointLight.position.set(20, 20, 20)

lightsList.push(ambientLight, pointLight)