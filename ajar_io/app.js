var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var x = 250;
var y = 250;
var mouseX = 250;
var mouseY = 250;
var velocity = 2;
var foodPositions = [[30, 20], [400, 90], [60, 317], [300, 268]]
var points
var enemy
var score = document.createTextNode(points);
var player
var food

function setup() {
     points = 0;
}

function drawCircle(cellX, cellY, radius, color) { 
     context.beginPath();
     context.arc(cellX, cellY, radius, 0, 2*3.14159);
     context.fillStyle = color;
     context.fill();
}

function clearCanvas() {
     context.beginPath();
     context.rect(0, 0, 500, 500);
     context.fillStyle = "gray";
     context.fill();
}

function calculatePosition() {
     if (mouseX > x) {
          x = x + velocity;
     } else {
          x = x - velocity;
     }
     if (mouseY > y) {
          y = y + velocity;
     } else {
          y = y - velocity;
     }
}

function drawScreen() {
     clearCanvas();
     calculatePosition();
     //addPoints();
     document.body.appendChild(score);
     drawCircle(x, y, 35, "cyan");
     drawCircle(x, y, 35, "cyan");
     drawCircle(foodPositions[0][0], foodPositions[0][1], 10, "white");
     drawCircle(foodPositions[1][0], foodPositions[1][1], 10, "white");
     drawCircle(foodPositions[2][0], foodPositions[2][1], 10, "while");
     drawCircle(foodPositions[3][0], foodPositions[3][1], 10, "white");
     setTimeout(drawScreen, 1000/60);
}

function mouseMoved(e) {
     mouseX = e.clientX;
     mouseY = e.clientY;
}

function addPoints() {
         if (food.overlap(player)) {
              points = points + 1;
         }
         
}

canvas.addEventListener("mousemove", mouseMoved);
setup();
drawScreen();

