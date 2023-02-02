import Ball from "./ball.js";
import Brick from "./brick.js";
import Text from "./text.js";
import Paddle from "./paddle.js";
import Background from "./background.js";

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.color = '#EAE0C8';
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 30;
    this.paddleWidth = 75;
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;

    // Instance of objects
    this.allBricks = new Brick();
    this.background = new Background(0, 0, this.canvas.width, this.canvas.height);
    this.ball = new Ball(this.color, this.x, this.y);
    this.paddle = new Paddle(this.paddleX, this.canvas.height - 10);
    this.scoreText = new Text(8, 20, this.color, 0, 'Score: ');
    this.livesText = new Text(this.canvas.width - 65, 20, this.color, 3, 'Lives: ');

    // Boolean variables can be utilized when buttons are pressed.
    let rightPressed = false;
    let leftPressed = false;

    // Declare setUp & draw method
    this.setUp();
    this.draw();
  }

  setUp() {
    /*
      Event Listeners will listen when keys are perssed
    */

    this.resetBallAndPaddle();

    const {addEventListener} = document;
    // event listeners to listen for pressed keys
    addEventListener('keydown', this.keyDownHandler.bind(this), false);
    addEventListener('keyup', this.keyUpHandler.bind(this), false);
    // event listener for mouse
    addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
  }

  /*
    Will reset the ball & paddle
  */

  // reset ball and paddle
  resetBallAndPaddle() {
    // randomize starting x position of ball to change the game play
    this.ball.x = Math.floor(Math.random() * this.canvas.width) + 0;
    this.ball.y = this.canvas.height - 30;
    this.ball.dx = 3;
    this.ball.dy = -3;
    this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
  }

  collisionDetection() {
    for (let c = 0; c < allBricks.cols; c += 1) {
      for (let r = 0; r < allBricks.rows; r += 1) {
        const b = this.allBricks.bricks[c][r];
        if (b.status === 1) {
          if (
            this.ball.x > b.x
            && this.ball.x < b.x + this.allBricks.brickWidth
            && ball.y > b.y
            && ball.y < b.y + this.allBricks.brickHeight
          ) {
            this.ball.dy = -this.ball.dy;
            b.status = 0;
            this.scoreText.value += 1;
            if (this.scoreText.value === this.allBricks.rows * this.allBricks.cols) {
              alert('YOU WIN, CONGRATULATIONS!');
              document.location.reload();
            }
          }
        }
      }
    }
  }

  movePaddle() {
    if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddleWidth) {
      this.paddle.moveTo(7);
    } else if (this.leftPressed && this.paddle.x > 0) {
      this.paddle.moveTo(-7);
    }
  }

  // Moving options
  // the "key" holds information about the key that is being pressed.
  keyDownHandler({ key }) {
    if (key === 'Right' || key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (key === 'Left' || key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler({ key }) {
    if (key === 'Right' || key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (key === 'Left' || key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler({ clientX }) {
    const relativeX = clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.paddleX.moveBy(relativeX - this.paddle.width / 2);
    }
  }

  draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // Displays objects on canvas
      this.background.render(this.ctx);
      this.allBricks.render(this.ctx);
      this.ball.render(this.ctx);
      this.ball.moveTo();
      this.paddle.render(this.ctx);
      this.scoreText.render(this.ctx);
      this.livesText.render(this.ctx);
      this.collisionDetection();
      
      // When ball bounces
      if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius
        || this.ball.x + this.ball.dx < this.ball.radius) {
        this.ball.dx = -this.ball.dx;
        // random colour if ball touches left or right
        this.ball.randColor();
      }
    
      // Determines ball movement when touching corners of the canvas
      if (this.ball.y + this.ball.dy < this.ball.radius) {
        this.ball.dy = -this.ball.dy;
      } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
      // detect collision between ball and paddle
        if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
          this.ball.dy = -this.ball.dy;
        } else {
          this.livesText.value -= 1;
          if (!this.livesText.value) {
            alert('GAME OVER');
            document.location.reload();
          } else {
          // Reset
            this.resetBallAndPaddle();
          }
        }
      }

      this.movePaddle();
      // draw the screen again
      requestAnimationFrame(this.draw.bind(this));
    }
  }

  export default Game;


// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// // Starting point at the bottom center of the Canvas
// let x = canvas.width / 2;
// let y = canvas.height - 30;

// // Defining small values to make it appear the ball is moving
// let dx = 2;
// let dy = -2;

// // Detects collision if ball touches the wall.
// const ballRadius = 10;

// // Defining paddle properties
// const paddleHeight = 10;
// const paddleWidth = 75;
// let paddleX = (canvas.width - paddleWidth) / 2;



// // // Brick variables
// // const brickRowCount = 4;
// // const brickColumnCount = 5;
// // const brickWidth = 75;
// // const brickHeight = 20;
// // const brickPadding = 10;
// // const brickOffsetTop = 30;
// // const brickOffsetLeft = 30;

