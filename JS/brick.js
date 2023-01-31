import Brick from './JS/brick.js'

class Brick {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.bricks = [];
    }

drawbricks(ctx) {
    // Brick variables
    const brickWidth = 75;
    const brickHeight = 20;
    const brickPadding = 10;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 30;

    for (let c = 0; c < brickColumnCount; c += 1) {
        this.bricks[c] = [];
        for (let r = 0; r < brickRowCount; r += 1) {
            this.bricks[c][r] = { x: 0, y: 0, status: 1};
        }
      }
      for (let c = 0; c < this.columns; c += 1) {
        for (let r = 0; r < this.rows; r += 1) {
          if (this.bricks[c][r].status === 1) {
            const brickX = c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;
            const brickY = r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;
            this.bricks[c][r].x = brickX;
            this.bricks[c][r].y = brickY;
            const brick = new Brick(brickX, brickY);
            brick.render(ctx);
          }
        }
      }
  }
}

export default Brick;