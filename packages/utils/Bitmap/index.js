import Matrix from '../Matrix';

const emptyBuffer = (width, height) => {
  const buffer = [];

  for(let i = 0; i < width * height; i++) {
    buffer.push(false);
  }

  return buffer;
}

class Bitmap extends Matrix {
  constructor(width = 0, height = 0, rawData) {
    if (rawData) {
      super(width, height, rawData)
    } else {
      super(width, height, emptyBuffer(width, height))
    }
  }
}

export default Bitmap;
