import React from 'react';
import loremIpsum from 'lorem-ipsum';
import { Section, Title, SubTitle, Description, Example } from './Framework';

const Typography = () =>
  <Section id="typography">
    <Title>Typography</Title>
    <SubTitle>Headings</SubTitle>
    <Description>
      Each heading element has a corresponding class, such as <code>.h3</code>,
      that can be used to emulate heading styles.
    </Description>
    <Example>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </Example>
    <SubTitle>Blockquote</SubTitle>
    <Example>
      <blockquote>
        {loremIpsum({ count: 6 })}
      </blockquote>
    </Example>
    <SubTitle>Lists</SubTitle>
    <Example>
      <ul>
        <li>
          {loremIpsum()}
        </li>
        <li>
          {loremIpsum()}
        </li>
        <li>
          {loremIpsum()}
          <ul>
            <li>
              {loremIpsum()}
            </li>
            <li>
              {loremIpsum()}
            </li>
            <li>
              {loremIpsum()}
            </li>
          </ul>
        </li>
      </ul>
      <ol>
        <li>
          {loremIpsum()}
        </li>
        <li>
          {loremIpsum()}
        </li>
        <li>
          {loremIpsum()}
          <ol>
            <li>
              {loremIpsum()}
            </li>
            <li>
              {loremIpsum()}
            </li>
            <li>
              {loremIpsum()}
            </li>
          </ol>
        </li>
      </ol>
    </Example>
    <SubTitle>Horizontal Rule</SubTitle>
    <Example>
      <hr />
    </Example>
    <SubTitle>Preformatted Text</SubTitle>
    <Example>
      <pre>
        {`<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <p>${loremIpsum()}</p>
  </body>
</html>`}
      </pre>
    </Example>
    <SubTitle>Inline Elements</SubTitle>
    <Example>
      <kbd>kbd</kbd> <code>code</code> <samp>samp</samp> <em>em</em>{' '}
      <sup>sup</sup> <sub>sub</sub> <strong>strong</strong> <small>small</small>{' '}
      <abbr title="Abbreviation">abbr</abbr> <ins>ins</ins> <mark>mark</mark>{' '}
      <var>var</var>
    </Example>
  </Section>;

export default Typography;
