import React, { Component } from 'react';
import { Link } from 'react-static';
import componentMap from '../../componentMap';

const PageLink = ({ item, tabIndex, toggleMenu }) => (
  <li key={item.path}>
    <Link to={item.path} onClick={toggleMenu} tabIndex={tabIndex}>
      {item.name}
    </Link>
  </li>
);

export default class Menu extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.menuIsOpen && !prevProps.menuIsOpen) {
      this.sidebar.scrollTop = 0;
    }
  }

  render() {
    const { menuIsOpen, toggleMenu } = this.props;
    const tabIndex = menuIsOpen ? '0' : '-1';
    return (
      <nav
        className="framework__sidebar"
        ref={sidebar => (this.sidebar = sidebar)}
      >
        <Link
          to="/"
          onClick={toggleMenu}
          className="framework__logo"
          tabIndex={tabIndex}
        >
          WL CSS Framework
        </Link>
        <ul className="framework__nav">
          <li className="framework__nav-title">Layout</li>
          {componentMap
            .filter(x => x.category === 'layout')
            .map(item => (
              <PageLink
                key={item.path}
                item={item}
                toggleMenu={toggleMenu}
                tabIndex={tabIndex}
              />
            ))}
          <li className="framework__nav-title">Base</li>
          {componentMap
            .filter(x => x.category === 'base')
            .map(item => (
              <PageLink
                key={item.path}
                item={item}
                toggleMenu={toggleMenu}
                tabIndex={tabIndex}
              />
            ))}
          <li className="framework__nav-title">Components</li>
          {componentMap
            .filter(x => x.category === 'components')
            .map(item => (
              <PageLink
                key={item.path}
                item={item}
                toggleMenu={toggleMenu}
                tabIndex={tabIndex}
              />
            ))}
          <li className="framework__nav-title">Other</li>
          {componentMap
            .filter(x => x.category === 'other')
            .map(item => (
              <PageLink
                key={item.path}
                item={item}
                toggleMenu={toggleMenu}
                tabIndex={tabIndex}
              />
            ))}
        </ul>
      </nav>
    );
  }
}
