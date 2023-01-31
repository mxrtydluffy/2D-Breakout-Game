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

render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this,width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;