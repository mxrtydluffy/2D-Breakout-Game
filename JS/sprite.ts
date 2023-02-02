// Base inorder for other classes to inherit.
class Sprite {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;

    constructor(x: number = 0, y: number = 0, width: number = 100, height: number = 100, color ='#f00') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    moveTo(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    moveBy(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    // Redirects the HTML page and overrides the existing render method
    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

export default Sprite;