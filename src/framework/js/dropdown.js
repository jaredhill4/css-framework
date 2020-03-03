import { createPopper } from '@popperjs/core';

const CLASS_NAMES = {
  VISIBLE: 'dropdown--visible'
};

class Dropdown {
  constructor(element) {
    document.body.appendChild(element);

    // Private
    this._active = false;
    this._dropdown = null;
    this._popper = null;

    // Protected
    this.html = document.documentElement;
    this.dropdown = element;
    this.dropdownId = this.dropdown.dataset.dropdown;
    this.references = document.querySelectorAll(
      `[data-dropdown-toggle="${this.dropdownId}"]`
    );
    this.options = {
      position: this.dropdown.dataset.dropdownPosition || 'bottom-start'
    };

    this.onBodyClick = this.onBodyClick.bind(this);
    this.onDropdownClick = this.onDropdownClick.bind(this);

    this._setListeners();
  }

  _setListeners() {
    this.references.forEach(reference =>
      reference.addEventListener('click', event => this.toggle(event))
    );
  }

  isActive() {
    return this.dropdown.classList.contains(CLASS_NAMES.VISIBLE);
  }

  onBodyClick(event) {
    // Convert NodeList to array
    let references = [];
    this.references.forEach(reference => references.push(reference));

    if (!references.includes(event.target)) {
      this.hide();
    }
  }

  onDropdownClick(event) {
    event.stopPropagation();
  }

  show(event) {
    event.preventDefault();

    this.html.addEventListener('click', this.onBodyClick);
    this.dropdown.addEventListener('click', this.onDropdownClick);

    this.references.forEach(reference => {
      reference.setAttribute('aria-expanded', true);

      this._popper = createPopper(reference, this.dropdown, {
        placement: this.options.position,
        strategy: 'absolute',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 4]
            }
          }
        ]
      });
    });

    this.dropdown.style.display = 'block';
    setTimeout(() => this.dropdown.classList.add(CLASS_NAMES.VISIBLE));
  }

  hide(event = null) {
    if (event) {
      event.preventDefault();
    }

    this.html.removeEventListener('click', this.onBodyClick);
    this.dropdown.removeEventListener('click', this.onDropdownClick);
    this.dropdown.classList.remove(CLASS_NAMES.VISIBLE);

    this.references.forEach(reference =>
      reference.setAttribute('aria-expanded', false)
    );

    setTimeout(() => {
      this.dropdown.style.display = 'none';
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

const dropdown = selector =>
  document.querySelectorAll(selector).forEach(element => new Dropdown(element));

export default dropdown;
