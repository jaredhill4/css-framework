import React from 'react';

const SubTitle = ({ children, id = '' }) => (
  <h3 id={id} className="h3 framework__subtitle">
    {children}
  </h3>
);

export default SubTitle;
