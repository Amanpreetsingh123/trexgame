var trex, trexrunning,trexcollided;
var ground,invisibleground,groundimage;
function preload() {
  trexrunning=loadAnimation("trex1.png","trex4.png","trex3.png");
  trexcollided =loadImage("trex_collided.png");
  groundimage =loadImage("ground2.png");
}

function setup() {
  createCanvas(400, 400);
 trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  ground = createSprite(200,180,400,20); ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  invisibleGround = createSprite(200,190,400,10); 
  invisibleGround.visible = false; 
}

function draw() {
  background("white");
  if(keyDown("space"))
  { 
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8
  if (ground.x < 0){ ground.x = ground.width/2; } trex.collide(invisibleGround);
  drawSprites();
  
}