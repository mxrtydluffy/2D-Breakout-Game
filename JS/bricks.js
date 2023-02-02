// This brick class will create new bricks
import Brick from './brick.js';

class Bricks {
    constructor(rows = 4, cols = 5) {
        this.cols = cols;
        this.rows = rows;
        this.bricks = [];
        this.brickWidth = 75;
        this.brickHeight = 20;
        this.brickPadding = 10;
        this.brickOffset = 30;
        this.drawbricks();
    }

    drawbricks() {
        for (let c = 0; c < this.cols; c += 1) {
            this.bricks[c] = [];
            for (let r = 0; r < this.rows; r += 1) {
                const brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffset;
                const brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffset;
                let brickRowColor = '#8B4411';
                if ( r === 1) {
                    brickRowColor = '#AE6E4E';
                } else if (r === 2) {
                    brickRowColor = '#CC9767';
                } else if (r === 3) {
                    brickRowColor = '#A57A5A';
                }
                const brick = new Brick(brickX, brickY, brickRowColor);
                this.bricks[c][r] = brick;
            }
        }
    }

    render (ctx) {
        for (let c = 0; c < this.cols; c += 1) {
            for (let r = 0; r < this.rows; r += 1) {
                if (this.bricks[c][r].status === 1) {
                    const brick = this.bricks[c][r];
                    brick.render(ctx)
                }
            }
        }
    }
}

export default Brick;