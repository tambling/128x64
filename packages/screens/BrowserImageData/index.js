import Screen from '../../Screen';
import { pixelOff, pixelOn } from './helpers';

class BrowserImageData extends Screen {
  constructor(selector) {
    super();

    this.canvas = document.getElementById(selector);
    this.context  = this.canvas.getContext('2d');
    this.imageData = this.context.createImageData(128, 64);
  }

  applyPixel(index, on) {
    pixelOff(this.imageData, index);

    if (on) {
      pixelOn(this.imageData, index);
    }
  }

  putToScreen() {
    this.context.putImageData(this.imageData, 0, 0);
  }
}

export default BrowserImageData;
