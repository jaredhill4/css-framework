import React from 'react';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code,
} from './Framework';

const loremIpsum =
  'Est cupidatat mollit qui enim nisi enim elit aute excepteur. Lorem nulla sunt minim nulla irure ut. Ea excepteur laboris aliqua amet commodo reprehenderit excepteur culpa ex sunt.';

const Sections = () =>
  <Section>
    <Title id="sections">Sections</Title>
    <Description>
      <p>
        Wrap page sections in a <code>{`<section>`}</code> tag with the{' '}
        <code>.section</code> class to apply vertical (top and bottom) padding.
        The padding of the section can be adjusted with size modifiers.
        Available modifiers are <code>xs</code>, <code>sm</code>,{' '}
        <code>md</code>, <code>lg</code> and <code>xl</code>. The default
        setting is <code>md</code>.
      </p>
    </Description>
    <Example>
      <ExampleView>
        <section className="section u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray">
          .section
        </section>
        <section className="section section--xs u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray">
          .section--xs
        </section>
        <section className="section section--sm u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray">
          .section--sm
        </section>
        <section className="section section--md u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray">
          .section--md
        </section>
        <section className="section section--lg u--padding-left-15 u--padding-right-15 u--margin-bottom-5 u--background-color-gray">
          .section--lg
        </section>
        <section className="section section--xl u--padding-left-15 u--padding-right-15 u--background-color-gray">
          .section--xl
        </section>
      </ExampleView>
      <Code language="html">
        {`<section class="section">.section</section>
<section class="section section--xs">.section--xs</section>
<section class="section section--sm">.section--sm</section>
<section class="section section--md">.section--md</section>
<section class="section section--lg">.section--lg</section>
<section class="section section--xl">.section--xl</section>`}
      </Code>
    </Example>
  </Section>;

export default Sections;
