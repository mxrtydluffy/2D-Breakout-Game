import Sprite from './sprite.js';

class Background extends Sprite {
    constructor(x, y, width, height, color = '#EAE0C8') {
        super(x, y, width, height, color);
    }
}

export default Background;