import Ball from "./ball";
import Bricks from "./bricks";
import Text from "./text";
import Paddle from "./paddle";
import Background from "./background";

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  color: string;
  x: number;
  y: number;
  paddleWidth: number;
  paddleX: number;
  allBricks: Bricks;
  background: Background;
  ball: Ball;
  paddle: Paddle;
  scoreText: Text;
  livesText: Text;
  rightPressed: boolean;
  leftPressed: boolean;
  
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.color = '#582900';
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 30;
    this.paddleWidth = 75;
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;

    // Instance of objects
    this.allBricks = new Bricks();
    this.background = new Background(0, 0, this.canvas.width, this.canvas.height);
    this.ball = new Ball(this.color, this.x, this.y);
    this.paddle = new Paddle(this.paddleX, this.canvas.height - 10);
    this.scoreText = new Text(8, 20, this.color, 0, 'Score: ');
    this.livesText = new Text(this.canvas.width - 65, 20, this.color, 3, 'Lives: ');

    // Boolean variables can be utilized when buttons are pressed.
    this.rightPressed = false;
    this.leftPressed = false;

    // Declare setUp & draw method
    this.setUp();
    this.draw();
  }

  setUp(): void {
    /*
      Event Listeners will listen when keys are perssed
    */

    this.resetBallAndPaddle();

    const {addEventListener} = document;
    // For pressed keys
    addEventListener('keydown', this.keyDownHandler.bind(this), false);
    addEventListener('keyup', this.keyUpHandler.bind(this), false);
    // For mouse
    addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
  }

  /*
    Will reset the ball & paddle
  */

  resetBallAndPaddle(): void {
    this.ball.x = Math.floor(Math.random() * this.canvas.width) + 0;
    this.ball.y = this.canvas.height - 30;
    this.ball.dx = 3;
    this.ball.dy = -3;
    this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
  }

  collisionDetection(): void {
    for (let c = 0; c < this.allBricks.cols; c += 1) {
      for (let r = 0; r < this.allBricks.rows; r += 1) {
        const b = this.allBricks.bricks[c][r];
        if (b.status === 1) {
          if (
            this.ball.x > b.x
            && this.ball.x < b.x + this.allBricks.brickWidth
            && this.ball.y > b.y
            && this.ball.y < b.y + this.allBricks.brickHeight
          ) {
            this.ball.dy = -this.ball.dy;
            b.status = 0;
            this.ball.changeColor();
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

  movePaddle(): void {
    if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {
      this.paddle.moveTo(7);
    } else if (this.leftPressed && this.paddle.x > 0) {
      this.paddle.moveTo(-7);
    }
  }

  // Moving options
  // the "key" holds information about the key that is being pressed.
  keyDownHandler({key}: {key:string}): void {
    if (key === 'Right' || key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (key === 'Left' || key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler({key}: {key:string}): void {
    if (key === 'Right' || key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (key === 'Left' || key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler({clientX}: {clientX:number}): void {
    const relativeX = clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.paddle.moveBy(relativeX - this.paddle.width / 2);
    }
  }

  draw(): void {
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
        this.ball.changeColor();
      }
    
      // Determines ball movement when touching corners of the canvas
      if (this.ball.y + this.ball.dy < this.ball.radius) {
        this.ball.dy = -this.ball.dy;
        this.ball.changeColor();
      } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
      // detect collision between ball and paddle
        if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
          this.ball.dy = -this.ball.dy;
          this.ball.changeColor();
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
      requestAnimationFrame(this.draw.bind(this));
    }
  }

  export default Game;