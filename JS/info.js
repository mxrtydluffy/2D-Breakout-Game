import { createGzip } from 'zlib';
import Sprite from './JS/sprite.js';

class Text {
    constructor(x, y, color, value, displayText) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.value = value;
        this.font = '16px Arial';
        this.displayText = displayTexxt
    }
}

class Text extends Sprite {
    constructor(x = 0, y = 0, radius = 10, color = '#0095DD') {
        super(x, y, 0, 0, color);
        this.radius = radius;
        this.dx = 2;
        this.dy = -2;
    }

    render(ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(`${this.displayText}${this.value}`, this.x, this.y);
    }
}

export default Text