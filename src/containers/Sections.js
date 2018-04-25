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
  <Section>
    <Title id="sections">Sections</Title>
    <Description>
      <p>
        Wrap page sections in a <code>{`<section>`}</code> tag with the{' '}
        <code>.section</code> class to apply vertical (top and bottom)
        padding. The padding of the section can be adjusted with size
        modifiers. Available modifiers are <code>xs</code>, <code>sm</code>,{' '}
        <code>md</code>, <code>lg</code> and <code>xl</code>. The default
        setting is <code>md</code>.
      </p>
    </Description>
    <Example>
      <ExampleView>
        <section className="section u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray-lighter">
          Default
        </section>
        <section className="section section--xs u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray-lighter">
          Extra small
        </section>
        <section className="section section--sm u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray-lighter">
          Small
        </section>
        <section className="section section--md u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray-lighter">
          Medium (default)
        </section>
        <section className="section section--lg u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray-lighter">
          Large
        </section>
        <section className="section section--xl u--padding-left-15 u--padding-right-15 u--background-color-gray-lighter">
          Extra large
        </section>
      </ExampleView>
      <Code language="html">
        {`<section class="section">...</section>
<section class="section section--xs">...</section>
<section class="section section--sm">...</section>
<section class="section section--md">...</section>
<section class="section section--lg">...</section>
<section class="section section--xl">...</section>`}
      </Code>
    </Example>
  </Section>
);
