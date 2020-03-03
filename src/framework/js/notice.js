class Notice {
  constructor(element) {
    // Protected
    this.notice = element;
    this.noticeClose = this.notice.querySelector('[data-notice-close]');

    this._setListeners();
  }

  _setListeners() {
    this.noticeClose.addEventListener('click', event => this.hide(event));
  }

  hide(event) {
    event.preventDefault();
    this.notice.parentNode.removeChild(this.notice);
    this.notice.dispatchEvent(new Event('notice:afterHide'));
  }
}

const notice = selector =>
  document.querySelectorAll(selector).forEach(element => new Notice(element));

export default notice;
