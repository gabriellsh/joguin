import Element from './element.js';
export default class Character extends Element{
	constructor(x,y,sizeX, sizeY, sprite){
		super(x,y,sizeX, sizeY, sprite);
		document.addEventListener("keydown", (e) => this.keyDownHandler(e),false);
		document.addEventListener("keyup", (e) => this.keyUpHandler(e),false);
	}

	draw(context) {
		console.log(this.moveX);
		this.move(this.moveX,this.moveY);
		this.checkSpeed(3,15);
		super.checkBoundary(context.canvas.width,context.canvas.height);
		super.draw(context);
	}
	
	keyDownHandler(e) {
	    if(e.key == "Right" || e.key == "ArrowRight") {
	        this.moveX += 1;
	    }
	    else if(e.key == "Left" || e.key == "ArrowLeft") {
	        this.moveX += -1;
	    }
	    else if(e.key == "Up" || e.key == "ArrowUp") {
	        this.moveY = -15;
	    }
	}

	keyUpHandler(e) {
	    if(e.key == "Right" || e.key == "ArrowRight") {
	        this.moveX += -1;
	    }
	    else if(e.key == "Left" || e.key == "ArrowLeft") {
	        this.moveX += 1;
	    }
	}
	checkSpeed(xLimit, yLimit){
		if(this.moveY>yLimit){
			this.moveY=yLimit;
		}
		if(this.moveX>xLimit){
			this.moveX=xLimit;
		}
		if(this.moveY< -yLimit){
			this.moveY= -yLimit;
		}
		if(this.moveX< -xLimit){
			this.moveX= -xLimit;
		}
	}
}