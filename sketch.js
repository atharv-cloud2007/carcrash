var car  , wall, speed , weight
function setup() {
  createCanvas(1600,400);
  car=createSprite(10,200,30,30)
  fill("orange")
  wall=createSprite(1200,200,60,height/2)
  wall.shapeColor="orange"
  speed=0
  weight=0
  deformation=(0.5*weight*speed*speed)/22500
  deformation=0
}
function draw() {
  background(255,255,255); 
  car.velocityX=speed 
  speed=random(55,90)
  weight=random(400,1500)
  car.depth=wall.depth
  car.depth=car.depth+1
  
isTouching(car,wall)
  if(car.isTouching(wall)){
    if(deformation<100){
      car.shapeColor="green"
      }
      if(deformation>100 && deformation<180){
        car.shapeColor="green"
        }
    if(deformation>180){
        car.shapeColor="red"
    }
  }
  drawSprites();
}