import Bitmap from '../utils/Bitmap';

class Cartridge {
  constructor() {
    this.bitmap = new Bitmap({ width: 128, height: 64 });
    this.sprites = [];
  }

  handleInput(input) {
    return;
  }

  applySprites() {
    this.sprites.forEach(sprite => this.bitmap.applySprite(sprite));
  }

  clearSprites() {
    this.sprites.forEach(sprite => this.bitmap.clearSprite(sprite));
  }

  computeNextState(input) {
    this.clearSprites();
    this.handleInput(input);
    this.applySprites();
    return this;
  }

  toBuffer() {
    return this.bitmap.toUint8Array();
  }
}

export default Cartridge;
