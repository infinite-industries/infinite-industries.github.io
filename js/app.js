
//Colors -->  #C71585
var TRIGGER_MODE_1, TRIGGER_MODE_2, NUM_VERTICAL_LINES;
var titleFont, ctaFont;

function preload() {
  titleFont = loadFont("./fonts/AsimovWid.otf");
  ctaFont = loadFont("./fonts/MechanicalBdCond.otf");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
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

  main_graphic.draw(frameCount);

  mouse_decorator.update(frameCount);
  mouse_decorator.draw();

  call_to_action.draw();

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
  this.draw = function(frameR8){
    textFont(titleFont);
    noStroke();
    textSize(abs(sin(frameR8/70))*5+55);
    this.pulse_var = abs(sin(frameR8/50))*128;
    // console.log(this.pulse_var);
    fill(45, 45, 45,this.pulse_var );
    text("INFINITE.INDUSTRIES", width/2, height/2-10);

    stroke(45, 45, 45, 60);

    for(var i=0;i<NUM_VERTICAL_LINES;i++){
      drawVertLine(random(0,100))
    }
    noStroke();
    textSize(60);
    fill(0,0,0,255);
    var main_text = text("INFINITE.INDUSTRIES", width/2, height/2-20);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function MouseDecorator(){
  this.counter_1=0;
  this.circle_radius=80;

  this.update = function(countMe){
    if(TRIGGER_MODE_1 || TRIGGER_MODE_2){
      this.counter_1=countMe;
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
    window.location.href = "./test/about.html";
  }
  if(TRIGGER_MODE_2){
    window.open("https://www.instagram.com/1nfinite_1ndustries/");
  }
}


function CallToAction(){

  this.draw = function(){
    textFont(ctaFont);
    fill(199,21,133);
    textSize(20);
    var cta_text= text("Currently Presenting JR SOUTHARD Instagram Residency", width/2, height-150);
  }
}

function drawVertLine(chance){
  if(chance<10){
    var x=random(width);
    line(x,0,x,height);
  }
}
