import React from 'react';
import { Link } from 'react-static';
import lorem from '../util/lorem';
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
        <p>{lorem(9)}</p>
      </ExampleView>
      <Code language="html">{`<p>...</p>`}</Code>
    </Example>
    <Description>
      Add the <code>.p--lead</code> class to a paragraph to apply the lead
      paragraph styles.
    </Description>
    <Example>
      <ExampleView>
        <p className="p--lead">{lorem(6)}</p>
        <p>{lorem(12)}</p>
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
          <cite>Some Person</cite>
        </blockquote>
      </ExampleView>
      <Code language="html">
        {`<blockquote>
    ...
    <cite>...</cite>
</blockquote>`}
      </Code>
    </Example>
    <SubTitle id="typography-unordered-lists">Unordered Lists</SubTitle>
    <Example>
      <ExampleView>
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>
            List item
            <ul>
              <li>Nested list item</li>
              <li>Nested list item</li>
              <li>Nested list item</li>
            </ul>
          </li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </ExampleView>
      <Code language="html">
        {`<ul>
    <li>...</li>
    <li>...</li>
    <li>...
        <ul>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </li>
    <li>...</li>
    <li>...</li>
</ul>`}
      </Code>
    </Example>
    <SubTitle id="typography-ordered-lists">Ordered Lists</SubTitle>
    <Example>
      <ExampleView>
        <ol>
          <li>List item</li>
          <li>List item</li>
          <li>
            List item
            <ol>
              <li>Nested list item</li>
              <li>Nested list item</li>
              <li>Nested list item</li>
            </ol>
          </li>
          <li>List item</li>
          <li>List item</li>
        </ol>
      </ExampleView>
      <Code language="html">
        {`<ol>
    <li>...</li>
    <li>...</li>
    <li>...
        <ol>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </ol>
    </li>
    <li>...</li>
    <li>...</li>
</ol>`}
      </Code>
    </Example>
    <SubTitle id="typography-definition-lists">Definition Lists</SubTitle>
    <Example>
      <ExampleView>
        <dl>
          <dt>Term to define</dt>
          <dd>{lorem(23)}</dd>

          <dt>Term to define</dt>
          <dd>{lorem(57)}</dd>

          <dt>Term to define</dt>
          <dd>{lorem(66)}</dd>
        </dl>
      </ExampleView>
      <Code language="html">
        {`<dl>
    <dt>...</dt>
    <dd>...</dd>

    <dt>...</dt>
    <dd>...</dd>

    <dt>...</dt>
    <dd>...</dd>
</dl>`}
      </Code>
    </Example>
    <SubTitle id="typography-horizontal-rules">Horizontal Rules</SubTitle>
    <Example>
      <ExampleView>
        <hr />
      </ExampleView>
      <Code language="html">{`<hr />`}</Code>
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
    <SubTitle id="typography-links">Links</SubTitle>
    <Example>
      <ExampleView>
        <Link to="typography">Default</Link>
      </ExampleView>
      <Code language="html">{`<a href="#">...</a>`}</Code>
    </Example>
    <Description>
      Link color can be modified by adding a color modifier class like{' '}
      <code>.link--red</code>.
    </Description>
    <Example>
      <ExampleView>
        <Link
          to="/typography"
          className="link--white u--display-inline-block u--padding-5 u--padding-left-10 u--padding-right-10 u--background-color-black"
        >
          White
        </Link>
        {` `}
        <Link
          to="/typography"
          className="link--black u--display-inline-block u--padding-5"
        >
          Black
        </Link>
        <Link
          to="/typography"
          className="link--blue u--display-inline-block u--padding-5"
        >
          Blue
        </Link>
        <Link
          to="/typography"
          className="link--green u--display-inline-block u--padding-5"
        >
          Green
        </Link>
        <Link
          to="/typography"
          className="link--yellow u--display-inline-block u--padding-5"
        >
          Yellow
        </Link>
        <Link
          to="/typography"
          className="link--red u--display-inline-block u--padding-5"
        >
          Red
        </Link>
        <br />
        <Link
          to="/typography"
          className="link--gray-darkest u--display-inline-block u--padding-5"
        >
          Gray Darkest
        </Link>
        <Link
          to="/typography"
          className="link--gray-darker u--display-inline-block u--padding-5"
        >
          Gray Darker
        </Link>
        <Link
          to="/typography"
          className="link--gray-dark u--display-inline-block u--padding-5"
        >
          Gray Dark
        </Link>
        <Link
          to="/typography"
          className="link--gray u--display-inline-block u--padding-5"
        >
          Gray
        </Link>
        <Link
          to="/typography"
          className="link--gray-light u--display-inline-block u--padding-5"
        >
          Gray Light
        </Link>
        <Link
          to="/typography"
          className="link--gray-lighter u--display-inline-block u--padding-5"
        >
          Gray Lighter
        </Link>
        <Link
          to="/typography"
          className="link--gray-lightest u--display-inline-block u--padding-5"
        >
          Gray Lightest
        </Link>
      </ExampleView>
      <Code language="html">
        {`<a href="#" class="link--white">...</a>
<a href="#" class="link--black">...</a>
<a href="#" class="link--red">...</a>
<a href="#" class="link--green">...</a>
<a href="#" class="link--blue">...</a>
<a href="#" class="link--yellow">...</a>
<a href="#" class="link--gray-darkest">...</a>
<a href="#" class="link--gray-darker">...</a>
<a href="#" class="link--gray-dark">...</a>
<a href="#" class="link--gray">...</a>
<a href="#" class="link--gray-light">...</a>
<a href="#" class="link--gray-lighter">...</a>
<a href="#" class="link--gray-lightest">...</a>`}
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
