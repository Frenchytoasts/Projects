var NUM_CIRCLES = 20;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup() {
     createCanvas(480, 1200);
     
     frameRate(30);
     
     circleDiameter = width/NUM_CIRCLES;
     circleRadius = circleDiameter/10;
     
     rVal = 100;
     gVal = 100;
     bVal = 100;
}

function draw() {
     var isShifted = false;
     
     var y = height;
     while (y >= 0) {
          
          var x;
          
          if (isShifted) {
               x = circleRadius;
          } else {
               x = 0;
          }
          
          while (x <= width) {
               fill(color(rVal, gVal, bVal));
               stroke(color(rVal, gVal, bVal));
               ellipse(x, y, circleDiameter, circleDiameter)
               x = x + circleDiameter;
          }
          
          y = y - circleRadius;
          isShifted = !isShifted;
          
          rVal = (rVal + 254) % 186;
          gVal = (gVal + 7) % 186;
          bVal = (bVal + 0) % 186;
     }
}

function keyPressed() {
     if (keyCode === 15 || keyCode === 83) {
          saveCanvas('geometricPattern', 'png');
     }
     return false;
}
