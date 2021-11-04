import '../css/app.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

import { scene1 } from './scene1.js';

/**
 * Base
 */
// Debug
const gui = new dat.GUI()
// dat.GUI.toggleHide();


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene Manager
var scene = scene1;


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// scene.add(camera) // Apparently this isn't needed

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Animate
 */
 const clock = new THREE.Clock();

 const tick = () =>
 {
     // Update controls
     controls.update()
 
     // Shader animations
     let elapsedTime = clock.getElapsedTime();
     // material.uniforms.uAnimation.value += Math.sin(elapsedTime * .7) * .25;
 
     // Render
     renderer.render(scene, camera)
 
     // Call tick again on the next frame
     window.requestAnimationFrame(tick)
 }
 
 tick()