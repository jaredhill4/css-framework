import React from 'react';

const MenuToggle = ({ toggleMobileMenu }) =>
  <button
    className="framework__menu-toggle"
    onClick={event => toggleMobileMenu(event)}
  >
    <div>
      <span />
      <span />
      <span />
    </div>
  </button>;

export default MenuToggle;
