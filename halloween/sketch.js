//Midterm: Halloween

var oneChar = "H";
var twoChar = "A";
var threeChar = "L";
var fourChar = "L";
var fiveChar = "O";
var sixChar = "W";
var sevenChar = "E";
var eightChar = "E";
var nineChar = "N";

var y1 = 100;
var y2 = 100;
var y3 = 100;
var y4 = 100;
var y5 = 100;
var y6 = 100;
var y7 = 100;
var y8 = 100;
var y9 = 100;

var buttonfill = 0;

var centerBoxX = 123;
var centerBoxY = 320;

var centerBoxX2 = 323;
var centerBoxY2 = 320;

var centerBoxX3 = 515;
var centerBoxY3 = 320;

var allowDown = false;
var lowDown = false;
var weeDown = false;


function setup() {
  createCanvas(640, 400);
  textFont("Georgia");
  bg = loadImage("images/ghosts.jpg");
}


function draw() {
  background(bg);

  fill(229,146,19);
  noStroke();
  textSize(42);
  text(oneChar, 70, y1);
  text(twoChar, 130, y2);
  text(threeChar, 186, y3);
  text(fourChar, 243, y4);
  text(fiveChar, 298, y5);
  text(sixChar, 358, y6);
  text(sevenChar, 430, y7);
  text(eightChar, 485, y8);
  text(nineChar, 540, y9);

  fill(buttonfill);
  strokeWeight(1);
  stroke(229,146,19);
  rectMode(CENTER);
  rect(centerBoxX, centerBoxY, 130, 40);
  rect(centerBoxX2, centerBoxY2, 130, 40);
  rect(centerBoxX3, centerBoxY3, 130, 40);

  fill(229,146,19);
  noStroke();
  textSize(22);
  text("allow", 100, 329);
  text("low", 308, 329);
  text("wee", 498, 329);
}


function mousePressed() {

  // Check if mouse is inside the button
  var d = dist(mouseX, mouseY, centerBoxX, centerBoxY);
  var d2 = dist(mouseX, mouseY, centerBoxX2, centerBoxY2);
  var d3 = dist(mouseX, mouseY, centerBoxX3, centerBoxY3);

  if (d < 40) {
    if (allowDown) {
      allowDown = false;
    } else {
      allowDown = true;
    }
  }

  if (d2 < 40) {
    if (lowDown) {
      lowDown = false;
    } else {
      lowDown = true;
    }
  }
  if (d3 < 40) {
    if (weeDown) {
      weeDown = false;
    } else {
      weeDown = true;
    }
  }
  if (allowDown) {
    setToAllow();
  } else if (lowDown) {
    setToLow();
  } else if (weeDown) {
    setToWee();
  } else {
    setToNone();
  }
}

function setToAllow() {
  y1 = 100;
  y2 = 200;
  y3 = 200;
  y4 = 200;
  y5 = 200;
  y6 = 200;
  y7 = 100;
  y8 = 100;
  y9 = 100;
}

function setToLow() {
  y1 = 100;
  y2 = 100;
  y3 = 100;
  y4 = 200;
  y5 = 200;
  y6 = 200;
  y7 = 100;
  y8 = 100;
  y9 = 100;
}

function setToWee() {
  y1 = 100;
  y2 = 100;
  y3 = 100;
  y4 = 100;
  y5 = 100;
  y6 = 200;
  y7 = 200;
  y8 = 200;
  y9 = 100;
}

function setToNone() {
  y1 = 100;
  y2 = 100;
  y3 = 100;
  y4 = 100;
  y5 = 100;
  y6 = 100;
  y7 = 100;
  y8 = 100;
  y9 = 100;
}