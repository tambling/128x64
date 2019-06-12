import { pixelOff, pixelOn } from './helpers';

class BrowserImageData {
  constructor(selector) {
    this.canvas = document.getElementById(selector);
    this.context  = this.canvas.getContext('2d');
    this.imageData = this.context.createImageData(128, 64);
  }

  render(matrix) {
    const pixelArray = matrix.reduce((a, c) => a.concat(c));

    pixelArray.forEach((pixel, index) => {
      pixelOff(this.imageData, index);

      if (pixel) {
        pixelOn(this.imageData, index);
      }
    });


    this.context.putImageData(this.imageData, 0, 0);
  }
}

export default BrowserImageData;
