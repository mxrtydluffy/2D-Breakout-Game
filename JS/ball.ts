import Sprite from './sprite';

class Ball extends Sprite {
    color: string;
    radius: number;
    dx: number;
    dy: number;
    x: number;
    y: number;

    constructor(color: string, x: number = 0, y: number = 0, radius: number = 10) {
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

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
  }

export default Ball;