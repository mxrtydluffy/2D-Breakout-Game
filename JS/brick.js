import Sprite from './sprite';

class Brick extends Sprite {
    
    /*
    - #6 super helps passes arguments to sprite
    - #12 Adds a new property
    */
   
    constructor(x, y, width = 75, height = 20, color = '#0095DD') {
        super(x, y, width, height, color);
        this.status = true;
    }
}

export default Brick;