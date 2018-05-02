import React from 'react';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code,
} from '../components/Framework';

export default () => (
  <Section>
    <Title id="buttons">Buttons</Title>
    <Description>
      Add a <code>.btn</code> class to an anchor tag or button.
    </Description>
    <Example>
      <ExampleView>
        <button type="button" className="btn">
          Default
        </button>
      </ExampleView>
      <Code language="html">{`<button class="btn">...</button>`}</Code>
    </Example>
    <SubTitle id="buttons-colors">Colors</SubTitle>
    <Description>
      Different button colors can be created by adding a color modifier class
      like <code>.btn--red</code>.
    </Description>
    <Example>
      <ExampleView>
        <button type="button" className="btn">
          Default
        </button>
        <button type="button" className="btn btn--primary">
          Primary
        </button>
        <button type="button" className="btn btn--red">
          Red
        </button>
        <button type="button" className="btn btn--green">
          Green
        </button>
        <button type="button" className="btn btn--blue">
          Blue
        </button>
        <button type="button" className="btn btn--yellow">
          Yellow
        </button>
        <button type="button" className="btn btn--black">
          Black
        </button>
      </ExampleView>
      <Code language="html">
        {`<button class="btn btn--default">...</button>
<button class="btn btn--primary">...</button>
<button class="btn btn--red">...</button>
<button class="btn btn--green">...</button>
<button class="btn btn--blue">...</button>
<button class="btn btn--yellow">...</button>
<button class="btn btn--black">...</button>`}
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
          Default
        </button>
        <button type="button" className="btn btn--primary btn--outline">
          Primary
        </button>
        <button type="button" className="btn btn--red btn--outline">
          Red
        </button>
        <button type="button" className="btn btn--green btn--outline">
          Green
        </button>
        <button type="button" className="btn btn--blue btn--outline">
          Blue
        </button>
        <button type="button" className="btn btn--yellow btn--outline">
          Yellow
        </button>
        <button type="button" className="btn btn--black btn--outline">
          Black
        </button>
      </ExampleView>
      <Code language="html">
        {`<button class="btn btn--outline">...</button>
<button class="btn btn--primary btn--outline">...</button>
<button class="btn btn--red btn--outline">...</button>
<button class="btn btn--green btn--outline">...</button>
<button class="btn btn--blue btn--outline">...</button>
<button class="btn btn--yellow btn--outline">...</button>
<button class="btn btn--black btn--outline">...</button>`}
      </Code>
    </Example>
    <SubTitle id="buttons-sizes">Sizes</SubTitle>
    <Example>
      <ExampleView>
        <button type="button" className="btn btn--xs">
          Extra small
        </button>
        <button type="button" className="btn btn--sm">
          Small
        </button>
        <button type="button" className="btn btn--md">
          Medium (default)
        </button>
        <button type="button" className="btn btn--lg">
          Large
        </button>
        <button type="button" className="btn btn--xl">
          Extra large
        </button>
      </ExampleView>
      <Code language="html">
        {`<button class="btn btn--xs">...</button>
<button class="btn btn--sm">...</button>
<button class="btn btn--md">...</button>
<button class="btn btn--lg">...</button>
<button class="btn btn--xl">...</button>`}
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
          Link
        </button>
      </ExampleView>
      <Code language="html">
        {`<button class="btn btn--link">...</button>`}
      </Code>
    </Example>
    <SubTitle id="buttons-round">Round</SubTitle>
    <Example>
      <ExampleView>
        <button type="button" className="btn btn--round">
          Round
        </button>
      </ExampleView>
      <Code language="html">
        {`<button class="btn btn--round">...</button>`}
      </Code>
    </Example>
    <SubTitle id="buttons-block">Block</SubTitle>
    <Example>
      <ExampleView>
        <button type="button" className="btn btn--block">
          Block
        </button>
      </ExampleView>
      <Code language="html">
        {`<button class="btn btn--block">...</button>`}
      </Code>
    </Example>
  </Section>
);
