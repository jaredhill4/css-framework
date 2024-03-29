// @flow

import React, { type Node } from 'react';
import classnames from 'classnames';

type Props = {
  children: Node,
  id: string,
  container: boolean
};

const Section = ({ children, id = '', container = true }: Props) => {
  const containerClassNames = classnames({
    'container container--sm': container
  });
  return (
    <section id={id} className="framework__section">
      <div className={containerClassNames}>{children}</div>
    </section>
  );
};

export default Section;
