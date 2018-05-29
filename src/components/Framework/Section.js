import React from 'react';
import classnames from 'classnames';

const Section = ({ children, id = '', container = true }) => {
  const containerClassNames = classnames({
    'container container--sm': container,
  });
  return (
    <section id={id} className="framework__section">
      <div className={containerClassNames}>{children}</div>
    </section>
  );
};

export default Section;
