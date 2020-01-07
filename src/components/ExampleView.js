// @flow

import React, { type Node } from 'react';

type Props = {
  children: Node
};

const ExampleView = ({ children }: Props) => (
  <div className="example__view">{children}</div>
);

export default ExampleView;
