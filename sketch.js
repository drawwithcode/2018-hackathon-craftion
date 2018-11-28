var mySong;
var analyzer;
var ell;
var ell1;
var ell2;
var ell3;
var ell4;
var ell5;
var myImage;

function preload() {
  // put preload code here
  mySong = loadSound("./assets/gumball.mp3");
  myImage = loadImage("./assets/gumballlogo.png");

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  mySong.play();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  angleMode(DEGREES);
  frameRate(12);

}

function draw() {
  // put drawing code here
  background(0);
  var volume = 0;
  if (mySong.isPlaying() == false) {
    mySong.play();
  }
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  //side rects
  push();
  fill('pink');
  noStroke();
  rect(0, 0, volume * 5, windowHeight);
  pop();
  push();
  fill('pink');
  noStroke();
  rect(windowWidth, 0, -volume * 5, windowHeight);
  pop();

  //Main Circle
  push();
  fill('yellow');
  noStroke();
  ellipse(width / 2, height / 2, volume * 25);
  pop();


  //Stars
  push();
  ell = new star(200, 300, volume, color('#FF19D1'), frameCount * 3);
  pop();
  push();
  ell = new star(200, 300, volume / 2, color('#FF6BEE'), frameCount * 3);
  pop();

  push();
  ell1 = new star(100, 100, volume, color('#19FFF6'), frameCount * 3);
  pop();
  push();
  ell1 = new star(100, 100, volume / 2, color('#B0FFFD'), frameCount * 3);
  pop();

  push();
  ell5 = new star(-100, -100, volume, color('#19FFF6'), frameCount * 3);
  pop();
  push();
  ell5 = new star(-100, -100, volume / 2, color('#B0FFFD'), frameCount * 3);
  pop();

  push();
  ell2 = new star(100, 200, volume * 1.5, color('#19FFF6'), -frameCount * 3);
  pop();
  push();
  ell2 = new star(100, 200, volume * 0.75, color('#B0FFFD'), -frameCount * 3);
  pop();

  push();
  ell3 = new star(300, 200, volume * 2, color('#00FFAE'), -frameCount * 3);
  pop();
  push();
  ell3 = new star(300, 200, volume, color('#82FFD2'), -frameCount * 3);
  pop();

  push();
  ell4 = new star(300, 400, volume * 2, color('#FF19D1'), -frameCount * 3);
  pop();
  push();
  ell4 = new star(300, 400, volume, color('#FF6BEE'), -frameCount * 3);
  pop();

  //logo
  push();
  imageMode(CENTER);
  translate(width / 2, height / 2);
  rotate(frameCount * 4);
  image(myImage, 0, 0, volume * 2, volume);
  pop();

}

function star(_x, _y, _v, _c, _f) {
  this.x = _x
  this.y = _y
  this.v = _v
  this.c = _c
  this.f = _f
  translate(width / 2, height / 2);
  rotate(this.f);
  noStroke();
  fill(this.c);
  ellipse(this.x, this.y, this.v);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
