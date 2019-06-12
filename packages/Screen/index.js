import { 
  InvalidBufferError,
  ApplyBufferNotDefinedError,
  PutToScreenNotDefinedError,
} from './errors'

class Screen {
  checkValidity(buffer) {
    if (!(buffer instanceof Uint8Array)) {
      throw new InvalidBufferError();
    }

    if (typeof this.applyPixel !== 'function') {
      throw new ApplyPixelNotDefinedError();
    }
  }

  applyBuffer(buffer) {
    buffer.forEach((pixel, index) => {
      this.applyPixel(index, pixel)
    });
  }

  render(buffer) {
    this.checkValidity(buffer)
    this.applyBuffer(buffer);
    this.putToScreen();
  }
}

export default Screen;
