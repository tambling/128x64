import Cartridge from '../Cartridge';

import Bitmap from '../utils/Bitmap';
import Sprite from '../utils/Sprite';

class Square extends Cartridge {
  constructor() {
    super();

    const square = Bitmap.fromString('XXX\nXOX\nXXX');
    this.squareSprite = new Sprite(square)

    this.sprites.push(this.squareSprite)
  }
}

export default Square;
