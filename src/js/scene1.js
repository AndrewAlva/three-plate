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
const geometry2 = new THREE.BoxGeometry(5, 5, 5)
const material = new THREE.ShaderMaterial({
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
    depthTest: false,
    uniforms: {
        uAlpha: { value: 0.8 },
    },
 })
const mesh = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(geometry2, material)
scene1.add(mesh)
scene1.add(mesh2)


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, Utils.sizes.width / Utils.sizes.height)
camera.position.z = 9
scene1.add(camera)
scene1.myCamera = camera;


/**
 * Animations
 */
scene1.update = function() {
    let time = Utils.elapsedTime * 1;
    let alpha = Math.abs( Math.sin(time) );

    material.uniforms.uAlpha.value = alpha;
}


export {scene1};