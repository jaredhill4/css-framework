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

const Typography = () =>
  <Section>
    <Title id="typography">Typography</Title>
    <SubTitle id="typography-headings">Headings</SubTitle>
    <Description>
      Each heading element has a corresponding class, such as <code>.h3</code>,
      that can be used to emulate heading styles.
    </Description>
    <Example>
      <ExampleView>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </ExampleView>
      <Code language="html">
        {`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
      </Code>
    </Example>
    <SubTitle id="typography-blockquote">Blockquote</SubTitle>
    <Example>
      <ExampleView>
        <blockquote>
          {loremIpsum}
        </blockquote>
      </ExampleView>
      <Code language="html">
        {`<blockquote>${loremIpsum}</blockquote>`}
      </Code>
    </Example>
    <SubTitle id="typography-lists">Lists</SubTitle>
    <Example>
      <ExampleView>
        <ul>
          <li>
            {loremIpsum}
          </li>
          <li>
            {loremIpsum}
          </li>
          <li>
            {loremIpsum}
            <ul>
              <li>
                {loremIpsum}
              </li>
              <li>
                {loremIpsum}
              </li>
              <li>
                {loremIpsum}
              </li>
            </ul>
          </li>
        </ul>
        <ol>
          <li>
            {loremIpsum}
          </li>
          <li>
            {loremIpsum}
          </li>
          <li>
            {loremIpsum}
            <ol>
              <li>
                {loremIpsum}
              </li>
              <li>
                {loremIpsum}
              </li>
              <li>
                {loremIpsum}
              </li>
            </ol>
          </li>
        </ol>
      </ExampleView>
      <Code language="html">
        {`<ul>
        <li>
            ${loremIpsum}
        </li>
        <li>
            ${loremIpsum}
        </li>
        <li>
            ${loremIpsum}
          <ul>
              <li>
                  ${loremIpsum}
              </li>
              <li>
                  ${loremIpsum}
              </li>
              <li>
                  ${loremIpsum}
              </li>
          </ul>
        </li>
    </ul>
    <ol>
        <li>
            ${loremIpsum}
        </li>
        <li>
            ${loremIpsum}
        </li>
        <li>
            ${loremIpsum}
            <ol>
                <li>
                    ${loremIpsum}
                </li>
                <li>
                    ${loremIpsum}
                </li>
                <li>
                    ${loremIpsum}
                </li>
            </ol>
      </li>
</ol>`}
      </Code>
    </Example>
    <SubTitle id="typography-horizontal-rule">Horizontal Rule</SubTitle>
    <Example>
      <ExampleView>
        <hr />
      </ExampleView>
      <Code language="html">
        {`<hr />`}
      </Code>
    </Example>
    <SubTitle id="typography-preformatted-text">Preformatted Text</SubTitle>
    <Example>
      <ExampleView>
        <pre>
          {`<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <p>${loremIpsum}</p>
  </body>
</html>`}
        </pre>
      </ExampleView>
      <Code language="html">
        {`<pre>
    <!DOCTYPE html>
    <html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <p>${loremIpsum}</p>
        </body>
    </html>
</pre>`}
      </Code>
    </Example>
    <SubTitle id="typography-inline-elements">Inline Elements</SubTitle>
    <Example>
      <ExampleView>
        <kbd>kbd</kbd> <code>code</code> <samp>samp</samp> <em>em</em>{' '}
        <sup>sup</sup> <sub>sub</sub> <strong>strong</strong>{' '}
        <small>small</small> <abbr title="Abbreviation">abbr</abbr>{' '}
        <ins>ins</ins> <mark>mark</mark> <var>var</var>
      </ExampleView>
      <Code language="html">
        {`<kbd>kbd</kbd> <code>code</code> <samp>samp</samp> <em>em</em> <sup>sup</sup> <sub>sub</sub> <strong>strong</strong> <small>small</small> <abbr title="Abbreviation">abbr</abbr> <ins>ins</ins> <mark>mark</mark> <var>var</var>`}
      </Code>
    </Example>
  </Section>;

export default Typography;
