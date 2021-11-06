import * as THREE from 'three'
import testVertexShader from './shaders/test/vertex.glsl'
import testFragmentShader from './shaders/test/fragment.glsl'

/**
 * Scene
 */
const scene1 = new THREE.Scene()


/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.ShaderMaterial({
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
    uniforms: {
        uAlpha: { value: 0.8 },
    },
 })
const mesh = new THREE.Mesh(geometry, material)
scene1.add(mesh)


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, Utils.sizes.width / Utils.sizes.height)
camera.position.z = 9
scene1.add(camera)
scene1.myCamera = camera;

export {scene1};