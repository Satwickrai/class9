function setup() {
  createCanvas(800,400);
  box=createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  if(keyIsDown(RIGHT_ARROW)){
  box.position.x=box.position.x+5
  }  
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5
  }
  if(keyIsDown(UP_ARROW)){
   box.position.y=box.position.y-5
  }
  if(keyIsDown(DOWN_ARROW)){
   box.position.y=box.position.y+5  
  }
  drawSprites();
}