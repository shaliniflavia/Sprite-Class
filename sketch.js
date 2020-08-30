var fixedOval,movingOval;
var color;

function setup() {
  createCanvas(800,400);
  


  color = "grey";

  fixedOval = new Sprite(100,200,30,50);
  movingOval = new Sprite(300,200,50,30);

}

function draw() {
  background(0);  

  movingOval.x = mouseX;
  movingOval.y = mouseY;

  fill(color);

  fixedOval.display();
  movingOval.display();


  
  if(movingOval.isTouching(fixedOval)){
    color = "red";
  }
  else{
    color = "green";
  }
  

}
