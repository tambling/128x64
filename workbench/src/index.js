import Console from '../../packages/Console';
import Static from '../../packages/cartridges/Static';
import BrowserImageData from '../../packages/screens/BrowserImageData';

const screen = new BrowserImageData('canvas')

const konsole = new Console({ screen })

const step = () => {
  konsole.step();
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
