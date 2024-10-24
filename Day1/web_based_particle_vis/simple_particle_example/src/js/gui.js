//this creates the user interface (gui)
//https://github.com/dataarts/dat.gui

import { drawScene } from './drawScene.js';
import { params } from './params.js';

export function createUI(){


	//redrawing every time is not the fastest, but it works for this number of points
	params.gui = new dat.GUI();
	params.gui.add( params, 'size', 0,100).onChange(drawScene);
	params.gui.add( params, 'alphaTest', 0,1).onChange(drawScene);
	params.gui.add( params, 'sizeAttenuation').onChange(drawScene);
	params.gui.add( params, 'colorMapMin', 0,1e4).onChange(drawScene);
	params.gui.add( params, 'colorMapMax', 0.,1e4).onChange(drawScene);

}