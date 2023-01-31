// Import later to main.js
import Sprite from "./JS/sprite.js";

class Ball extends Sprite{
    constructor(color, x = 0, y = 0, radius = 10,) {
        super(x, y, 0, 0, color);
        this.color = color;
        this.radius = radius;
        this.dx = 2;
        this.dy = -2
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, MATH.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
  }

export default Ball;