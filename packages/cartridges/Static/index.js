import Cartridge from '../../Cartridge';

class Static extends Cartridge {
  toBuffer() {
    const buffer = [];

    for(let i = 0; i < 128 * 64; i++) {
      buffer.push(Math.round(Math.random()));
    }

    return Uint8Array.from(buffer);
  }
}

export default Static;
