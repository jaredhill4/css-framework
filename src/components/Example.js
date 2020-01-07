// @flow

import React, { type Node } from 'react';

type Props = {
  children: Node
};

const Example = ({ children }: Props) => (
  <div className="example">{children}</div>
);

export default Example;
