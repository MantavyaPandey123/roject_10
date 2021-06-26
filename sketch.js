var sea,seaImg;
var shipImg1,shipImg2,shipImg3,shipImg4;
var ship;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 
 
}

function setup(){
  createCanvas(800,600);
  sea = createSprite(200,200,20,20);
  
  sea.velocityX = 3;
  sea.scale = 2;

  ship = createSprite(100,100,200,200);
  ship.scale = 0.2;
  ship.addAnimation(shipImg1);
  
}

  function draw(){
    background("skyblue");
    animation(shipImg1, 400, 200);
   if(sea.x < 0){
     sea.x = sea.width/2;
   }

  }

