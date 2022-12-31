const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Starting point at the bottom center of the Canvas
let x = canvas.width / 2;
let y = canvas.height - 30;
// Defining small values to make it appear the ball is moving
let dx = 2;
let dy = -2;
// Detects collision if ball touches the wall.
const ballRadius = 10;
// Defining paddle properties
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
// Boolean variables can be utilized when buttons are pressed.
let rightPressed = false;
let leftPressed = false;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    // Ball bouncing off from the left and right
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    // Ball bouncing off from top edge and bottom edge 
    if (y + dy > canvas.height || y + dy < ballRadius) {
      dy = -dy;
    }

    

    x += dx;
    y += dy;

    /*
    Allows the paddle to move the paddle on the screen.
    if (rightPressed) {
      paddleX += 7;
    } else if (leftPressed) {
      paddleX -= 7;
    }
    *** However paddle will dissapear off the edge of the canvas.
    */
    
    // Determine set calculation for paddle to stay within the boudaries.
    if (rightPressed) {
      paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
    } else if (leftPressed) {
      paddleX = Math.max(paddleX - 7, 0);
    }    

    drawPaddle();
  }

  // EventListener listens for key presses 
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  // the "key" holds information about the key that is being pressed.
  function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = true;
    }
  }
  
  function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = false;
    }
  }
  
  setInterval(draw, 10);