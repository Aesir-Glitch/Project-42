var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  angleMode(DEGREES);
  
  scAngle = map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  mnAngle = map(mn,0,40,0,360);
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  hrAngle = map(hr,0,80,0,360);
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(12);
  line(0,0,100,0);
  pop();

  drawSprites();
}