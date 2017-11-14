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

const Buttons = () =>
  <Section>
    <Title id="buttons">Buttons</Title>
    <Description>
      Add a <code>.btn</code> class to an anchor tag or button.
    </Description>
    <Example>
      <ExampleView>
        <button type="button" className="btn">
          .btn
        </button>
      </ExampleView>
      <Code language="html">
        {`<button type="button" class="btn">.btn</button>`}
      </Code>
    </Example>
    <SubTitle id="buttons-colors">Colors</SubTitle>
    <Description>
      Different button colors can be created by adding a color modifier class
      like <code>.btn--red</code>.
    </Description>
    <Example>
      <ExampleView>
        <button type="button" className="btn btn--white">
          .btn--white
        </button>
        <button type="button" className="btn btn--black">
          .btn--black
        </button>
        <button type="button" className="btn btn--red">
          .btn--red
        </button>
        <button type="button" className="btn btn--green">
          .btn--green
        </button>
        <button type="button" className="btn btn--blue">
          .btn--blue
        </button>
        <button type="button" className="btn btn--yellow">
          .btn--yellow
        </button>
      </ExampleView>
      <Code language="html">
        {`<button type="button" class="btn btn--white">.btn--white</button>
<button type="button" class="btn btn--black">.btn--black</button>
<button type="button" class="btn btn--red">.btn--red</button>
<button type="button" class="btn btn--green">.btn--green</button>
<button type="button" class="btn btn--blue">.btn--blue</button>
<button type="button" class="btn btn--yellow">.btn--yellow</button>`}
      </Code>
    </Example>
    <SubTitle id="buttons-outlined">Outlined</SubTitle>
    <Description>
      Create buttons stylized with an outline by adding a{' '}
      <code>.btn--outline</code> modifier.
    </Description>
    <Example>
      <ExampleView>
        <button type="button" className="btn btn--outline">
          .btn--outline
        </button>
        <button type="button" className="btn btn--black btn--outline">
          .btn--outline
        </button>
        <button type="button" className="btn btn--red btn--outline">
          .btn--outline
        </button>
        <button type="button" className="btn btn--green btn--outline">
          .btn--outline
        </button>
        <button type="button" className="btn btn--blue btn--outline">
          .btn--outline
        </button>
        <button type="button" className="btn btn--yellow btn--outline">
          .btn--outline
        </button>
      </ExampleView>
      <Code language="html">
        {`<button type="button" class="btn btn--outline">.btn--outline</button>
<button type="button" class="btn btn--black btn--outline">.btn--outline</button>
<button type="button" class="btn btn--red btn--outline">.btn--outline</button>
<button type="button" class="btn btn--green btn--outline">.btn--outline</button>
<button type="button" class="btn btn--blue btn--outline">.btn--outline</button>
<button type="button" class="btn btn--yellow btn--outline">.btn--outline</button>`}
      </Code>
    </Example>
    <SubTitle id="buttons-sizes">Sizes</SubTitle>
    <Example>
      <ExampleView>
        <button type="button" className="btn btn--xs">
          .btn--xs
        </button>
        <button type="button" className="btn btn--sm">
          .btn--sm
        </button>
        <button type="button" className="btn btn--md">
          .btn--md
        </button>
        <button type="button" className="btn btn--lg">
          .btn--lg
        </button>
        <button type="button" className="btn btn--xl">
          .btn--xl
        </button>
      </ExampleView>
      <Code language="html">
        {`<button type="button" class="btn btn--xs">.btn--xs</button>
<button type="button" class="btn btn--sm">.btn--sm</button>
<button type="button" class="btn btn--md">.btn--md</button>
<button type="button" class="btn btn--lg">.btn--lg</button>
<button type="button" class="btn btn--xl">.btn--xl</button>`}
      </Code>
    </Example>
    <SubTitle id="buttons-link">Link</SubTitle>
    <Description>
      Add the <code>.btn--link</code> modifier to a button to disguise the
      button as an anchor tag.
    </Description>
    <Example>
      <ExampleView>
        <button type="button" className="btn btn--link">
          .btn--link
        </button>
      </ExampleView>
      <Code language="html">
        {`<button type="button" class="btn btn--link">.btn--link</button>`}
      </Code>
    </Example>
    <SubTitle id="buttons-rounded">Rounded</SubTitle>
    <Example>
      <ExampleView>
        <button type="button" className="btn btn--round">
          .btn--round
        </button>
      </ExampleView>
      <Code language="html">
        {`<button type="button" class="btn btn--round">.btn--round</button>`}
      </Code>
    </Example>
    <SubTitle id="buttons-block">Block</SubTitle>
    <Example>
      <ExampleView>
        <button type="button" className="btn btn--block">
          .btn--block
        </button>
      </ExampleView>
      <Code language="html">
        {`<button type="button" class="btn btn--block">.btn--block</button>`}
      </Code>
    </Example>
  </Section>;

export default Buttons;
