import {AmbientLight, Object3D, PointLight, SpotLight} from "three";

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

export const pointLight: PointLight = new PointLight(
    'rgb(255, 255, 255)',
    .6,
    200,
    .1
) // 点光

pointLight.position.set(20, 20, 20) // 点光位置

export const spotLight: SpotLight = new SpotLight(
    'rgb(255, 0, 255)',
    1,
    200,
    Math.PI / 180 * 30, // 弧度制
    0,
    0
) // 聚光灯

spotLight.castShadow = true // 设置光是可以产生阴影的

spotLight.position.set(-50, 50, -50) // 聚光灯位置

lightsList.push(ambientLight, pointLight, spotLight)