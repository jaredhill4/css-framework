// @flow

import React, { type Node } from 'react';

type Props = {
  children: Node,
  id: string
};

const SubTitle = ({ children, id = '' }: Props) => (
  <h3 id={id} className="h3 framework__subtitle">
    {children}
  </h3>
);

export default SubTitle;
