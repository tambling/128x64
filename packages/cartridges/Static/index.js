class Bogo {
  computeNextState(input) {
    return this;
  }

  toMatrix() {
    const matrix = [];

    for(let i = 0; i <= 63; i++) {
      matrix[i] = [];

      for(let j = 0; j <= 127; j++) {
        matrix[i][j] = !!Math.round(Math.random())
      }
    }

    return Uint8Array.from(matrix.flat());
  }
}

export default Bogo;
