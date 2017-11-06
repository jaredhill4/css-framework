import $ from 'jquery';

class Notice {
  constructor(element) {
    // Protected
    this.notice = $(element);
    this.noticeClose = this.notice.children('.notice__close');

    this._setListeners();
  }

  _setListeners() {
    this.noticeClose.on('click', event => this.hide(event));
  }

  hide(event) {
    event.preventDefault();
    this.notice.remove();
  }
}

const notices = selector => {
  $(selector).each((index, element) => {
    new Notice(element);
  });
};

export default notices;
