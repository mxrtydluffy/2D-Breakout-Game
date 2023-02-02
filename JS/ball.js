import Sprite from './sprite.js';

class Ball extends Sprite {
    constructor(color, x = 0, y = 0, radius = 10) {
        super(x, y, 0, 0, color);
        this.color = color;
        this.radius = radius;
        this.dx = 2;
        this.dy = -2;
    }

    moveTo() {
        this.x += this.dx;
        this.y += this.dy;
    }

    // Changing Color of the ball
    changeColor() {
        this.color = `#${(Math.floor(Math.random() * 0x1000000) + 0x1000000).toString(16).substring(1)}`;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
  }

export default Ball;