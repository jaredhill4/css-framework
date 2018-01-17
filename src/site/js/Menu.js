import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.menuIsOpen && nextProps.menuIsOpen) {
      this.setScrollPosition();
    }
  }

  render() {
    const { toggleMenu } = this.props;
    return (
      <div
        className="framework__sidebar"
        ref={sidebar => (this.sidebar = sidebar)}
      >
        <NavLink to="/" onClick={toggleMenu} className="framework__logo">
          WL CSS Framework
        </NavLink>
        <ul className="framework__nav">
          <li className="framework__nav-title">Layout</li>
          <li>
            <NavLink to="/grid" onClick={toggleMenu}>
              Grid
            </NavLink>
          </li>
          <li>
            <NavLink to="/containers" onClick={toggleMenu}>
              Containers
            </NavLink>
          </li>
          <li>
            <NavLink to="/sections" onClick={toggleMenu}>
              Sections
            </NavLink>
          </li>
          <li className="framework__nav-title">Base</li>
          <li>
            <NavLink to="/colors" onClick={toggleMenu}>
              Colors
            </NavLink>
          </li>
          <li>
            <NavLink to="/typography" onClick={toggleMenu}>
              Typography
            </NavLink>
          </li>
          <li>
            <NavLink to="/buttons" onClick={toggleMenu}>
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink to="/forms" onClick={toggleMenu}>
              Forms
            </NavLink>
          </li>
          <li>
            <NavLink to="/tables" onClick={toggleMenu}>
              Tables
            </NavLink>
          </li>
          <li className="framework__nav-title">Components</li>
          <li>
            <NavLink to="/carousels" onClick={toggleMenu}>
              Carousels
            </NavLink>
          </li>
          <li>
            <NavLink to="/dropdowns" onClick={toggleMenu}>
              Dropdowns
            </NavLink>
          </li>
          <li>
            <NavLink to="/modals" onClick={toggleMenu}>
              Modals
            </NavLink>
          </li>
          <li>
            <NavLink to="/notices" onClick={toggleMenu}>
              Notices
            </NavLink>
          </li>
          <li>
            <NavLink to="/pagination" onClick={toggleMenu}>
              Pagination
            </NavLink>
          </li>
          <li>
            <NavLink to="/toggles" onClick={toggleMenu}>
              Toggles
            </NavLink>
          </li>
          <li>
            <NavLink to="/tooltips" onClick={toggleMenu}>
              Tooltips
            </NavLink>
          </li>
          <li className="framework__nav-title">Other</li>
          <li>
            <NavLink to="/utilities" onClick={toggleMenu}>
              Utilities
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

  setScrollPosition() {
    this.sidebar.scrollTop = 0;
  }
}

export default Menu;
