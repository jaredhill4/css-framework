import $ from 'jquery';
import 'google-code-prettify/src/prettify';
import 'google-code-prettify/src/lang-css';

const baseClass = 'code';
const preClass = 'code__pre';
const codeClass = 'code__code';
const linesClass = 'code__lines';
const lineNumbersClass = 'code__line-numbers';
const lineHighlightClass = 'code__line-highlight';
const copyBtnClass = 'code__copy-btn';
const unstyledCodeClass = 'code__unstyled-code';

class Code {
  constructor(element) {
    this.html = $('html');
    this.code = $(element);
    this.lines = null;
    this.lineHighlight = null;

    this.code
      .addClass(`${preClass} prettyprint linenums`)
      .wrap(`<div class="${baseClass}"></div>`)
      .after(`<textarea class="${unstyledCodeClass}"></textarea>`);

    this.code.next(`.${unstyledCodeClass}`).html(this.code.html()).text();

    window.prettyPrint();

    this.code
      .prepend(`<div class="${lineHighlightClass}"></div>`)
      .prepend(`<ol class="${lineNumbersClass}"></ol>`)
      .wrapInner(`<code class="${codeClass}"></code>`)
      .prepend(`<span class="${copyBtnClass}"></span>`);

    this.code.find('ol.linenums').addClass(linesClass);

    this.lines = this.code.find(`.${linesClass}`);
    this.lineHighlight = this.code.find(`.${lineHighlightClass}`);

    this.lines.children('li').each((i, el) => {
      this.code.find(`.${lineNumbersClass}`).append(`<li>${i + 1}</li>`);
    });

    this._setListeners();
  }

  _setListeners() {
    this.html.on('click', event => this.onBodyClick(event));
    this.lines.on('scroll', event => this.toggleScrollState(event));
    this.lines
      .children('li')
      .on('click', event => this.showLineHighlight(event));
    this.code
      .find(`.${copyBtnClass}`)
      .on('click', event => this.copyCode(event));
  }

  onBodyClick(event) {
    if ($(event.target).closest(`.${preClass}`)[0] !== this.code[0]) {
      this.hideLineHighlight(event);
    }
  }

  showLineHighlight(event) {
    const self = $(event.currentTarget);

    this.lineHighlight
      .css({
        top: self.position().top,
        height: self.outerHeight(),
      })
      .addClass(`${lineHighlightClass}--visible`);
  }

  hideLineHighlight(event) {
    this.lineHighlight.removeClass(`${lineHighlightClass}--visible`);
  }

  toggleScrollState(event) {
    const self = $(event.currentTarget);

    if (self.scrollLeft() > 0) {
      this.code.addClass(`${preClass}--scrolled`);
    } else {
      this.code.removeClass(`${preClass}--scrolled`);
    }
  }

  copyCode(event) {
    const self = $(event.currentTarget);

    this.code.next(`.${unstyledCodeClass}`).select();
    document.execCommand('Copy');
    self.addClass(`${copyBtnClass}--copied`);

    setTimeout(() => {
      self.removeClass(`${copyBtnClass}--copied`);
    }, 1500);
  }
}

const code = selector => {
  $(selector).each((index, element) => {
    new Code(element);
  });
};

export default code;
