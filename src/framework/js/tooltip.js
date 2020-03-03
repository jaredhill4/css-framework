import { createPopper } from '@popperjs/core';

const CLASS_NAMES = {
  VISIBLE: 'tooltip--visible'
};

class Tooltip {
  constructor(element) {
    // Private
    this._hideTimeout = null;
    this._showTimeout = null;
    this._popper = null;
    this._tooltip = null;

    // Protected
    this.reference = element;
    this.options = {
      delay: this.reference.dataset.tooltipDelay || 0,
      placement:
        typeof this.reference.dataset.tooltip === 'string'
          ? this.reference.dataset.tooltip
          : 'top',
      transition: 250 // This should match the CSS transition duration
    };

    this._moveTitle();
    this._setListeners();
  }

  _moveTitle() {
    this.reference.setAttribute(
      'data-original-title',
      this.reference.getAttribute('title')
    );
    this.reference.setAttribute('title', '');
  }

  _setListeners() {
    this.reference.addEventListener('mouseenter', event => this.show(event));
    this.reference.addEventListener('mouseleave', event => this.hide(event));
  }

  getTitle() {
    return this.reference.getAttribute('data-original-title') || '';
  }

  isActive() {
    return !!this._tooltip;
  }

  show(event) {
    this._showTimeout = setTimeout(() => {
      clearTimeout(this._hideTimeout);

      if (!this.isActive()) {
        this._tooltip = document.createElement('div');
        this._tooltip.classList.add('tooltip');
        this._tooltip.innerText = this.getTitle();
        document.body.appendChild(this._tooltip);

        this._popper = createPopper(this.reference, this._tooltip, {
          placement: this.options.placement,
          strategy: 'absolute',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 5]
              }
            }
          ]
        });
      }

      this._tooltip.classList.add(CLASS_NAMES.VISIBLE);
    }, this.options.delay);
  }

  hide(event) {
    clearTimeout(this._showTimeout);

    if (this.isActive()) {
      this._tooltip.classList.remove(CLASS_NAMES.VISIBLE);

      this._hideTimeout = setTimeout(() => {
        this._popper.destroy();
        document.body.removeChild(this._tooltip);
        this._popper = null;
        this._tooltip = null;
      }, this.options.transition);
    }
  }
}

const tooltip = selector =>
  document.querySelectorAll(selector).forEach(element => new Tooltip(element));

export default tooltip;
