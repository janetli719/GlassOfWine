var cuplinex = 300;
var cupliney = 210;
var colour = {
  redcol : 0,
  bluecol : 0,
}
var redness = 0;
var bright = 0;
var light = true;
// var d = day();

// var bubbley = 590;
// var bubbler = 590;


function setup() {
  createCanvas(600, 650)
}

function draw() {
  backgroundcol();
  writing();
  wine();
  cupline();
  stand();
  lowcupline();
  // bubblea();
  // bubbleb();
    for(var i = 0; i< bubbles.length; i++) {
  var bubble = bubbles[i];
  bubble.draw();
}
   
}

function mousePressed(){ 
  if (light) {
    light = false
  } else {
    light = true
  }
}


function mouseClicked(){
  var bubble = new Bubble();
  bubble.x = mouseX;
  bubble.y = mouseY;
  
  bubbles.push(bubble);
}


function writing(){
  
  if (light){
  stroke (0, 0, 0, 0);
  } else {
    stroke(255, 255, 255, 160);
  }
  
  textSize(random(50));
  text("HAVE A DRINK", random(600), random(650));
  
}

//barrier//


function backgroundcol(){
  if (light){
    background (230);
  } else {
    background(30);
  }
}

function wine() {
    colour.redcol = map (mouseY,0,600,230,20)
  colour.bluecol = map (mouseX,0,650,20,100)
  // colour.yellowcol = map (mouseX,0,650,20,100)
    fill(255, 40, colour.bluecol, colour.redcol);
    
    if (light){
   fill (255, colour.bluecol, 40, colour.redcol);
  } else {
    fill(255, 255, colour.bluecol, colour.bluecol);
  }
  noStroke();
  ellipseMode(CENTER);
  ellipse(300, 250, 150, 150);
}

function cupline() {
  // stroke(0, 0, 0, 160);
  if (light){
   stroke (0, 0, 0, 160);
  } else {
    stroke(255, 255, 255, 160);
  }
  strokeWeight(1.5);
  noFill();
  noSmooth();
  ellipseMode(CENTER);
  ellipse(cuplinex, cupliney, 150, 150);
}

function stand() {
  // 
    if (light){
   stroke (0, 0, 0, 160);
  } else {
    stroke(255, 255, 255, 160);
  }
  strokeWeight(1.5);
  line(cuplinex, 325, 300, cupliney+215);
}

function lowcupline(){
  // stroke(0, 0, 0, 160);
    if (light){
   stroke (0, 0, 0, 160);
  } else {
    stroke(255, 255, 255, 160);
  }
  noFill();
  strokeWeight(1.5);
  ellipseMode(CENTER);
  ellipse(cuplinex, cupliney+215, 150, 150);
}


function Bubble(){
  this.x = 0;
  this.y = 0;
  this.speed = {x: 4, y:4};
  this.draw = function(){
    if (light){
      stroke (0,0,0,100);
    }else{
      stroke(255,255,255,220);
    }
    noFill();
    ellipse (this.x, this.y, 8, 8);

    this.y = this.y - this.speed.y;
  }
}
var bubbles = [];





// function bubblea(){
//     // stroke(255);
//     // fill(255, 255, 255, 100);
//   if (light){
//   stroke (225);
//   fill(255, 255, 255, 200);
//   } else {
//     stroke(100, 100, 255, 200);
//     fill(100, 100, 255, 100);
//   }
//   strokeWeight(1);
//   ellipse(500, bubbley ,5 ,5 );

//   bubbley -= random(3);
// }
// function bubbleb(){
//     // stroke(255);
//     // fill(150, 150, 255, 60);
//   if (light){
//   stroke (225);
//   fill(255, 255, 255, 200);
//   } else {
//     stroke(100, 100, 255, 200);
//     fill(100, 100, 255, 60);
//   }

//   strokeWeight(1);
//   ellipse(300, bubbler ,5 ,5 );

//   bubbler -= 2;
  
//     if (light){
//   stroke (225);
//   fill(255, 255, 255, 200);
//   } else {
//     stroke(100, 100, 255, 200);
//     fill(100, 100, 255, 60);
//   }

//   strokeWeight(1);
//   ellipse(300, bubbler+20 ,5 ,5 );

//   bubbler -= 2;
// }

