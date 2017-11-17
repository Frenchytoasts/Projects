var config = {
     apiKey: "AIzaSyB0erOkxVQGdR1700IWcFkUMxVH95R0VQw",
     authDomain: "collaborative-sketch-a495b.firebaseapp.com",
     databaseURL: "https://collaborative-sketch-a495b.firebaseio.com",
     projectId: "collaborative-sketch-a495b",
     storageBucket: "collaborative-sketch-a495b.appspot.com",
     messagingSenderId: "782735327428"
};

firebase.initializeApp(config);

var pointsData = firebase.database().ref();

var poins = [];

function setup() {
     var canvas = createCanvas(400, 400);
     background(255);
     fill(0);
     pointsData.on("child_added", function (point) {
          points.push(point.val());
     });
     canvas.mousePressed(drawPoint);
     canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
     background(255);
     for (var i = 0; i < points.length; i++) {
          var point = points[i];
          ellipse(point.x, point.y, 5, 5);
     }
}

function drawPoint() {
     pointsData.push({x: mouseX, y: mouseY});
}

function drawPointIfMousePressed() {
     if (mouseIsPressed) {
          drawPoint();
     }
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
     saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
     pointsData.remove();
     points = [];
}