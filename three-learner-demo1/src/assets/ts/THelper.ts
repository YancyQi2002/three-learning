import {AxesHelper, GridHelper, Object3D, PointLightHelper, SpotLightHelper} from "three";
import {pointLight, spotLight} from "./TLights";

export const helperList: Object3D[] = []

const axesHelper: AxesHelper = new AxesHelper(500) // 辅助坐标轴
const gridHelper: GridHelper = new GridHelper(500, 20, 'rgb(200, 200, 200)', 'rgb(100, 100, 100)') // 辅助网格

const pointLightHelper: PointLightHelper = new PointLightHelper(
    pointLight,
    pointLight.distance,
    pointLight.color
) // 点光辅助

const spotLightHelper: SpotLightHelper = new SpotLightHelper(
    spotLight,
    spotLight.color
) // 聚光辅助

helperList.push(axesHelper, gridHelper, pointLightHelper, spotLightHelper)