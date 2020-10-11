
var MovingRect;
var FixedRect;
var rect1;
var rect2;
var rect3;

function setup() {
  createCanvas(800,400);
  FixedRect=createSprite(700, 200, 50, 50);
  MovingRect=createSprite(200,200,60,70);
  rect1=createSprite(100,100,50,50);
  rect2=createSprite(300,280,50,50);
  rect3=createSprite(600,195,50,50);

  FixedRect.shapeColor="green";
  MovingRect.shapeColor="green";
}




function draw() {
 background(255,255,255);
 rect1.x=World.mouseX;
 rect1.y=World.mouseY;
 bounce(MovingRect,FixedRect);

 if(isTouching(rect1,FixedRect)){
FixedRect.velocityX=-10;

}

if(isTouching(rect1,rect2)){
  rect2.shapeColor ="cyan";
}

if(isTouching(rect1,rect3)){
  bounce(rect3,MovingRect);
}

  drawSprites();
}

