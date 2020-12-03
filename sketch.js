function setup() {
  createCanvas(1000,300);

  speed = random (55,90);
  weight = random (400,1500)

  car = createSprite(40, 100, 40, 40);
  car.shapeColor = (255)
  car.velocityX = speed;
  car.debug = true
  
  wall = createSprite(950, 150, 40, 220);
  wall.shapeColor = ("white")
  wall.debug = true
}

function draw() {
  background(0);  
  
  if(wall.x-car.x < (car.width+wall.width))
  {
     car.velocityX=0
     var deformation=0.5 * weight * speed * speed/22509
     if(deformation>180){
       car.shapeColor = color("yellow");
     }

     if(deformation<180 && deformation >100){
       car.shapeColor = color("green") 
     }

     if(deformation<100){
       car.shapeColor = color("blue") 
     }
  }
  
  
  
  
  drawSprites();
}