// @flow

import React, { type Node, useEffect } from 'react';

type Props = {
  title: string,
  children: Node
};

export default ({ title, children }: Props) => {
  useEffect(() => {
    document.title = `${title} :: WL CSS Framework`;
    if (document.documentElement) document.documentElement.scrollTop = 0;
  }, [title]);

  return <>{children}</>;
};
