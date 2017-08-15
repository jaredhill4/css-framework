import React from 'react';
import { Section, Title, SubTitle, Description, Example } from './Framework';

const Buttons = () =>
  <Section id="buttons">
    <Title>Buttons</Title>
    <Description>
      Add a <code>.btn</code> class to an anchor tag or button.
    </Description>
    <Example>
      <button type="button" className="btn">
        .btn
      </button>
    </Example>
    <SubTitle>Colors</SubTitle>
    <Description>
      Different button colors can be created by adding a color modifier class
      like <code>.btn--red</code>.
    </Description>
    <Example>
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
    </Example>
    <SubTitle>Outlined</SubTitle>
    <Description>
      Create buttons stylized with an outline by adding a{' '}
      <code>.btn--outline</code> modifier.
    </Description>
    <Example>
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
    </Example>
    <SubTitle>Sizes</SubTitle>
    <Example>
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
    </Example>
    <SubTitle>Link</SubTitle>
    <Description>
      Add the <code>.btn--link</code> modifier to a button to disguise the
      button as an anchor tag.
    </Description>
    <Example>
      <button type="button" className="btn btn--link">
        .btn--link
      </button>
    </Example>
    <SubTitle>Rounded</SubTitle>
    <Example>
      <button type="button" className="btn btn--round">
        .btn--round
      </button>
    </Example>
    <SubTitle>Block</SubTitle>
    <Example>
      <button type="button" className="btn btn--block">
        .btn--block
      </button>
    </Example>
  </Section>;

export default Buttons;