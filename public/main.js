import Character from './character.js';

var canvas = document.getElementById('canvas');

var ninja = new Character(canvas.width/2,canvas.height/2,50,50,'./sprites/ninja.png');

const context = canvas.getContext('2d');

document.addEventListener("keydown", ninja.keyDownHandler);
document.addEventListener("keyup", ninja.keyUpHandler);
document.addEventListener("keydown", function(e){console.log(e.key);});


function draw(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	ninja.drawCharacter(context);
}
setInterval(draw,10);

