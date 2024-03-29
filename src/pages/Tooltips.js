// @flow

import React, { useEffect } from 'react';
import {
  Section,
  Title,
  Description,
  Example,
  ExampleView,
  Code
} from '../components';
import tooltip from '../framework/js/tooltip';

export default () => {
  useEffect(() => {
    tooltip('[data-tooltip]');
  }, []);

  return (
    <Section>
      <Title id="tooltips">Tooltips</Title>
      <Description>
        <p>
          Tooltips can be added to any element with <code>[data-tooltip]</code>.
          The content of a tooltip is defined with the <code>[title]</code>{' '}
          attribute. Tooltip placement can be controlled by adding a value to
          the <code>[data-tooltip]</code> of <em>top</em>, <em>right</em>,{' '}
          <em>bottom</em>, or <em>left</em>. A delay on show can be added with{' '}
          <code>[data-tooltip-delay]</code>.
        </p>
        <p>
          In order to use tooltips you must import the library and call{' '}
          <code>tooltips('[data-tooltip]');</code>
        </p>
      </Description>
      <Example>
        <ExampleView>
          <button
            type="button"
            className="btn"
            data-tooltip="top"
            title="Tooltip top"
          >
            Tooltip top
          </button>
          <button
            type="button"
            className="btn"
            data-tooltip="right"
            title="Tooltip right"
          >
            Tooltip right
          </button>
          <button
            type="button"
            className="btn"
            data-tooltip="bottom"
            title="Tooltip bottom"
          >
            Tooltip bottom
          </button>
          <button
            type="button"
            className="btn"
            data-tooltip="left"
            data-tooltip-delay="500"
            title="Tooltip left with delay"
          >
            Tooltip left with delay
          </button>
        </ExampleView>
        <Code language="html">
          {`<button data-tooltip="top" title="Tooltip top">...</button>
<button data-tooltip="right" title="Tooltip right">...</button>
<button data-tooltip="bottom" title="Tooltip bottom">...</button>
<button data-tooltip="left" data-tooltip-delay="500" title="Tooltip left with delay">...</button>`}
        </Code>
      </Example>
    </Section>
  );
};
