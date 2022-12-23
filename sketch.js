var path, boy, leftBoundary, rightBoundary;
var pathIMG, boyIMG;
var i;

var ed = 3;

function preload(){
  pathIMG  = loadAnimation("path.png");
  boyIMG = loadAnimation("Runner-1.png", "Runner-2.png");
 }

function setup(){
  
  createCanvas(400,400);

  path = createSprite(200,200);
  path.addAnimation("path", pathIMG);
  path.scale = 1.2;

  boy = createSprite(200,350);
  boy.addAnimation("boy", boyIMG)
  boy.scale = 0.08;
  

leftBoundary = createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary = createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);

  path.velocityY = 15;
  
  boy.x = World.mouseX;

  if (keyWentDown("space")){
  ed = ed-1;
  }

  edges = createEdgeSprites();
  boy.collide(edges[0]);
  boy.collide(edges[1]);
  boy.collide(edges[2]);
  boy.collide(edges[3]);
  
  if(path.y > 350){
    path.y = height/2;
  }
  
  drawSprites();
}
