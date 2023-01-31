import Sprite from './sprite.js';

class Brick extends Sprite {
    
    /*
    - #6 super helps passes arguments to sprite
    - #12 Adds a new property
    */
   
    constructor(x, y, width = 75, height = 20, color = '#0095DD') {
        super(x, y, width, height, color);
        this.status = true;
    }

    // Brick variables
brickRowCount = 4;
brickColumnCount = 5;
brickWidth = 75;
brickHeight = 20;
brickPadding = 10;
brickOffsetTop = 30;
brickOffsetLeft = 30;

// 

bricks = [];
// c = brick columns
for (c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  // r = brick rows
  for (let r = 0; r < brickRowCount; r += 1) {
    // Paints on 2D array
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}


// Function to loop via all the bricks in the array.
render(ctx) {
    for (let c = 0; c < brickColumnCount; c += 1) {
      for (let r = 0; r < brickRowCount; r += 1) {
        if (bricks[c][r].status === 1) {
          // Setting the location
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
          // Setting properties of the bricks
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          // Declaring Colors
          let brickRowColor = "#8B4411";
          if (r === 1) {
            brickRowColor = "#AE6E4E";
          } else if (r === 2) {
                brickRowColor = "#CC9767";
          } else if (r === 3) {
                brickRowColor = "#A57A5A";
          }
          ctx.fillStyle = brickRowColor;
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}

export default Brick;