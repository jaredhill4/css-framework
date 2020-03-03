import { cssTimeToMilliseconds } from './utilities';

const CLASS_NAMES = {
  HTML_VISIBLE: 'html--modal-visible',
  VISIBLE: 'modal--visible'
};

class Modal {
  constructor(element) {
    // Protected
    this.html = document.documentElement;
    this.modal = element;
    this.modalId = this.modal.dataset.modal;
    this.modalDialog = this.modal.querySelector('.modal__dialog');
    this.modalContent = this.modal.querySelector('.modal__content');
    this.modalClose = this.modal.querySelectorAll('[data-modal-close]');
    this.modalShow = document.querySelectorAll(
      `[data-modal-show="${this.modalId}"]`
    );
    this.modalHide = document.querySelectorAll(
      `[data-modal-hide="${this.modalId}"]`
    );

    if (typeof this.modalId === 'undefined') {
      throw new Error(
        'Modal element attribute "data-modal" must have a value.'
      );
    }

    if (!this.modalDialog) {
      throw new Error(
        'Modal must include a descendent element with class name "modal__dialog."'
      );
    }

    this._setListeners();
  }

  _setListeners() {
    this.modal.addEventListener('click', event => this.hide(event));
    this.modal.addEventListener('keyup', event => this.onKeyup(event));
    this.modal.addEventListener('modal:show', event => this.show(event));
    this.modal.addEventListener('modal:hide', event => this.hide(event));
    this.modal.addEventListener('modal:toggle', event => this.toggle(event));
    this.modalDialog.addEventListener('click', event =>
      event.stopPropagation()
    );
    this.modalShow.forEach(element =>
      element.addEventListener('click', event => this.show(event))
    );
    this.modalHide.forEach(element =>
      element.addEventListener('click', event => this.hide(event))
    );
    this.modalClose.forEach(element =>
      element.addEventListener('click', event => this.hide(event))
    );
  }

  _getTransitionDuration() {
    const modalTransitionDuration = cssTimeToMilliseconds(
      this.modal.style.transitionDuration
    );
    const modalDialogTransitionDuration = cssTimeToMilliseconds(
      this.modalDialog.style.transitionDuration
    );
    return Math.max(modalTransitionDuration, modalDialogTransitionDuration);
  }

  isActive() {
    return this.modal.classList.contains(CLASS_NAMES.VISIBLE);
  }

  show(event) {
    if (typeof event !== 'undefined') {
      event.preventDefault();
    }

    this.modal.dispatchEvent(new Event('modal:beforeShow'));
    this.html.classList.add(CLASS_NAMES.HTML_VISIBLE);
    this.modal.classList.add(CLASS_NAMES.VISIBLE);

    setTimeout(() => {
      this.modal.setAttribute('tabindex', '-1');
      this.modal.focus();
      this.modal.dispatchEvent(new Event('modal:afterShow'));
    }, this._getTransitionDuration());
  }

  hide(event) {
    if (typeof event !== 'undefined') {
      event.preventDefault();
    }

    this.modal.dispatchEvent(new Event('modal:beforeHide'));
    this.html.classList.remove(CLASS_NAMES.HTML_VISIBLE);
    this.modal.classList.remove(CLASS_NAMES.VISIBLE);

    setTimeout(() => {
      this.modal.scrollTop = 0;
      this.modalDialog.scrollTop = 0;
      this.modalContent.scrollTop = 0;
      this.modal.dispatchEvent(new Event('modal:afterHide'));
    }, this._getTransitionDuration());
  }

  toggle(event) {
    if (this.isActive()) {
      this.hide(event);
    } else {
      this.show(event);
    }
  }

  onKeyup(event) {
    if (event.which === 27) {
      event.preventDefault();
      this.hide();
    }
  }
}

const modal = selector =>
  document.querySelectorAll(selector).forEach(element => new Modal(element));

export default modal;
