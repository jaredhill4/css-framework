import React from 'react';
import classnames from 'classnames';

const Section = ({ children, id, container = true }) => {
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

const Title = ({ children }) =>
  <h2 className="h1">
    {children}
  </h2>;

const SubTitle = ({ children }) =>
  <h3 className="h3" style={{ marginTop: '2rem' }}>
    {children}
  </h3>;

const Description = ({ children }) =>
  <p style={{ maxWidth: '800px' }}>
    {children}
  </p>;

const Example = ({ children }) =>
  <div className="example">
    {children}
  </div>;

export { Section, Title, SubTitle, Description, Example };
