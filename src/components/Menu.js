import React, { Component } from 'react';
import { Link } from 'react-static';

export default class Menu extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.menuIsOpen && !prevProps.menuIsOpen) {
      this.sidebar.scrollTop = 0;
    }
  }

  render() {
    const { toggleMenu } = this.props;
    return (
      <div
        className="framework__sidebar"
        ref={sidebar => (this.sidebar = sidebar)}
      >
        <Link to="/" onClick={toggleMenu} className="framework__logo">
          WL CSS Framework
        </Link>
        <ul className="framework__nav">
          <li className="framework__nav-title">Layout</li>
          <li>
            <Link to="/grid" onClick={toggleMenu}>
              Grid
            </Link>
          </li>
          <li>
            <Link to="/containers" onClick={toggleMenu}>
              Containers
            </Link>
          </li>
          <li>
            <Link to="/sections" onClick={toggleMenu}>
              Sections
            </Link>
          </li>
          <li className="framework__nav-title">Base</li>
          <li>
            <Link to="/colors" onClick={toggleMenu}>
              Colors
            </Link>
          </li>
          <li>
            <Link to="/typography" onClick={toggleMenu}>
              Typography
            </Link>
          </li>
          <li>
            <Link to="/buttons" onClick={toggleMenu}>
              Buttons
            </Link>
          </li>
          <li>
            <Link to="/forms" onClick={toggleMenu}>
              Forms
            </Link>
          </li>
          <li>
            <Link to="/tables" onClick={toggleMenu}>
              Tables
            </Link>
          </li>
          <li className="framework__nav-title">Components</li>
          <li>
            <Link to="/cards" onClick={toggleMenu}>
              Cards
            </Link>
          </li>
          <li>
            <Link to="/carousels" onClick={toggleMenu}>
              Carousels
            </Link>
          </li>
          <li>
            <Link to="/dropdowns" onClick={toggleMenu}>
              Dropdowns
            </Link>
          </li>
          <li>
            <Link to="/modals" onClick={toggleMenu}>
              Modals
            </Link>
          </li>
          <li>
            <Link to="/notices" onClick={toggleMenu}>
              Notices
            </Link>
          </li>
          <li>
            <Link to="/pagination" onClick={toggleMenu}>
              Pagination
            </Link>
          </li>
          <li>
            <Link to="/toggles" onClick={toggleMenu}>
              Toggles
            </Link>
          </li>
          <li>
            <Link to="/tooltips" onClick={toggleMenu}>
              Tooltips
            </Link>
          </li>
          <li className="framework__nav-title">Other</li>
          <li>
            <Link to="/utilities" onClick={toggleMenu}>
              Utilities
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
