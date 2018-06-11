class BrowserText {
  constructor(selector) {
    this.selector = selector;
  }

  render(matrix) {
    const content = matrix.map(row => 
      row.map(column => 
        column ? '⬜️' : '⬛️'
      ).join('')
    ).join('<br />')

    document.getElementById(this.selector).innerHTML = content;
  }
}

export default BrowserText;
