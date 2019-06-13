class Controller {
  constructor() {
    this.inputStates = {
      up: false,
      down: false,
      left: false,
      right: false,
      center: false,
      a: false,
      b: false,
    }
  }

  getInput() {
    return this.inputStates;
  }
}

export default Controller;
