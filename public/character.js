export default class Character{
	constructor(x,y,sizeX, sizeY, sprite){
		this.posX = x;
		this.posY = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.sprite = new Image();
		this.sprite.src = sprite;
		this.moving = false;
		this.moveX = 0;
		this.moveY = 0;
	}

	drawCharacter(context) {
		context.drawImage(this.sprite, this.posY, this.posX, this.sizeX, this.sizeY);
		console.log(this.moveY);
		this.move(this.moveX,this.moveY);
	}

	move(xAmount,yAmount){
		this.posX += xAmount;
		this.posY += yAmount;
	}
	
	keyDownHandler(e) {
	    if(e.key == "Right" || e.key == "ArrowRight") {
	        this.moveX = 5;
	    }
	    else if(e.key == "Left" || e.key == "ArrowLeft") {
	        this.moveX = -5;
	    }
	    else if(e.key == "Up" || e.key == "ArrowUp") {
	        this.moveY = 5;
	    }
	    else if(e.key == "Down" || e.key == "ArrowDown") {
	        this.moveY = -5;
	    }
	    console.log(this.moveY);
	}

	keyUpHandler(e) {
	    if(e.key == "Right" || e.key == "ArrowRight") {
	        this.moveX = this.moveX -5;
	    }
	    else if(e.key == "Left" || e.key == "ArrowLeft") {
	        this.moveX = this.moveX +5;
	    }
	    else if(e.key == "Up" || e.key == "ArrowUp") {
	        this.moveY = this.moveY -5;
	    }
	    else if(e.key == "Down" || e.key == "ArrowDown") {
	        this.moveY = this.moveY  +5;
	    }
	}
}