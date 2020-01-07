// @flow

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import routes from '../config/routes';
import { RouteItemType } from '../types';

type Props = {
  menuIsOpen: boolean,
  toggleMenu: Function
};
type PageLinkProps = {
  item: RouteItemType,
  tabIndex: string,
  toggleMenu: Function
};

const PageLink = ({ item, tabIndex, toggleMenu }: PageLinkProps) => (
  <li key={item.path}>
    <Link to={item.path} onClick={toggleMenu} tabIndex={tabIndex}>
      {item.name}
    </Link>
  </li>
);

const Menu = ({ menuIsOpen, toggleMenu }: Props) => {
  const tabIndex = menuIsOpen ? '0' : '-1';
  const sidebar: Object = useRef(null);

  useEffect(() => {
    if (menuIsOpen && sidebar) sidebar.current.scrollTop = 0;
  }, [menuIsOpen]);

  return (
    <nav className="framework__sidebar" ref={sidebar}>
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
        {routes
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
        {routes
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
        {routes
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
        {routes
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
};

export default Menu;
