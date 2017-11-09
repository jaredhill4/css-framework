/**
 * Code
 */

// Vendors
import $ from 'jquery';
import 'google-code-prettify/src/prettify';
import 'google-code-prettify/src/lang-css';

const wrapperClass = 'code';
const preClass = 'code__pre';
const codeClass = 'code__code';
const unstyledCodeClass = 'code__unstyled-code';
const lineNumbersClass = 'code__line-numbers';
const lineHighlightClass = 'code__line-highlight';
const copyBtnClass = 'code__copy-btn';

class Code {
  constructor(element) {
    this.html = $('html');
    this.code = $(element);
    this.lineHighlight = null;

    this.code
      .addClass(`${preClass} prettyprint linenums`)
      .wrap(`<div class="${wrapperClass}"></div>`)
      .after(`<textarea class="${unstyledCodeClass}"></textarea>`)
      .next(`.${unstyledCodeClass}`)
      .html(this.code.html())
      .text();

    window.prettyPrint();

    this.code
      .prepend(`<div class="${lineHighlightClass}"></div>`)
      .prepend(`<ol class="${lineNumbersClass}"></ol>`)
      .wrapInner(`<code class="${codeClass}"></code>`)
      .prepend(`<span class="${copyBtnClass}"></span>`)
      .find('ol.linenums')
      .addClass('code__lines')
      .find('> li')
      .each((i, el) => {
        this.code.find(`.${lineNumbersClass}`).append(`<li>${i + 1}</li>`);
      });

    this.lineHighlight = this.code.find(`.${lineHighlightClass}`);

    this._setListeners();
  }

  _setListeners() {
    this.html.on('click', event => this.onBodyClick(event));
    this.code
      .find('ol.linenums > li')
      .on('click', event => this.showLineHighlight(event));
    this.code
      .find('ol.linenums')
      .on('scroll', event => this.toggleScrollState(event));
    this.code
      .find(`.${copyBtnClass}`)
      .on('click', event => this.copyCode(event));
  }

  onBodyClick(event) {
    if ($(event.target).closest(`.${preClass}`)[0] !== this.code[0]) {
      this.hideLineHighlight(event);
    }
  }

  hideLineHighlight(event) {
    this.lineHighlight.removeClass(`${lineHighlightClass}--visible`);
  }

  showLineHighlight(event) {
    // this.hideLineHighlight(event);

    const self = $(event.currentTarget);

    console.log(this.lineHighlight);

    this.lineHighlight
      .css({
        top: self.position().top,
        height: self.outerHeight(),
      })
      .addClass(`${lineHighlightClass}--visible`);
  }

  copyCode(event) {
    const self = $(event.currentTarget);
    //const code = self.closest(`.${preClass}`);

    this.code.next(`.${unstyledCodeClass}`).select();
    document.execCommand('Copy');
    self.addClass(`${copyBtnClass}--copied`);

    setTimeout(() => {
      self.removeClass(`${copyBtnClass}--copied`);
    }, 1500);
  }

  toggleScrollState(event) {
    const self = $(event.currentTarget);
    //const code = self.closest(`.${preClass}`);

    if (self.scrollLeft() > 0) {
      this.code.addClass(`${preClass}--scrolled`);
    } else {
      this.code.removeClass(`${preClass}--scrolled`);
    }
  }
}

const code = selector => {
  $(selector).each((index, element) => {
    new Code(element);
  });
};

export default code;
