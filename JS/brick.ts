import Sprite from './sprite';

class Brick extends Sprite {

    status: number;
    x: number;
    y: number;

    constructor(x: number, y: number, color: string, width: number = 75, height: number = 20) {
        super(x, y, width, height, color);
        this.status = 1;
    }
}

export default Brick;