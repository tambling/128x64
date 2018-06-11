class BrowserText {
  constructor(selector, options = {}) {
    this.selector = selector;

    this.on = options.on || 'X';
    this.off = options.off || ' ';
  }

  render(matrix) {
    const content = matrix.map(row => 
      row.map(column => 
        column ? this.on : this.off 
      ).join('')
    ).join('<br />')

    document.getElementById(this.selector).innerHTML = content;
  }
}

export default BrowserText;
