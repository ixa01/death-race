var car1 , car2 , car3 , car4;
var missile1 , missile2 , missile3 , missile4 , ground;

var database

function preload(){
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  missile_img = loadImage("images/missile.png");
  ground_img = loadImage("images/track.png");
 

}










function setup(){
  createCanvas(windowWidth,windowHeight)
  database = firebase.database();
ground = createSprite(width/2,height/2,width,height*8)
ground.addImage(ground_img);
ground.scale = 1.7
ground.velocityY = 2
  car1 = createSprite(100,800,50,50)
  car1.addImage(car1_img);
  car1.scale = 0.85
  car2 = createSprite(500,800,50,50)
  car2.addImage(car2_img);
  car2.scale = 0.45
  car3 = createSprite(900,800,50,50)
  car3.addImage(car3_img);

  car4 = createSprite(1300,800,50,50)
  car4.addImage(car4_img);
 cars = [car1,car2,car3,car4];
  
 missile1 = createSprite(car1.x, 800,30,30)
missile1.addImage(missile_img)
missile1.scale = 0.5
missile2 = createSprite(car2.x, 800,30,30)
missile2.addImage(missile_img)
missile2.scale = 0.5
missile3 = createSprite(car3.x, 800,30,30)
missile3.addImage(missile_img)
missile3.scale = 0.5
missile4 = createSprite(car4.x, 800,30,30)
missile4.addImage(missile_img)
missile4.scale = 0.5


}












function draw(){
  background("green")
if(ground.y>500){
ground.y = height/2;


}

  if (keyDown("up")){
    car1.velocityY = -3
    missile1.velocityY = -3
    camera.position.x =  width/2
    camera.position.y = car1.y

   }

   if (keyDown("down")){
    car2.velocityY = -3
    missile2.velocityY = -3
   }

   if (keyDown("right")){
    car3.velocityY = -3
    missile3.velocityY = -3
   }

   if (keyDown("left")){
    car4.velocityY = -3
    missile4.velocityY = -3
   }
  if(keyDown("space")){
    car1.velocityY = 0
    car2.velocityY = 0
    car3.velocityY = 0
    car4.velocityY = 0
    missile1.velocityY = 0
    missile2.velocityY = 0
    missile3.velocityY = 0
    missile4.velocityY = 0
  
  
  
  
  }
if(keyDown("w")){
  missile1.velocityY = -9
}
if(keyDown("a")){
  missile2.velocityY = -9
}
if(keyDown("s")){
  missile3.velocityY = -9
}
if(keyDown("d")){
  missile4.velocityY = -9
}

 
  drawSprites()


}
