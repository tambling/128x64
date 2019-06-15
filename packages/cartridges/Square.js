import Cartridge from '../Cartridge';

import Bitmap from '../utils/Bitmap';
import Sprite from '../utils/Sprite';

class Square extends Cartridge {
  constructor() {
    super();

    const square = Bitmap.fromString('XXXX\nXOOX\nXOOX\nXXXX');
    this.squareSprite = new Sprite(square)

    this.sprites.push(this.squareSprite)
  }

  handleInput(input) {
    if (input.up) {
      this.squareSprite.y = this.squareSprite.y - 1;
    }
    if (input.down) {
      this.squareSprite.y = this.squareSprite.y + 1;
    }
    if (input.right) {
      this.squareSprite.x = this.squareSprite.x + 1;
    }
    if (input.left) {
      this.squareSprite.x = this.squareSprite.x - 1;
    }

    this.handleSquareCollisions();
  }

  handleSquareCollisions() {
     if(this.squareSprite.x < 0) {
      this.squareSprite.x = 0;
     }

     if(this.squareSprite.y < 0) {
      this.squareSprite.y = 0;
     }

    const maxX = this.bitmap.width - this.squareSprite.bitmap.width;
    if(this.squareSprite.x > maxX) {
      this.squareSprite.x = maxX;
    }

    const maxY = this.bitmap.height - this.squareSprite.bitmap.height
    if(this.squareSprite.y > maxY) {
      this.squareSprite.y = maxY;
    }
  }
}

export default Square;
