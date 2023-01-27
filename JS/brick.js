import Sprite from './sprite';

class Brick extends Sprite {
    
    /*
    - Constructor helps passes arguments to sprite
    */

    constructor(x, y, width = 75, height = 20, color = '#0095DD') {
        super (x, y, width, height, color);
        this.status = true;
    }

    // const bricks = [];
    // const brickColumnCount = 0;
    // const brickRowCount = 0;

    // for (let c = 0; c < brickColumnCount; c += 1) {

    // }

}