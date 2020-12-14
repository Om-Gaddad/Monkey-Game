var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(75,500);
  monkey.scale = 0.2;
  monkey.addAnimation("Monkey Movement", monkey_running);
  
  ground = createSprite(300,565,1200,10);
  ground.velocityX = -7;
  ground.x = ground.width/2
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup;
  
}


function draw() {
  background("lightblue");
  
  if(keyWentUp("space")){
    monkey.velocityY = -18;
  }
  monkey.velocityY = monkey.velocityY + 0.6
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
   if(FoodGroup.isTouching(monkey)){
      score = score + 1;
      FoodGroup.destroyEach();
    }
  

  textSize(24);
  text("Score:" + score,250,25)
  
  
  spawnObstacles();
  
  spawnFood();
 
  drawSprites();
}

function spawnFood(){
  if(frameCount % 140 === 0){
    var food = createSprite(610,500,25,50)
    food.y = Math.round(random(120,200))
    food.addImage("Bannana", bananaImage);
    food.velocityX = -4;
    food.scale = 0.2;
    food.lifetime = 300;
    FoodGroup.add(food);
  }
}

  function spawnObstacles(){
  if (frameCount % 140 === 0){
   var obstacle = createSprite(600,525,10,40);
   obstacle.velocityX = -5;
   obstacle.addImage("Rock", obstacleImage)
   obstacle.scale = 0.2;
  }
}