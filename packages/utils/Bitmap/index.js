import Matrix from '../Matrix';

const emptyBuffer = (width, height) => {
  const buffer = [];

  for(let i = 0; i < width * height; i++) {
    buffer.push(false);
  }

  return buffer;
}

class Bitmap extends Matrix {
  constructor({ width = 0, height = 0, rawData }) {
    if (rawData) {
      super(width, height, rawData)
    } else {
      super(width, height, emptyBuffer(width, height))
    }
  }

  applySprite(sprite) {
    sprite.forEach((x, y, value) => {
      const relativeX = x + sprite.x;
      const relativeY = y + sprite.y;

      this.setAt(relativeX, relativeY, value);
    })
  }

  clearSprite(sprite) {
    sprite.forEach((x, y, value) => {
      const relativeX = x + sprite.x;
      const relativeY = y + sprite.y;

      this.setAt(relativeX, relativeY, false);
    })
  }

  toUint8Array() {
    return Uint8Array.from(this.rawData);
  }

  static fromString(string, on = 'X', off = 'O') {
    const lines = string.split('\n');
    const bits = lines.map(line => line.split(''));

    const width = Math.max(...bits.map(row => row.length));
    const height = lines.length;

    const rawData = []

    bits.forEach((row) => {
      for(let i = 0; i < width; i++) {
        rawData.push((row[i] === on) || false);
      }
    });

    return new Bitmap({width, height, rawData});
  }
}

export default Bitmap;
