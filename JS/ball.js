// Import later to main.js
import Sprite from "./sprite";

class Ball extends Sprite{
    constructor(x, y, radius, color, canvas) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = canvas;
        this.dx = 2;
        this.dy = -2;
        this.radius = radius;
    }

    render(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, MATH.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }
  }

export default Ball;