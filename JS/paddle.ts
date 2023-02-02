import Sprite from './sprite';

class Paddle extends Sprite {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0, width: number = 75, height: number = 10, color: string = "#582900") {
        super(x, y, width, height, color);
    }

    moveTo(dx: number): void {
        this.x += dx;
    }

    moveBy(x: number): void {
        this.x = x;
    }
}

export default Paddle;