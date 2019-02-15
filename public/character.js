export default class Character{
	constructor(x,y,sizeX, sizeY, sprite){
		this.posX = x;
		this.posY = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.sprite = new Image();
		this.sprite.src = sprite;
		this.moveX = 0;
		this.moveY = 0;
		document.addEventListener("keydown", (e) => this.keyDownHandler(e),false);
		document.addEventListener("keyup", (e) => this.keyUpHandler(e),false);
	}

	drawCharacter(context) {
		this.move(this.moveX,this.moveY);
		context.drawImage(this.sprite, this.posX, this.posY, this.sizeX, this.sizeY);
		console.log(this.moveX);
		
	}

	move(xAmount,yAmount){
		this.posX += xAmount;
		this.posY += yAmount;
	}
	
	keyDownHandler(e) {
		console.log(this.moveX);
	    if(e.key == "Right" || e.key == "ArrowRight") {
	        this.moveX += 1;
	    }
	    else if(e.key == "Left" || e.key == "ArrowLeft") {
	        this.moveX += -1;
	    }
	    else if(e.key == "Up" || e.key == "ArrowUp") {
	        this.moveY += -1;
	    }
	    else if(e.key == "Down" || e.key == "ArrowDown") {
	        this.moveY += 1;
	    }
	}

	keyUpHandler(e) {
	    if(e.key == "Right" || e.key == "ArrowRight") {
	        this.moveX += -1;
	    }
	    else if(e.key == "Left" || e.key == "ArrowLeft") {
	        this.moveX += 1;
	    }
	    else if(e.key == "Up" || e.key == "ArrowUp") {
	        this.moveY += 1;
	    }
	    else if(e.key == "Down" || e.key == "ArrowDown") {
	        this.moveY += -1;
	    }
	}
}