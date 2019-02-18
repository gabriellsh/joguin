export default class Element{
	constructor(x,y,sizeX, sizeY, sprite){
		this.posX = x;
		this.posY = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.sprite = new Image();
		this.sprite.src = sprite;
		this.moveX = 0;
		this.moveY = 0;
	}

	draw(context) {
		context.drawImage(this.sprite, this.posX, this.posY, this.sizeX, this.sizeY);
		this.move(this.moveX,this.moveY);
	}

	move(xAmmount,yAmmount){
		this.posX += xAmmount;
		this.posY += yAmmount;
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
			console.log(this.posY);
			console.log(this.sizeY);
		}
		if((this.posX)<0){
			this.posX=0;
		}
		if((this.posY)<0){
			this.posY= 0;
		}
	}

}