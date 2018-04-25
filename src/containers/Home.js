import React from 'react';
import { Link } from 'react-static';
import { Section, SubTitle } from '../components/Framework';

const layout = [
  {
    name: 'Grid',
    route: '/grid',
  },
  {
    name: 'Containers',
    route: '/containers',
  },
  {
    name: 'Sections',
    route: '/sections',
  },
];

const base = [
  {
    name: 'Colors',
    route: '/colors',
  },
  {
    name: 'Typography',
    route: '/typography',
  },
  {
    name: 'Buttons',
    route: '/buttons',
  },
  {
    name: 'Forms',
    route: '/forms',
  },
  {
    name: 'Tables',
    route: '/tables',
  },
];

const components = [
  {
    name: 'Cards',
    route: '/cards',
  },
  {
    name: 'Carousels',
    route: '/carousels',
  },
  {
    name: 'Dropdowns',
    route: '/dropdowns',
  },
  {
    name: 'Modals',
    route: '/modals',
  },
  {
    name: 'Notices',
    route: '/notices',
  },
  {
    name: 'Pagination',
    route: '/pagination',
  },
  {
    name: 'Toggles',
    route: '/toggles',
  },
  {
    name: 'Tooltips',
    route: '/tooltips',
  },
];

const other = [
  {
    name: 'Utilities',
    route: '/utilities',
  },
];

const PageLink = ({ item }) => (
  <div className="grid__col-xs-6 grid__col-sm-4 grid__col-md-3">
    <Link to={item.route}>
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
      <div className="grid">
        {layout.map(item => <PageLink key={item.route} item={item} />)}
      </div>
      <SubTitle>Base</SubTitle>
      <div className="grid">
        {base.map(item => <PageLink key={item.route} item={item} />)}
      </div>
      <SubTitle>Components</SubTitle>
      <div className="grid">
        {components.map(item => <PageLink key={item.route} item={item} />)}
      </div>
      <SubTitle>Other</SubTitle>
      <div className="grid">
        {other.map(item => <PageLink key={item.route} item={item} />)}
      </div>
    </div>
  </Section>
);
