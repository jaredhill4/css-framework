import React, { Component } from 'react';
import { Link } from 'react-static';
import componentMap from '../../componentMap';

const PageLink = ({ item, toggleMenu }) => (
  <li key={item.path}>
    <Link to={item.path} onClick={toggleMenu}>
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
          {componentMap
            .filter(x => x.category === 'layout')
            .map(item => (
              <PageLink key={item.path} item={item} toggleMenu={toggleMenu} />
            ))}
          <li className="framework__nav-title">Base</li>
          {componentMap
            .filter(x => x.category === 'base')
            .map(item => (
              <PageLink key={item.path} item={item} toggleMenu={toggleMenu} />
            ))}
          <li className="framework__nav-title">Components</li>
          {componentMap
            .filter(x => x.category === 'components')
            .map(item => (
              <PageLink key={item.path} item={item} toggleMenu={toggleMenu} />
            ))}
          <li className="framework__nav-title">Other</li>
          {componentMap
            .filter(x => x.category === 'other')
            .map(item => (
              <PageLink key={item.path} item={item} toggleMenu={toggleMenu} />
            ))}
        </ul>
      </div>
    );
  }
}
