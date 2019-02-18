import Element from './element.js';
export default class Ball extends Element{
	constructor(x,y,sizeX, sizeY, sprite){
		super(x,y,sizeX, sizeY, sprite);
		super.moveX= Math.floor((Math.random() * 5) + 1);
		super.moveY= Math.floor((Math.random() * 5) + 1); 
	}

	draw(context){
		super.draw(context);
		this.deflect(context.canvas.width,context.canvas.height);
	}

	deflect(xLimit,yLimit){
		super.checkBoundary(xLimit,yLimit);
		if((this.posX+this.sizeX)==xLimit){
			this.moveX= this.moveX*-1;
		}
		if((this.posY+this.sizeY)==yLimit){
			this.moveY= this.moveY*-1;
		}
		if((this.posX)==0){
			this.moveX= this.moveX*-1;
		}
		if((this.posY)==0){
			this.moveY= this.moveY*-1;
		}
	}
}	