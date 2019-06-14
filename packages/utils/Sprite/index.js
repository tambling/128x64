class Sprite {
  constructor(bitmap, x = 0, y = 0) {
    this.bitmap = bitmap;
    this.x = x;
    this.y = y;

    this.forEach = this.forEach.bind(this);
  }

  forEach(callback) {
    this.bitmap.forEach(callback)
  }
}

export default Sprite;
