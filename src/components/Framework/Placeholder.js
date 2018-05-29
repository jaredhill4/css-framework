import React from 'react';
import classnames from 'classnames';

const Placeholder = ({ fill, fixed, noMargin }) => (
  <div
    className={classnames(
      'placeholder',
      { 'placeholder--fill-height': fill },
      { 'placeholder--static-height': fixed },
      { 'u--margin-bottom-0': fill || fixed || noMargin }
    )}
  />
);

export default Placeholder;
