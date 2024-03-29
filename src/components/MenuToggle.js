// @flow

import React from 'react';

type Props = {
  menuIsOpen: boolean,
  toggleMenu: Function
};

const MenuToggle = ({ menuIsOpen, toggleMenu }: Props) => (
  <button
    className="framework__toggle"
    onClick={toggleMenu}
    aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
  >
    <div className="framework__toggle-icon">
      <span />
      <span />
      <span />
    </div>
    <span className="framework__toggle-label" />
  </button>
);

export default MenuToggle;
