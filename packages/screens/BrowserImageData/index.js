class BrowserImageData {
  constructor(selector) {
    this.canvas = document.getElementById(selector);
    this.context  = this.canvas.getContext('2d');
    this.imageData = this.context.createImageData(128, 64);
  }

  render(matrix) {
    const pixelArray = matrix.reduce((a, c) => a.concat(c));

    pixelArray.forEach((pixel, index) => {
      const basePixel = index * 4;

      this.imageData.data[basePixel] = 0;
      this.imageData.data[basePixel + 1] = 0;
      this.imageData.data[basePixel + 2] = 0;
      this.imageData.data[basePixel + 3] = 255;

      if (pixel) {
        this.imageData.data[basePixel] = 255;
        this.imageData.data[basePixel + 1] = 255;
        this.imageData.data[basePixel + 2] = 255;
        this.imageData.data[basePixel + 3] = 255;
      }
    });


    this.context.putImageData(this.imageData, 0, 0);
  }
}

export default BrowserImageData;
