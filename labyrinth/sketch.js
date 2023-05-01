
let lightSize;

function setup() {

  noCursor();
  createCanvas(windowWidth, windowHeight, WEBGL);
  lightSize=20;
}

function draw() {

  noCursor();
  let locX = mouseX - width/2;
  let locY = mouseY - height/2;
  

  
  if (mouseIsPressed) { 
  lightSize++;
    if (lightSize>=60){
      lightSize=60;
    }
} else{
  lightSize--;
   if (lightSize<=10){
      lightSize=10;}
}
  pointLight(0, 255, 13, locX, locY, lightSize);

  noStroke();
  rectMode(CENTER);
  rect(0,0,windowWidth,windowHeight);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


