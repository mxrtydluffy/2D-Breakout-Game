import Ball from "./JS/ball.js";
import Brick from './JS/brick.js';
import Paddle from "./JS/paddle.js";

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

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

// // Brick variables
// const brickRowCount = 4;
// const brickColumnCount = 5;
// const brickWidth = 75;
// const brickHeight = 20;
// const brickPadding = 10;
// const brickOffsetTop = 30;
// const brickOffsetLeft = 30;

// Score & lives info
let score = 0;
let lives = 3;

// // Declare Colors
// const brickColors = ["#8B4411", "#AE6E4E", "#CC9767", "#A57A5A"]

/*
Number of rows, columns, width amd height of bricks are defined. Padding is
also included so there is space between the bricks so it won't touch each other.
Top and left offset so its not drawn from the edge of the canvas.
*** CODE WILL ONLY CREATE NEW BRICKS!
*/

// const bricks = [];
// // c = brick columns
// for (let c = 0; c < brickColumnCount; c += 1) {
//   bricks[c] = [];
//   // r = brick rows
//   for (let r = 0; r < brickRowCount; r += 1) {
//     // Paints on 2D array
//     bricks[c][r] = { x: 0, y: 0, status: 1 };
//   }
// }

// Must be first
function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(`Score: ${score}`, 8, 20);
}

// Then lives are drawn
function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

// Moving options
function mouseMoveHandler({clientX}) {
  const relativeX = clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

// the "key" holds information about the key that is being pressed.
function keyDownHandler({key}) {
  if (key === 'Right' || key === 'ArrowRight') {
    rightPressed = true;
  } else if (key === 'Left' || key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler({key}) {
  if (key === 'Right' || key === 'ArrowRight') {
    rightPressed = false;
  } else if (key === 'Left' || key === 'ArrowLeft') {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#AD1D40';
  ctx.fill();
  ctx.closePath();
}

const ball = new Ball(x, y);
const paddle = new Paddle(paddleX, canvas.height - 10);

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//   ctx.fillStyle = '#949494';
//   ctx.fill();
//   ctx.closePath();
// }

// EventListener listens for key presses
const {addEventListener} = document;
addEventListener('keydown', keyDownHandler, false);
addEventListener('keyup', keyUpHandler, false);
addEventListener('mousemove', mouseMoveHandler, false);

// function changeBrickColor(row) {
//   if (row == 0){
//     return brickColors[0]
//   }
//   else if (row == 1) {
//     return brickColors[1]
//   }
//   else if (row == 2) {
//     return brickColors[2]
//   }
//   else if (row == 3) {
//     return brickColors[3]
//   }
// }

// Function to loop via all the bricks in the array.
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      if (bricks[c][r].status === 1) {
        // Setting the location
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        // Setting properties of the bricks
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        // ctx.beginPath();
        // ctx.rect(brickX, brickY, brickWidth, brickHeight);
        // ctx.fillStyle = changeBrickColor(r);
        // ctx.fill();
        // ctx.closePath();
        const brick = new Brick(brickX, brickY);
        brick.render(ctx);
      }
    }
  }
}

// Result in the ball changing its direction.
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const b = bricks[c][r];
      const {x: brickX, y: brickY, status} = b;
      if (status === 1) {
        if (
          x > brickX
          && x < brickX + brickWidth
          && y > brickY
          && y < brickY + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score += 1;
          if (score === brickRowCount * brickColumnCount) {
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  ball.render(ctx);
  ball.move();
  paddle.render(ctx);
  drawScore();
  drawLives();
  collisionDetection();

  // Ball bouncing off from the left and right walls.
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  // Ball bouncing off from top edge and bottom edge.
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      /* If statement mentions if theres no more lives "GAME OVER" is prompt, the screen reloads,
        and the browser closes the interval.
        Else highlights code that will */
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

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

  x += dx;
  y += dy;

  /* Draw function will get executed within the "requestAnimationFrame() loop"
    This will let the browser have complete control of the frame rate */
  requestAnimationFrame(draw);
}

draw();