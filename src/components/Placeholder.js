// @flow

import React from 'react';
import classnames from 'classnames';

type Props = {
  fill: string,
  fixed: string,
  noMargin: boolean
};

const Placeholder = ({ fill, fixed, noMargin }: Props) => (
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
