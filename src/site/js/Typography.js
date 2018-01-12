import React, { Component } from 'react';
import lorem from './lorem';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code,
} from './Framework';

class Typography extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Section>
        <Title id="typography">Typography</Title>
        <SubTitle id="typography-headings">Headings</SubTitle>
        <Description>
          Each heading element has a corresponding class, such as{' '}
          <code>.h3</code>, that can be used to emulate heading styles.
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
            {`<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>`}
          </Code>
        </Example>
        <SubTitle id="typography-paragraphs">Paragraphs</SubTitle>
        <Example>
          <ExampleView>
            <p>
              {lorem(9)}
            </p>
          </ExampleView>
          <Code language="html">
            {`<p>...</p>`}
          </Code>
        </Example>
        <Description>
          Add the <code>.p--lead</code> class to a paragraph to apply the lead
          paragraph styles.
        </Description>
        <Example>
          <ExampleView>
            <p className="p--lead">
              {lorem(6)}
            </p>
            <p>
              {lorem(12)}
            </p>
          </ExampleView>
          <Code language="html">
            {`<p class="p--lead">...</p>
<p>...</p>`}
          </Code>
        </Example>
        <SubTitle id="typography-blockquotes">Blockquotes</SubTitle>
        <Example>
          <ExampleView>
            <blockquote>
              {lorem(66)}
              <footer>
                <cite>&mdash; Some Person</cite>
              </footer>
            </blockquote>
          </ExampleView>
          <Code language="html">
            {`<blockquote>
    ...
    <footer>
        <cite>&mdash; ...</cite>
    </footer>
</blockquote>`}
          </Code>
        </Example>
        <SubTitle id="typography-lists">Lists</SubTitle>
        <Example>
          <ExampleView>
            <ul>
              <li>
                {lorem(3)}
              </li>
              <li>
                {lorem(27)}
                <ol>
                  <li>
                    {lorem(37)}
                  </li>
                  <li>
                    {lorem(17)}
                  </li>
                </ol>
              </li>
            </ul>
            <ol>
              <li>
                {lorem(32)}
              </li>
              <li>
                {lorem(72)}
                <ul>
                  <li>
                    {lorem(86)}
                  </li>
                </ul>
              </li>
            </ol>
          </ExampleView>
          <Code language="html">
            {`<ul>
    <li>...</li>
    <li>...
      <ol>
          <li>...</li>
          <li>...</li>
      </ol>
    </li>
</ul>
<ol>
    <li>...</li>
    <li>...
        <ul>
            <li>...</li>
        </ul>
  </li>
</ol>`}
          </Code>
        </Example>
        <SubTitle id="typography-horizontal-rules">Horizontal Rules</SubTitle>
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
    <title>...</title>
  </head>
  <body>
    <p>...</p>
  </body>
</html>`}
            </pre>
          </ExampleView>
          <Code language="html">
            {`<pre>
    <!DOCTYPE html>
    <html>
        <head>
            <title>...</title>
        </head>
        <body>
            <p>...</p>
        </body>
    </html>
</pre>`}
          </Code>
        </Example>
        <SubTitle id="typography-inline-elements">Inline Elements</SubTitle>
        <Example>
          <ExampleView>
            <kbd>kbd</kbd> <code>code</code> <samp>samp</samp> <cite>cite</cite>{' '}
            <em>em</em> <sup>sup</sup> <sub>sub</sub> <strong>strong</strong>{' '}
            <small>small</small> <abbr title="Abbreviation">abbr</abbr>{' '}
            <ins>ins</ins> <mark>mark</mark> <var>var</var>
          </ExampleView>
          <Code language="html">
            {`<kbd>...</kbd>
<code>...</code>
<samp>...</samp>
<cite>...</cite>
<em>...</em>
<sup>...</sup>
<sub>...</sub>
<strong>...</strong>
<small>...</small>
<abbr title="...">...</abbr>
<ins>...</ins>
<mark>...</mark>
<var>...</var>`}
          </Code>
        </Example>
      </Section>
    );
  }
}

export default Typography;
