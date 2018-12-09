var value = 0;
var dancer1;
var dancer2;
var dancer3;
var dancer4;
var dancer5;
var dancer6;
var mybackground;

function preload() {
  dancer1=loadImage("./assets/1.png");
  dancer2=loadImage("./assets/2.png");
  dancer3=loadImage("./assets/3.png");
  dancer4=loadImage("./assets/4.png");
  dancer5=loadImage("./assets/5.png");
  dancer6=loadImage("./assets/6.png");
  mybackground = loadImage('./assets/Bg1.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  setShakeThreshold(10);
  frameRate(12);
}

function draw() {
  //background image
  push()
  imageMode(CORNER);
  backgroundImage(mybackground);
  pop()


  //text
  textSize(80);
  textFont('Helvetica');
  textStyle(BOLD);
  stroke(255);
  strokeWeight(10);
  fill(random(255),random(255),random(255));
  textAlign(CENTER);
  text('SHAKE YOUR BODY!', width/2, height/8);

  //dancer and sky color change
  imageMode(CENTER);
  if (value >= 0 && value < 42.5) {
    background(255, 255, 175, 10);
    image(dancer1, width/2, 3*height/5, 900, 900);
    } else if (value > 42.5 && value <= 85) {
    background(249, 199, 68, 20);
    image(dancer2, width/2, 3*height/5, 900, 900);
} else if (value > 85 && value <= 127.5) {
    background(249, 172, 68, 30);
    image(dancer3, width/2, 3*height/5, 900, 900);
} else if (value > 127.5 && value <= 170) {
    background(251, 120, 46, 40);
    image(dancer4, width/2, 3*height/5, 900, 900);
} else if (value > 170 && value <= 212.5) {
    background(251, 92, 46, 50);
    image(dancer5, width/2, 3*height/5, 900, 900);
} else if (value > 212.5 && value <= 255) {
    background(236, 73, 60, 60);
    image(dancer6, width/2, 3*height/5, 900, 900);
  }

}

function deviceMoved() {
  value = value + 15;
  if (value > 255) {
    value = 0;
  }
}

function backgroundImage(mybackground) {
  push();
  translate(width/2,height/2);
  imageMode(CENTER);
  let scale = Math.max(width/mybackground.width,height/mybackground.height);
  image(mybackground,0,0,mybackground.width*scale,mybackground.height*scale)
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
