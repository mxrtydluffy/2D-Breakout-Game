import Sprite from './sprite.js';

class Paddle extends Sprite {
    constructor(x = 0, y = 0, width = 75, height = 10, color = "#582900") {
        super(x, y, width, height, color);
    }

    moveTo(dx) {
        this.x += dx;
    }

    moveBy(x) {
        this.x = x;
    }
}

export default Paddle;