import $ from 'jquery';
import 'google-code-prettify/src/prettify';
import 'google-code-prettify/src/lang-css';

const ClassName = {
  BASE: 'code',
  PRE: 'code__pre',
  CODE: 'code__code',
  LINES: 'code__lines',
  LINE_NUMBERS: 'code__line-numbers',
  LINE_HIGHLIGHT: 'code__line-highlight',
  COPY_BTN: 'code__copy-btn',
  UNSTYLED_CODE: 'code__unstyled-code',
};

class Code {
  constructor(element) {
    // Protected
    this.html = $('html');
    this.code = $(element);
    this.lines = null;
    this.lineHighlight = null;
    this.copyBtn = null;

    this.code
      .addClass(`${ClassName.PRE} prettyprint linenums`)
      .wrap(`<div class="${ClassName.BASE}"></div>`)
      .after(`<textarea class="${ClassName.UNSTYLED_CODE}"></textarea>`);

    this.code.next(`.${ClassName.UNSTYLED_CODE}`).html(this.code.html()).text();

    window.prettyPrint();

    this.code
      .prepend(`<div class="${ClassName.LINE_HIGHLIGHT}"></div>`)
      .prepend(`<ol class="${ClassName.LINE_NUMBERS}"></ol>`)
      .wrapInner(`<code class="${ClassName.CODE}"></code>`)
      .prepend(`<span class="${ClassName.COPY_BTN}"></span>`);

    this.code.find('ol.linenums').addClass(ClassName.LINES);

    this.lines = this.code.find(`.${ClassName.LINES}`);
    this.lineHighlight = this.code.find(`.${ClassName.LINE_HIGHLIGHT}`);
    this.copyBtn = this.code.find(`.${ClassName.COPY_BTN}`);

    this.lines
      .children('li')
      .each((i, el) =>
        this.code.find(`.${ClassName.LINE_NUMBERS}`).append(`<li>${i + 1}</li>`)
      );

    this._setListeners();
  }

  _setListeners() {
    this.html.on('click', event => this.onBodyClick(event));
    this.lines.on('scroll', event => this.toggleScrollState(event));
    this.lines
      .children('li')
      .on('click', event => this.showLineHighlight(event));
    this.copyBtn.on('click', event => this.copyCode(event));
    this.copyBtn.on('mouseleave', event => this.removeCopiedClass(event));
  }

  onBodyClick(event) {
    if ($(event.target).closest(`.${ClassName.PRE}`)[0] !== this.code[0]) {
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
      .addClass(`${ClassName.LINE_HIGHLIGHT}--visible`);
  }

  hideLineHighlight(event) {
    this.lineHighlight.removeClass(`${ClassName.LINE_HIGHLIGHT}--visible`);
  }

  toggleScrollState(event) {
    const self = $(event.currentTarget);

    if (self.scrollLeft() > 0) {
      this.code.addClass(`${ClassName.PRE}--scrolled`);
    } else {
      this.code.removeClass(`${ClassName.PRE}--scrolled`);
    }
  }

  copyCode(event) {
    const self = $(event.currentTarget);

    this.code.next(`.${ClassName.UNSTYLED_CODE}`).select();
    document.execCommand('Copy');
    self.addClass(`${ClassName.COPY_BTN}--copied`);
  }

  removeCopiedClass(event) {
    $(event.currentTarget).removeClass(`${ClassName.COPY_BTN}--copied`);
  }
}

const code = selector => {
  $(selector).each((index, element) => {
    new Code(element);
  });
};

export default code;
