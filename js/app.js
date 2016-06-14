
//Colors -->  #C71585
var TRIGGER_MODE_1, TRIGGER_MODE_2, NUM_VERTICAL_LINES, MOBILE_MODE, MAX_TEXT_SIZE;
var titleFont, ctaFont;
var TOP_OFFSET=50;

function preload() {
  titleFont = loadFont("./fonts/AsimovWid.otf");
  ctaFont = loadFont("./fonts/MechanicalBdCond.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight-TOP_OFFSET);
  testScreenSize();
  frameRate(25);
  TRIGGER_MODE_1=false;
  TRIGGER_MODE_2=false;
  NUM_VERTICAL_LINES = 5;
  main_graphic = new MainGraphic();
  mouse_decorator = new MouseDecorator();
  call_to_action = new CallToAction();
}

function draw() {
  background(255);
  textAlign(CENTER);

  main_graphic.update(frameCount);
  main_graphic.draw();

  if(!MOBILE_MODE){
    mouse_decorator.update(frameCount);
    mouse_decorator.draw();
  }

  call_to_action.draw();

  //this is UGLY need to figure out hover and click events in P5.js
  if((mouseX>width/3)&&(mouseX<width/3*2)&&(mouseY>height/2-60)&&(mouseY<height/2+40)){
    TRIGGER_MODE_1=true;
  }
  else{
    TRIGGER_MODE_1=false;
  }

  if((mouseX>width/3)&&(mouseX<width/3*2)&&(mouseY>height-200)&&(mouseY<height-100)){
    TRIGGER_MODE_2=true;
  }
  else{
    TRIGGER_MODE_2=false;
  }
}


function MainGraphic(){
  this.counter_1 = 0;
  this.pulse_var = 0;
  this.update = function(frameR8){
    textSize(abs(sin(frameR8/70))*5+(MAX_TEXT_SIZE-5));
    this.pulse_var = abs(sin(frameR8/50))*128;
    // console.log(this.pulse_var);
    fill(45, 45, 45,this.pulse_var );
  }
  this.drawVerticalLine= function(chance){
    if(chance<10){
      var x=random(width);
      line(x,0,x,height);
    }
  }
  this.draw = function(){
    textFont(titleFont);
    noStroke();

    text("INFINITE.INDUSTRIES", width/2, height/2-10);
    stroke(45, 45, 45, 60);

    for(var i=0;i<NUM_VERTICAL_LINES;i++){
      this.drawVerticalLine(random(0,100));
    }
    noStroke();
    textSize(MAX_TEXT_SIZE);
    fill(0,0,0,255);
    var main_text = text("INFINITE.INDUSTRIES", width/2, height/2-20);
  }
}

function CallToAction(){
  this.draw = function(){
    textFont(ctaFont);
    fill(199,21,133);
    textSize(20);
    if(!MOBILE_MODE){
      var cta_text= text("Currently Presenting JR SOUTHARD Instagram Residency", width/2, height-150);
    }
    else{
      var cta_text= text("Currently Presenting \nJR SOUTHARD Instagram Residency", width/2, height-150);
    }
  }
}

function MouseDecorator(){
  this.counter_1=0;
  this.circle_radius=80;

  this.update = function(frameR8){
    if(TRIGGER_MODE_1 || TRIGGER_MODE_2){
      this.counter_1=frameR8;
      this.circle_radius=120;
    }
    else{
      this.circle_radius=80;
        this.counter_1=0.5
    }
  },
  this.draw = function(){
    noStroke();
    fill(199,21,133,sin(this.counter_1)*64+128);
    ellipse(mouseX,mouseY, this.circle_radius,this.circle_radius);
  }
}

function mouseClicked() {
  if(TRIGGER_MODE_1){
    window.location.href = "./about.html";
  }
  if(TRIGGER_MODE_2){
    window.open("https://www.instagram.com/1nfinite_1ndustries/");
  }
}


function testScreenSize(){
  if(width<768){
    MOBILE_MODE=true;
    MAX_TEXT_SIZE=35;
  }
  else{
    MOBILE_MODE=false;
    MAX_TEXT_SIZE=60;
  }
}

function windowResized() {
  testScreenSize();
  resizeCanvas(windowWidth, windowHeight);
}
