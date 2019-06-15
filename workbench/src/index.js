import Console from '../../packages/Console';
import Square from '../../packages/cartridges/Square';
import BrowserImageData from '../../packages/screens/BrowserImageData';
import BrowserKeyboard from '../../packages/controllers/BrowserKeyboard';

const screen = new BrowserImageData('canvas');
const cartridge = new Square();
const controller = new BrowserKeyboard();

const konsole = new Console({ screen, cartridge, controller })

const step = () => {
  konsole.step();
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
