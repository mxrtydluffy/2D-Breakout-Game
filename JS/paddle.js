// import Sprite from './Sprite.js';
import Sprite from './sprite.js';

class Paddle extends Sprite {
    constructor(x = 0, y = 0, width = 75, height = 10, color = "#949494") {
        super(x, y, width, height, color);
    }

    moveTo(dx) {
        this.x = dx;
    }

    moveBy(x) {
        this.x = x;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

export default Paddle;