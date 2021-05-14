var fixed, moving;
var moving2, moving3;

function setup() {
  createCanvas(800,400);

  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "blue";

  moving = createSprite(500, 200, 50, 20);
  moving.shapeColor = "blue";

  obj5 = createSprite(40, 40, 50, 50);
  obj5.velocityY = 2;
  obj5.shapeColor = "orange";

  obj4 = createSprite(40, 90, 50, 50);
  obj4.velocityY = -2;
  obj4.shapeColor = "green";

  moving2 = createSprite(300, 250, 50, 50);
  moving2.velocityX = 2;
  moving2.shapeColor = "red";

  moving3 = createSprite(500, 250, 50, 50);
  moving3.velocityX = -2;
  moving3.shapeColor = "white";

}

function draw() {
  background(0); 

  moving.x = mouseX;
  moving.y = mouseY
  
  if(isTouching(moving, moving2)){

    moving.shapeColor = "purple";
    //fixed.shapeColor = "purple" ;
    moving2.shapeColor = "purple"; 

  }
  else{

    fixed.shapeColor = "blue";
    moving.shapeColor = "blue";
  }

  bounceOff(moving2, moving3);
  bounceOff(obj4, obj5);


  drawSprites();
}