// // Score & lives info
// const score = 0;
// const lives = 3;

// // // Declare Colors
// // const brickColors = ["#8B4411", "#AE6E4E", "#CC9767", "#A57A5A"]

// /*
// Number of rows, columns, width amd height of bricks are defined. Padding is
// also included so there is space between the bricks so it won't touch each other.
// Top and left offset so its not drawn from the edge of the canvas.
// *** CODE WILL ONLY CREATE NEW BRICKS!
// */

// // const bricks = [];
// // // c = brick columns
// // for (let c = 0; c < brickColumnCount; c += 1) {
// //   bricks[c] = [];
// //   // r = brick rows
// //   for (let r = 0; r < brickRowCount; r += 1) {
// //     // Paints on 2D array
// //     bricks[c][r] = { x: 0, y: 0, status: 1 };
// //   }
// // }

// // Must be first
// function drawScore() {
//   ctx.font = '16px Arial';
//   ctx.fillStyle = 'black';
//   ctx.fillText(`Score: ${score}`, 8, 20);
// }

// // Then lives are drawn
// function drawLives() {
//   ctx.font = '16px Arial';
//   ctx.fillStyle = 'black';
//   ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
// }







// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//   ctx.fillStyle = '#AD1D40';
//   ctx.fill();
//   ctx.closePath();
// }

// const ball = new Ball(x, y);
// const paddle = new Paddle(paddleX, canvas.height - 10);
// const scoreText = new Text(8, 20, color, score, 'Score: ');
// const livesText = new Text(canvas.width - 65, 20, color, lives, "Lives: ")

// // function drawPaddle() {
// //   ctx.beginPath();
// //   ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
// //   ctx.fillStyle = '#949494';
// //   ctx.fill();
// //   ctx.closePath();
// // }

// // EventListener listens for key presses
// const {addEventListener} = document;
// addEventListener('keydown', keyDownHandler, false);
// addEventListener('keyup', keyUpHandler, false);
// addEventListener('mousemove', mouseMoveHandler, false);

// // function changeBrickColor(row) {
// //   if (row == 0){
// //     return brickColors[0]
// //   }
// //   else if (row == 1) {
// //     return brickColors[1]
// //   }
// //   else if (row == 2) {
// //     return brickColors[2]
// //   }
// //   else if (row == 3) {
// //     return brickColors[3]
// //   }
// // }

// // Function to loop via all the bricks in the array.
// function drawBricks() {
//   for (let c = 0; c < brickColumnCount; c += 1) {
//     for (let r = 0; r < brickRowCount; r += 1) {
//       if (bricks[c][r].status === 1) {
//         // Setting the location
//         const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//         const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//         // Setting properties of the bricks
//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         // ctx.beginPath();
//         // ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         // ctx.fillStyle = changeBrickColor(r);
//         // ctx.fill();
//         // ctx.closePath();
//         const brick = new Brick(brickX, brickY);
//         brick.render(ctx);
//       }
//     }
//   }
// }



// // Result in the ball changing its direction.


// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawBricks();
//   ball.render(ctx);
//   ball.move();
//   paddle.render(ctx);
//   scoreText.render(ctx);
//   livesText.render(ctx);
//   collisionDetection();

//   // Ball bouncing off from the left and right walls.
//   if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
//     ball.dx = -ball.dx;
//   }
//   // Ball bouncing off from top edge and bottom edge.
//   if (y + dy < ballRadius) {
//     dy = -dy;
//   } else if (y + dy > canvas.height - ballRadius) {
//     if (x > paddleX && x < paddleX + paddleWidth) {
//       dy = -dy;
//     } else {
//       /* If statement mentions if theres no more lives "GAME OVER" is prompt, the screen reloads,
//         and the browser closes the interval.
//         Else highlights code that will */
//       lives -= 1;
//       if (!lives) {
//         alert('GAME OVER');
//         document.location.reload();
//       } else {
//         x = canvas.width / 2;
//         y = canvas.height - 30;
//         dx = 2;
//         dy = -2;
//         paddleX = (canvas.width - paddleWidth) / 2;
//       }
//     }
//   }

//   /*
//     Allows the paddle to move the paddle on the screen.
//     if (rightPressed) {
//       paddleX += 7;
//     } else if (leftPressed) {
//       paddleX -= 7;
//     }
//     *** However paddle will dissapear off the edge of the canvas.
//     */

//   // Determine set calculation for paddle to stay within the boudaries.
//   if (rightPressed) {
//     paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
//   } else if (leftPressed) {
//     paddleX = Math.max(paddleX - 7, 0);
//   }

//   x += dx;
//   y += dy;

//   /* Draw function will get executed within the "requestAnimationFrame() loop"
//     This will let the browser have complete control of the frame rate */
//   requestAnimationFrame(draw);
// }

// draw();