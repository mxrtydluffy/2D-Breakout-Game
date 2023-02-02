import Sprite from './sprite.js';

class Brick extends Sprite {
    constructor(x, y, color, width = 75, height = 20) {
        super(x, y, width, height, color);
        this.status = 1;
    }
}

export default Brick;