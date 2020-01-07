// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Section, SubTitle } from '../components';
import routes from '../config/routes';
import { RouteItemType } from '../types';

type PageLinkProps = {
  item: RouteItemType
};

const PageLink = ({ item }: PageLinkProps) => (
  <div className="grid__col-xs-6 grid__col-sm-4 grid__col-md-3">
    <Link to={item.path}>
      <div className="card u--text-align-center">
        <section className="card__body">
          <h4>{item.name}</h4>
        </section>
      </div>
    </Link>
  </div>
);

export default () => (
  <Section>
    <div className="u--squash">
      <SubTitle>Layout</SubTitle>
      <div className="grid grid--gutter">
        {routes
          .filter(x => x.category === 'layout')
          .map(item => (
            <PageLink key={item.path} item={item} />
          ))}
      </div>

      <SubTitle>Base</SubTitle>
      <div className="grid grid--gutter">
        {routes
          .filter(x => x.category === 'base')
          .map(item => (
            <PageLink key={item.path} item={item} />
          ))}
      </div>

      <SubTitle>Components</SubTitle>
      <div className="grid grid--gutter">
        {routes
          .filter(x => x.category === 'components')
          .map(item => (
            <PageLink key={item.path} item={item} />
          ))}
      </div>

      <SubTitle>Other</SubTitle>
      <div className="grid grid--gutter">
        {routes
          .filter(x => x.category === 'other')
          .map(item => (
            <PageLink key={item.path} item={item} />
          ))}
      </div>
    </div>
  </Section>
);
