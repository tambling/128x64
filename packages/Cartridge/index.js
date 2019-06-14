import Bitmap from '../utils/Bitmap';

class Cartridge {
  constructor() {
    this.bitmap = new Bitmap(128, 64);
    this.entities = [];
  }

  computeNextState(input) {
    return this;
  }

  toBuffer() {
    return this.bitmap.toUint8Array();
  }
}

export default Cartridge;
