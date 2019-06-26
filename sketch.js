// Valentin Girard
// 21:15 17/06/2019
// Visualization of multiplication table
// Press > to see next multiplication table
//       < to see previous

r = 150;
points = 200;
mt = 0;

function setup() {
  createCanvas(400, 400);
}

function mousePressed(){
  save(mt + ".jpg");
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    mt -= 1;
  } else if (keyCode == RIGHT_ARROW){
    mt += 1;  
  }
}

function draw() {
  background(0);
  translate(width/2,height/2);
  
  stroke(255,127,0);
  circle(0,0,r*2);
  
  beginShape();
  for (a = 0; a < TWO_PI; a+= TWO_PI/points){
    noFill();
    strokeWeight(0.5);
    x = cos(a) * r;
    y = sin(a) * r;
    vertex(x,y);
    newx = cos(a*mt) * r;
    newy = sin(a*mt) * r;
    line(x,y,newx,newy);
  }
  endShape(CLOSE);
  
  text("Multiplication Table of : " + mt,-60,180);

}