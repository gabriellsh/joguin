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
		console.log(this.moveX);
		this.move(this.moveX,this.moveY);
		this.checkBoundary(context.canvas.width,context.canvas.height);
		context.drawImage(this.sprite, this.posX, this.posY, this.sizeX, this.sizeY);
		this.checkSpeed(3,15);
	}

	move(xAmmount,yAmmount){
		this.posX += xAmmount;
		this.posY += yAmmount;
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

	applyForces(xAmmount, yAmmount){
		this.moveX+=xAmmount;
		this.moveY+=yAmmount;

	}

	checkBoundary(xLimit, yLimit){
		if((this.posX+this.sizeX)>xLimit){
			this.posX=xLimit-this.sizeX;
		}
		if((this.posY+this.sizeY)>yLimit){
			this.posY=yLimit-this.sizeY;
		}
		if((this.posX)<0){
			this.posX=0;
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