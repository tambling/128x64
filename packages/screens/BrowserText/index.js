class BrowserText {
  constructor(element, options = {}) {
    this.element = element;

    this.on = options.on || '•';
    this.off = options.off || ' ';
  }

  render(matrix) {
    const content = matrix.map(row => 
      row.map(column => 
        column ? this.on : this.off 
      ).join('')
    ).join('<br />')

    this.element.innerHTML = content;
  }
}

export default BrowserText;
