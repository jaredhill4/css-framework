import React from 'react';
import classnames from 'classnames';

const Section = ({ children, id = '', container = true }) => {
  const containerClassNames = classnames({
    'container container--md': container,
  });
  return (
    <section id={id} className="framework__section">
      <div className={containerClassNames}>
        {children}
      </div>
    </section>
  );
};

const Title = ({ children, id = '' }) =>
  <h2 id={id} className="h1 framework__title">
    {children}
  </h2>;

const SubTitle = ({ children, id = '' }) =>
  <h3 id={id} className="h3 framework__subtitle">
    {children}
  </h3>;

const Description = ({ children }) =>
  <p className="framework__description">
    {children}
  </p>;

const Example = ({ children }) =>
  <div className="example">
    {children}
  </div>;

export { Section, Title, SubTitle, Description, Example };
