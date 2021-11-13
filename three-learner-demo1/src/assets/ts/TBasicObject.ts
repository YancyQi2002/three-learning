import {
    BoxBufferGeometry,
    CylinderBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    Object3D,
    SphereBufferGeometry
} from "three";

export const basicObjectList: Object3D[] = []

export const box: Mesh = new Mesh(
    new BoxBufferGeometry(10, 10, 10),
    new MeshStandardMaterial({
        color: 'rgb(255, 0, 0)'
    })
) // 立方体

box.position.x = -10

export const sphere: Mesh = new Mesh(
    new SphereBufferGeometry(5),
    new MeshStandardMaterial({
        color: 'rgb(255, 255, 255)'
    })
) // 球体

sphere.position.x = 10

export const cylinder: Mesh = new Mesh(
    new CylinderBufferGeometry(5, 5, 10, 32, 5),
    new MeshStandardMaterial({
        color: 'rgb(0, 255, 255)'
    })
) // 柱体

cylinder.position.z = 10

export const cylinder2: Mesh = new Mesh(
    new CylinderBufferGeometry(5, 5, 10, 32, 5),
    new MeshStandardMaterial({
        color: 'rgb(0, 0, 255)'
    })
) // 柱体 2

cylinder2.position.z = -10

basicObjectList.push(box, sphere, cylinder, cylinder2)