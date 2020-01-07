// @flow

import React, { type Node } from 'react';

type Props = {
  children: Node
};

const Description = ({ children }: Props) => (
  <div className="framework__description">{children}</div>
);

export default Description;
