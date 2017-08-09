import React from 'react';

const Component = ({ children, id }) =>
  <div id={id} className="container container--lg">
    {children}
  </div>;

export default Component;
