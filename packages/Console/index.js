import NullScreen from '../screens/NullScreen';
import NullController from '../controllers/NullController';
import Static from '../cartridges/Static';

class Console {
  constructor({ screen, controller, cartridge }) {
    this.screen = screen || new NullScreen();
    this.controller = controller || new NullController();
    this.cartridge = cartridge || new Static();
  }

  step() {
    const input = this.controller.getInput()
    this.cartridge.computeNextState(input)

    this.screen.render(this.cartridge.toBuffer())
  }
}

export default Console;
