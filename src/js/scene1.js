import * as THREE from 'three'

/**
 * Utils
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Scene
 */
const scene1 = new THREE.Scene()


/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene1.add(mesh)


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 9
scene1.add(camera)
scene1.myCamera = camera;

export {scene1};