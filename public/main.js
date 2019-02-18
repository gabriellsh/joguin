import Character from './character.js';
import Ball from './ball.js';

import Environment from './environment.js';


const canvas = document.getElementById('canvas');

const env = new Environment();

const ninja = new Character(canvas.width/2,canvas.height/2,100,100,'./sprites/ninja.png');
const ball = new Ball(canvas.width/2,canvas.height/2,50,50,'./sprites/ball.webp');


const context = canvas.getContext('2d');



function draw(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	env.gravity(ninja);
	ninja.draw(context);
	ball.draw(context);

}
setInterval(draw,10);
