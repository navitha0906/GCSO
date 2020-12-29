
var speed,weight
var car
var wall
function setup(){
    createCanvas(1500,400)
    speed=random(55,90)
 weight=random(400,1500)
    wall=createSprite(1400,200,50,100)
    car=createSprite(100,200,60,60)
    car.velocityX=speed


}
function draw(){
    background(0)
drawSprites()

if(wall.x-car.x<=wall.width/2+car.width/2){
    car.velocityX=0
    
var deformation=(0.5*weight*speed*speed)/22500

if(deformation>180){
    car.shapeColor=color(255,0,0)
}
if(deformation>100&&deformation<180){
    car.shapeColor=color(230,230,0)
}
if(deformation<100){
    car.shapeColor=color(0,250,0)
}

}



}