import $ from 'jquery';
import Popper from 'popper.js';

class Dropdown {
  constructor(element) {
    const dropdown = $(element).appendTo('body');
    const reference = $(
      `[data-dropdown-toggle="${dropdown.data('dropdown')}"]`
    );

    // Private
    this._active = false;
    this._dropdown = null;
    this._popper = null;

    // Protected
    this.html = $('html');
    this.reference = reference;
    this.dropdown = dropdown;
    this.options = {
      position: dropdown.data('dropdownPosition') || 'bottom-start',
    };

    this._setListeners();
  }

  _setListeners() {
    this.reference.on('click', event => this.toggle(event));
  }

  _getBodyEvent() {
    return `click.dropdown_${this.reference.data('dropdown-toggle')}`;
  }

  isActive() {
    return this.dropdown.hasClass('dropdown--visible');
  }

  show(event) {
    event.preventDefault();

    $(document).on(this._getBodyEvent(), event => this.onBodyClick(event));
    $(this.dropdown).on(this._getBodyEvent(), event =>
      this.onDropdownClick(event)
    );

    this._popper = new Popper(this.reference, this.dropdown, {
      placement: this.options.position,
      removeOnDestroy: false,
    });

    this.dropdown.show(0, () => {
      this.dropdown.addClass('dropdown--visible');
    });
  }

  onBodyClick(event) {
    if (event.target !== this.reference[0]) {
      this.hide();
    }
  }

  onDropdownClick(event) {
    event.stopPropagation();
  }

  hide(event = null) {
    if (event) {
      event.preventDefault();
    }

    $(document).off(this._getBodyEvent());
    $(this.dropdown).off(this._getBodyEvent());

    this.dropdown.removeClass('dropdown--visible');

    setTimeout(() => {
      this.dropdown.hide();
      this._popper.destroy();
    }, 250);
  }

  toggle(event) {
    if (this.isActive()) {
      this.hide(event);
    } else {
      this.show(event);
    }
  }
}

const dropdowns = selector => {
  $(selector).each((index, element) => {
    new Dropdown(element);
  });
};

export default dropdowns;