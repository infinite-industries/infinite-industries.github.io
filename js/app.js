// var fb_logo, twitter_logo, instagram_logo, medium_logo;
//
// function preload(){
//   fb_logo = loadImage(../images/fb_logo.png);
//   twitter_logo = loadImage(../images/twitter_logo.png);
//   instagram_logo = loadImage(../images/instagram_logo.png);
//   medium_logo = loadImage(../images/medium_logo.png);
// }


//Colors -->  #C71585
var TRIGGER_MODE_1, TRIGGER_MODE_2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(25);
  TRIGGER_MODE_1=false;
  TRIGGER_MODE_2=false;
  mouse_decorator = new MouseDecorator();
  call_to_action = new CallToAction();
  //call_to_action.mouseClicked(function(){window.location.href ="https://www.instagram.com/1nfinite_1ndustries/"});
}

function draw() {
  background(255);
  textAlign(CENTER);

  drawMainGraphic();

  mouse_decorator.update(frameCount);
  mouse_decorator.draw();

  call_to_action.draw();

  if((mouseX>width/3)&&(mouseX<width/3*2)&&(mouseY>height/2-60)&&(mouseY<height/2+40)){
    TRIGGER_MODE_1=true;
  }
  else{
    TRIGGER_MODE_1=false;
  }

  if((mouseX>width/3)&&(mouseX<width/3*2)&&(mouseY>height-120)&&(mouseY<height)){
    TRIGGER_MODE_2=true;
  }
  else{
    TRIGGER_MODE_2=false;
  }

}

function drawMainGraphic(){
  textSize(random(5,100));
  fill(45, 45, 45, 60);
  text("INFINITE.INDUSTRIES", width/2, height/2);

  if(random(0,100)<10){
    var x_1=random(width);
    line(x_1,0,x_1,height);
  }
  if(random(0,100)<10){
    var x_2=random(width);
    line(x_2,0,x_2,height);
  }
  if(random(0,100)<10){
    var x_3=random(width);
    line(x_3,0,x_3,height);
  }

  textSize(60);
  fill(0,0,0,255);
  var main_text = text("INFINITE.INDUSTRIES", width/2, height/2-20);

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


//
// function MouseDecorator(){
//   update : function(){
//     fill(255,0,127,sin(counter)*64+128);
//   },
//
//   draw : function(){
//     ellipse(mouseX,mouseY, circle_radius,circle_radius);
//   }
// }



function mouseClicked() {
  if(TRIGGER_MODE_1){
    window.location.href = "./about.html";
  }
  if(TRIGGER_MODE_2){
    window.location.href = "https://www.instagram.com/1nfinite_1ndustries/";
  }
}


function CallToAction(){

  this.draw = function(){
    fill(199,21,133);
    textSize(20);
    var cta_text= text("Currently Presenting JR SOUTHARD Instagram Residency", width/2, height-100);
  }
}

// function drawSocialMedia(){
//   fill(0);
//   textSize(20);
//   text("facebook",width/12*3,height-50);
//   text("instagram",width/12*5,height-50);
//   text("twitter",width/12*7,height-50);
//   text("medium",width/12*9,height-50);
// }
