// @flow

import React, { type Node } from 'react';

type Props = {
  children: Node,
  id: string
};

const Title = ({ children, id = '' }: Props) => (
  <h2 id={id} className="h1 framework__title">
    {children}
  </h2>
);

export default Title;
