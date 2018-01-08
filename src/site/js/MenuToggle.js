import React from 'react';

const MenuToggle = ({ toggleMenu }) =>
  <button className="framework__toggle" onClick={toggleMenu}>
    <div className="framework__toggle-icon">
      <span />
      <span />
      <span />
    </div>
    <span className="framework__toggle-label" />
  </button>;

export default MenuToggle;
