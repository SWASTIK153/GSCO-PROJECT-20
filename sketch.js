var car1 , deformation,wall, car1weight,car1speed;




function setup() {
  createCanvas(1600,400);

  car1 =  createSprite(500, 200, 50, 50);
car1.shapeColor = "white";


wall = createSprite(900,200,10,200);
wall.shapeColor = "yellow";

car1weight = 1000;
car1speed = 60;

}

function draw() {

  background(0);  
 
 
 
 if (keyDown("space")) {
   
  car1.velocityX = 5;
 }

if (isTouching(car1,wall)) {

//car1.shapeColor = "orange";
deformation = (0.5*car1weight*car1speed*car1speed)/22500

car1.velocityX = 0;
//wall.shapeColor = "red";


}



if (deformation<100){
car1.shapeColor = "green";
}


if (deformation<180 && deformation>100){
  car1.shapeColor = "yellow";
  }
  

  if (deformation>180){
    car1.shapeColor = "red";
    }

 fill("red");   
text(deformation,500,200);
    text("CAR SPEED = 50 KMPH",400,100);
    text("CAR WEIGHT = 100 KG",400,130);
       
 


  drawSprites();
}


function isTouching(object1,object2) {
  
   
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      &&  object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2)

      {

    return true;
  
  }
  
  else {

    return false;
  }
  
  }
