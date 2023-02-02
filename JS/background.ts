import Sprite from './Sprite';

class Background extends Sprite {
    constructor(x: number, y: number, width: number, height: number, color: string = '#EAE0C8') {
        super(x, y, width, height, color);
    }
}

export default Background;