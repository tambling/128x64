import Controller from '../../Controller';

class BrowserKeyboard extends Controller {
  static get defaultMappings() {
    return {
      'ArrowUp': 'up',
      'ArrowDown': 'down',
      'ArrowLeft': 'left',
      'ArrowRight': 'right',
      'c': 'center',
      'z': 'a',
      'x': 'b'
    }
  }

  constructor(mappings) {
    super()
    this.mappings = mappings || this.constructor.defaultMappings;

    document.addEventListener('keydown', this.handleKeyPress.bind(this));
    document.addEventListener('keyup', this.handleKeyRelease.bind(this));
  }

  handleKeyPress(e) {
    const pressedKey = e.key;
    const pressedButton = this.mappings[pressedKey]

    this.inputStates[pressedButton] = true;
  }

  handleKeyRelease(e) {
    const pressedKey = e.key;
    const pressedButton = this.mappings[pressedKey]

    this.inputStates[pressedButton] = false;
  }

}

export default BrowserKeyboard;
