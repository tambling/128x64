import Static from '../../packages/cartridges/Static';
import BrowserImageData from '../../packages/screens/BrowserImageData';

const screen = new BrowserImageData('canvas')

const cartridge = new Static()

screen.render(cartridge.toMatrix())

const step = () => {
  setTimeout(() => {
  screen.render(cartridge.toMatrix())
  window.requestAnimationFrame(step);
  }, 1000 / 30)
}

window.requestAnimationFrame(step);
