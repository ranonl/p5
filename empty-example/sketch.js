let gameRunning = true
let gameStart = false
var start_button
let time = 0
let powerUpTime = 5
let buttonx = 330
let buttony = 280
let x1
let y1 = 25
let x2
let y2 = 25
let x3
let y3 = 25
let x4
let y4 = 25
let x5
let y5 = 25
let sizePowerUpX
let sizePowerUpY = 20
let vx1
let vy1
let vx2
let vy2
let vx3
let vy3
let vx4
let vy4
let vx5
let vy5
let vSizePowerX
let vSizePowerY
let ball2 = false
let ball3 = false
let ball4 = false
let ball5 = false
let sizePowerUp = false
let poweredUp = false
let controllerLength = 110

function setup() {
  frameRate(60)
  createCanvas(750, 500)
  x1 = random(25, 720)
  x2 = random(25, 720)
  x3 = random(25, 720)
  x4 = random(25, 720)
  x5 = random(25, 720)
  sizePowerUpX = random(30, 720)
  vx1 = random(3, 5)
  vy1 = 4
  vx2 = random(-3, -5)
  vy2 = 4
  vx3 = random(3, 5)
  vy3 = 4
  vx4 = random(3, 5)
  vy4 = 4
  vx5 = random(3, 5)
  vy5 = 4
  vSizePowerX = random(3, 5)
  vSizePowerY = 6
  background(255, 204, 0)
}

function draw() {
  // General
  noStroke()
  background(255, 215, 102)

  if(frameCount < 180){ // Start Screen
    fill(color(255))
    textSize(50)
    text("PONG", 300, 240)
  }
  else { // Game Screen
    // Timer
    if(frameCount % 60 == 0 && gameRunning == true) {
      time = time + 1
    }
    fill(color(255))
    textSize(32)
    text(str(time) + "s", 680, 50)

    // The Pong Controller
    fill(color(244, 244, 248))
    if(mouseX < 640){
      rect(mouseX, 440, controllerLength, 40)
    }
    else {
      rect(640, 440, controllerLength, 40)
    }

    // Balls General
    fill(color(244, 244, 248))

    // Ball 1
    if(gameRunning == true){
      x1 = x1 + vx1
      y1 = y1 + vy1
    }
    if(x1 >= 730 || x1 <= 20) {
      vx1 = vx1 * -1
    }
    if(y1 <= 20) {
      vy1 = vy1 * -1
    }
    if(y1 >= 480){
      vy1 = 0
      vx1 = 0
      textSize(50)
      fill(color(255))
      //textFont(myFont)
      text('GAME OVER', 230, 230)
      gameRunning = false
    }
    if(x1 >= mouseX && x1 <= mouseX+controllerLength) {
      if(y1 >= 430 && y1 <= 440) {
        vy1 = vy1 * -1
      }
    }
    circle(x1, y1, 20)

    // Ball 2
    if(time == 5) {
      ball2 = true
    }
    if(ball2 == true){
      if(gameRunning == true){
        x2 = x2 + vx2
        y2 = y2 + vy2
      }
      if(x2 >= 730 || x2 <= 20) {
        vx2 = vx2 * -1
      }
      if(y2 <= 20) {
        vy2 = vy2 * -1
      }
      if(y2 >= 480){
        vy2 = 0
        vx2 = 0
        textSize(50)
        fill(color(255))
        //textFont(myFont)
        text('GAME OVER', 230, 230)
        gameRunning = false
      }
      if(x2 >= mouseX && x2 <= mouseX+controllerLength) {
        if(y2 >= 430 && y2 <= 440) {
          vy2 = vy2 * -1
        }
      }
      circle(x2, y2, 20)
    }

    // Ball 3
    if(time == 10) {
      ball3 = true
    }
    if(ball3 == true){
      if(gameRunning == true){
        x3 = x3 + vx3
        y3 = y3 + vy3
      }
      if(x3 >= 730 || x3 <= 20) {
        vx3 = vx3 * -1
      }
      if(y3 <= 20) {
        vy3 = vy3 * -1
      }
      if(y3 >= 480){
        vy3 = 0
        vx3 = 0
        textSize(50)
        fill(color(255))
        //textFont(myFont)
        text('GAME OVER', 230, 230)
        gameRunning = false
      }
      if(x3 >= mouseX && x3 <= mouseX+controllerLength) {
        if(y3 >= 430 && y3 <= 440) {
          vy3 = vy3 * -1
        }
      }
      circle(x3, y3, 20)
    }

    // Ball 4
    if(time == 15) {
      ball4 = true
    }
    if(ball4 == true){
      if(gameRunning == true){
        x4 = x4 + vx4
        y4 = y4 + vy4
      }
      if(x4 >= 730 || x4 <= 20) {
        vx4 = vx4 * -1
      }
      if(y4 <= 20) {
        vy4 = vy4 * -1
      }
      if(y4 >= 480){
        vy4 = 0
        vx4 = 0
        textSize(50)
        fill(color(255))
        //textFont(myFont)
        text('GAME OVER', 230, 230)
        gameRunning = false
      }
      if(x4 >= mouseX && x4 <= mouseX+controllerLength) {
        if(y4 >= 430 && y4 <= 440) {
          vy4 = vy4 * -1
        }
      }
      circle(x4, y4, 20)
    }

    // Ball 5
    if(time == 20) {
      ball5 = true
    }
    if(ball5 == true){
      if(gameRunning == true){
        x5 = x5 + vx5
        y5 = y5 + vy5
      }
      if(x5 >= 730 || x5 <= 20) {
        vx5 = vx5 * -1
      }
      if(y5 <= 20) {
        vy5 = vy5 * -1
      }
      if(y5 >= 480){
        vy5 = 0
        vx5 = 0
        textSize(50)
        fill(color(255))
        //textFont(myFont)
        text('GAME OVER', 230, 230)
        gameRunning = false
      }
      if(x5 >= mouseX && x5 <= mouseX+controllerLength) {
        if(y5 >= 430 && y5 <= 440) {
          vy5 = vy5 * -1
        }
      }
      circle(x5, y5, 20)
    }

    // Power Up
    if(time % 11 == 0) {
      sizePowerUp = true
    }
    if(sizePowerUp == true) {
      if(gameRunning == true) {
        sizePowerUpX = sizePowerUpX + vSizePowerX
        sizePowerUpY = sizePowerUpY + vSizePowerY
      }
      if(sizePowerUpX >= 730 || sizePowerUpX <= 20) {
        vSizePowerX = vSizePowerX * -1
      }
      if(sizePowerUpY <= 20) {
        vSizePowerY = vSizePowerY * -1
      }
      if(sizePowerUpX >= mouseX && sizePowerUpX <= mouseX+controllerLength) {
        if(sizePowerUpY >= 430 && sizePowerUpY <= 440) {
          poweredUp = true
          sizePowerUp = false
        }
      }
      if(powerUpTime <= 0) {
        controllerLength = 110
        poweredUp = false
        sizePowerUp = false
        powerUpTime = 5
        sizePowerUpX = 40
        sizePowerUpY = 30
        vSizePowerX = 4
        vSizePowerY = 5
      }
      if(poweredUp == true){
        controllerLength = 220
        if(frameCount % 60 == 0){
          powerUpTime = powerUpTime - 1
        }
        /*
        fill(color(255))
        textSize(32)
        text("Power " + str(powerUpTime) + "s", 50, 50)
        */
      }
      fill(color(42, 183, 202))
      circle(sizePowerUpX, sizePowerUpY, 20)
    }

    // End Line
    fill(color(254, 74, 73))
    rect(0, 490, 750, 15)
  }
}
