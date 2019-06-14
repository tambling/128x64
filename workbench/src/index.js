import Console from '../../packages/Console';
import Square from '../../packages/cartridges/Square';
import BrowserImageData from '../../packages/screens/BrowserImageData';

const screen = new BrowserImageData('canvas')
const cartridge = new Square();

const konsole = new Console({ screen, cartridge })

const step = () => {
  konsole.step();
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
