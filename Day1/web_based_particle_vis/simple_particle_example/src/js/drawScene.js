import * as THREE from 'three';
import { params } from './params.js';

//this will draw the scene 
export function drawScene(){

	//clear everything first
	while (params.scene.children.length > 0){ 
		params.scene.remove(params.scene.children[0]); 
	}


	//define the colormap
	var cmap = d3.scaleSequential(params.colorMap);
	var extent = [params.colorMapMin, params.colorMapMax];
	cmap.domain(extent).nice();

	var vertices = [];
	var colors = [];
	params.data.forEach(function(d){
		vertices.push(d.x, d.y, d.z);
		//color by distance
		var dist = Math.sqrt(d.x*d.x + d.y*d.y + d.z*d.z);
		var co = new THREE.Color(cmap(dist))
		colors.push(co.r, co.g, co.b);

	});

	//define the geometry
	var geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
	geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

	var materialParams = {
		size: params.size,
		map: params.sprite, 
		transparent: true,
		alphaTest: params.alphaTest,
		sizeAttenuation: params.sizeAttenuation,
		vertexColors: true 
	};
	var material = new THREE.PointsMaterial( materialParams );
	var mesh = new THREE.Points( geometry, material );

	params.scene.add( mesh );
}