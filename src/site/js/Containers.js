import React from 'react';
import {
  Section,
  Title,
  Description,
  Example,
  ExampleView,
  Code,
} from './Framework';

const Containers = () =>
  <Section container={false}>
    <div className="container container--md">
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
          <div className="container">
            <div className="example__container">.container</div>
          </div>
          <div className="container container--xs">
            <div className="example__container">.container--xs</div>
          </div>
          <div className="container container--sm">
            <div className="example__container">.container--sm</div>
          </div>
          <div className="container container--md">
            <div className="example__container">.container--md</div>
          </div>
          <div className="container container--lg">
            <div className="example__container">.container--lg</div>
          </div>
          <div className="container container--xl">
            <div className="example__container">.container--xl</div>
          </div>
          <div className="container container--full">
            <div className="example__container">.container--full</div>
          </div>
        </ExampleView>
        <Code language="html">
          {`<div class="container">.container</div>
<div class="container container--xs">.container--xs</div>
<div class="container container--sm">.container--sm</div>
<div class="container container--md">.container--md</div>
<div class="container container--lg">.container--lg</div>
<div class="container container--xl">.container--xl</div>
<div class="container container--full">.container--full</div>`}
        </Code>
      </Example>
    </div>
  </Section>;

export default Containers;
