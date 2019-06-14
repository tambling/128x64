import { getIndexFromXAndY, getXAndYFromIndex } from './helpers';
import { DimensionMismatchError } from './errors';

class Matrix {
  constructor(width = 0, height = 0, rawData = []) {
    if ((width * height) !== rawData.length) {
      throw new DimensionMismatchError();
    }

    this.rawData = rawData;
    this.width = width;
    this.height = height;

    this.forEach = this.forEach.bind(this);
  }

  getAt(x, y) {
    const index = getIndexFromXAndY(this.width, x, y);

    return this.rawData[index];
  }

  setAt(x, y, value) {
    const index = getIndexFromXAndY(this.width, x, y);

    this.rawData[index] = value;
  }

  forEach(callback) {
    this.rawData.forEach((value, index) => {
      const [x, y] = getXAndYFromIndex(this.width, index);
      callback(x, y, value);
    });
  }
}

export default Matrix;
