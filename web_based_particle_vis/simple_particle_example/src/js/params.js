import * as THREE from 'three';

export const params = {
    //to hold the data
    data: null,

    container: null,
    renderer: null,
    scene: null,

    //for frustum      
    zmax: 1e6,
    zmin: 1,
    fov: 45,

    //for gui
    gui: null,

    //for the material of the points
    size: 10,
    alphaTest: 0.9,
    sizeAttenuation: false,

    //a texture for the points (from here https://github.com/mrdoob/three.js/blob/master/examples/textures/sprites)
	sprite : new THREE.TextureLoader().load('src/textures/circle.png'),

    //define some colors (https://github.com/d3/d3-scale-chromatic)
    //colorMap: d3.interpolateViridis,
    colorMap: d3.interpolateReds,
    colorMapMin: 0,
    colorMapMax: 2000,

	};
