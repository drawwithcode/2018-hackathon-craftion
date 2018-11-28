var mySong;
var analyzer;
var lin1;
var lin2;
var lin3;
var lin4;
var ell;
var ell2
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
  push();
  fill('yellow');
  noStroke();
  ellipse(width / 2, height / 2, volume * 25);
  pop();
  push();
  ell= new star(200,300,volume,color('#FF19D1'),frameCount * 3);
  pop();
  push();
  ell1= new star(100,100,volume,color('#19FFF6'),frameCount * 3);
  pop();
  push();
  ell1= new star(-100,-100,volume,color('#19FFF6'),frameCount * 3);
  pop();
  push();
  ell2= new star(100,200,volume*1.5,color('#19FFF6'),-frameCount * 3);
  pop();
  push();
  ell3= new star(300,200,volume*2,color('#00FFAE'),-frameCount * 3);
  pop();
  push();
  ell4= new star(300,400,volume*2,color('#FF19D1'),-frameCount * 3);
  pop();
  // push();
  // lin1 = new lin(50, 0, 250, volume * 2, -frameCount, width / 2, height / 2);
  // pop();
  // push();
  // lin2 = new lin(50, 0, 250, volume, frameCount * 3, width / 2, height / 2);
  // pop();
  // push();
  // lin3 = new lin(50, 80, 50, volume * 2, -frameCount * 3, width / 2, height / 2);
  // pop();
  push();
  imageMode(CENTER);
  translate(width/2,height/2);
  rotate(frameCount*4);
  image(myImage,0,0, volume*2, volume);
  pop();

}

function lin(_x, _y, _s, _v, _r, _wid, _hei) {
  this.x = _x
  this.y = _y
  this.s = _s
  this.v = _v
  this.r = _r
  this.w = _wid
  this.h = _hei
  translate(this.w, this.h);
  rotate(this.r);
  noFill();
  stroke(lerpColor(color(255, 84, 237), color(0), frameCount / 150));
  rect(this.x, this.y, this.s, this.v);
}

function star(_x,_y,_v,_c,_f){
  this.x=_x
  this.y=_y
  this.v=_v
  this.c=_c
  this.f=_f
  translate(width / 2, height / 2);
  rotate(this.f);
  noStroke();
  fill(this.c);
  ellipse(this.x, this.y,this.v);

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
