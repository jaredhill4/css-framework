import React from 'react';
import {
  Section,
  Title,
  Description,
  Example,
  ExampleView,
  Code,
} from '../components/Framework';

export default () => (
  <Section container={false}>
    <div className="container container--sm">
      <Title id="containers">Containers</Title>
      <Description>
        Wrap content in a <code>.container</code> class to center it and give it
        a maximum width. Width of the container can be adjusted with size
        modifiers. Available modifiers are <code>xs</code>, <code>sm</code>,{' '}
        <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>full</code>.{' '}
        <em>
          The default setting is <code>lg</code>.
        </em>
      </Description>
    </div>
    <div className="container container--full">
      <Example>
        <ExampleView>
          <div className="container u--padding-left-0 u--padding-right-0">
            <div className="example__container" />
          </div>
          <div className="container container--xs u--padding-left-0 u--padding-right-0">
            <div className="example__container" />
          </div>
          <div className="container container--sm u--padding-left-0 u--padding-right-0">
            <div className="example__container" />
          </div>
          <div className="container container--md u--padding-left-0 u--padding-right-0">
            <div className="example__container" />
          </div>
          <div className="container container--lg u--padding-left-0 u--padding-right-0">
            <div className="example__container" />
          </div>
          <div className="container container--xl u--padding-left-0 u--padding-right-0">
            <div className="example__container" />
          </div>
          <div className="container container--full u--padding-left-0 u--padding-right-0">
            <div className="example__container" />
          </div>
        </ExampleView>
        <Code language="html">
          {`<div class="container">...</div>
<div class="container container--xs">...</div>
<div class="container container--sm">...</div>
<div class="container container--md">...</div>
<div class="container container--lg">...</div>
<div class="container container--xl">...</div>
<div class="container container--full">...</div>`}
        </Code>
      </Example>
    </div>
  </Section>
);
