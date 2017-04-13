var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;
var isGameOver;

function preload() {
     enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
     backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png")
     playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
}

function setup() {
     createCanvas(256,256);
     player = createSprite(width/2, height-25);
     player.addImage(playerImage);
     enemy = createSprite(width/2, 0);
     enemy.addImage(enemyImage);
     enemy.rotationSpeed = 4.0;
     isGameOver = false;
}

function draw() {
     
     if (isGameOver) {
          gameover();
          
     } else {
          if (enemy.overlap(player)) {
               isGameOver = true;
          }
     
     
     background(backgroundImage);
     
     if (keyDown(RIGHT_ARROW) && player.position.x < (playerImage.width/2)) {
          player.position.x = player.position.x += 2;
     }
     
     if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
          player.position.x = player.position.x -= 2;
     }
     
     enemy.position.y = enemy.position.y + 3;
     
     if (enemy.position.y > height) {
          enemy.position.y = 0;
          enemy.position.x = random(5, width-5);
     }
     
     drawSprites();
     }
}

function gameOver() {
     background(0);
     textAlign(CENTER);
     fill("white");
     text("Game Over!", width/2, height/2);
     text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked() {
     if (isGameOver) {
          isGameOver = false;
          player.position.x = width/2;
          player.position.y = height-25;
          enemy.position.x = width/2;
          enemy.position.y = 0;
     }
}