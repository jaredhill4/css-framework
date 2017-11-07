import React from 'react';

const MenuToggle = ({ toggleMenu }) =>
  <button
    className="framework__menu-toggle"
    onClick={event => toggleMenu(event)}
  >
    <div>
      <span />
      <span />
      <span />
    </div>
  </button>;

export default MenuToggle;
