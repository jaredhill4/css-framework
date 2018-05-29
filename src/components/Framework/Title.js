import React from 'react';

const Title = ({ children, id = '' }) => (
  <h2 id={id} className="h1 framework__title">
    {children}
  </h2>
);

export default Title;
