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

const Utilities = () =>
  <Section>
    <Title id="utilities">Utilities</Title>
    <SubTitle id="utilities-text-color">Text Color</SubTitle>
    <Description>
      Modify text color using the <code>.u--color-</code> utility classes.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-inline-block u--padding-5 u--padding-left-10 u--padding-right-10 u--background-color-black u--color-white">
          .u--color-white
        </span>
        <span className="u--display-inline-block u--padding-5 u--color-black">
          .u--color-black
        </span>
        <span className="u--display-inline-block u--padding-5 u--color-red">
          .u--color-red
        </span>
        <span className="u--display-inline-block u--padding-5 u--color-green">
          .u--color-green
        </span>
        <span className="u--display-inline-block u--padding-5 u--color-blue">
          .u--color-blue
        </span>
        <span className="u--display-inline-block u--padding-5 u--color-yellow">
          .u--color-yellow
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--color-white">.u--color-white</span>
<span class="u--color-black">.u--color-black</span>
<span class="u--color-red">.u--color-red</span>
<span class="u--color-green">.u--color-green</span>
<span class="u--color-blue">.u--color-blue</span>
<span class="u--color-yellow">.u--color-yellow</span>`}
      </Code>
    </Example>
    <Description>
      Modify link colors by adding a <code>.u--color-</code> utility class to an{' '}
      <code>a</code> tag.
    </Description>
    <Example>
      <ExampleView>
        <a
          href="#hello"
          className="u--display-inline-block u--padding-5 u--padding-left-10 u--padding-right-10 u--background-color-black u--color-white"
        >
          .u--color-white
        </a>
        <a
          href="#hello"
          className="u--display-inline-block u--padding-5 u--color-black"
        >
          .u--color-black
        </a>
        <a
          href="#hello"
          className="u--display-inline-block u--padding-5 u--color-red"
        >
          .u--color-red
        </a>
        <a
          href="#hello"
          className="u--display-inline-block u--padding-5 u--color-green"
        >
          .u--color-green
        </a>
        <a
          href="#hello"
          className="u--display-inline-block u--padding-5 u--color-blue"
        >
          .u--color-blue
        </a>
        <a
          href="#hello"
          className="u--display-inline-block u--padding-5 u--color-yellow"
        >
          .u--color-yellow
        </a>
      </ExampleView>
      <Code language="html">
        {`<a href="#hello" class="u--color-white">.u--color-white</a>
<a href="#hello" class="u--color-black">.u--color-black</a>
<a href="#hello" class="u--color-red">.u--color-red</a>
<a href="#hello" class="u--color-green">.u--color-green</a>
<a href="#hello" class="u--color-blue">.u--color-blue</a>
<a href="#hello" class="u--color-yellow">.u--color-yellow</a>`}
      </Code>
    </Example>

    <SubTitle id="utilities-background-color">Background Color</SubTitle>
    <Description>
      Modify the background color of an element using the{' '}
      <code>.u--background-color-</code> utility classes.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-white">
          .u--background-color-white
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-gray">
          .u--background-color-gray
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--color-white u--background-color-black">
          .u--background-color-black
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--color-white u--background-color-red">
          .u--background-color-red
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--color-white u--background-color-yellow">
          .u--background-color-yellow
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--color-white u--background-color-green">
          .u--background-color-green
        </span>
        <span className="u--display-block u--padding-20 u--color-white u--background-color-blue">
          .u--background-color-blue
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--background-color-white">.u--background-color-white</span>
<span class="u--background-color-gray">.u--background-color-gray</span>
<span class="u--background-color-black">.u--background-color-black</span>
<span class="u--background-color-red">.u--background-color-red</span>
<span class="u--background-color-yellow">.u--background-color-yellow</span>
<span class="u--background-color-green">.u--background-color-green</span>
<span class="u--background-color-blue">.u--background-color-blue</span>`}
      </Code>
    </Example>

    <SubTitle id="utilities-borders">Borders</SubTitle>
    <Description>
      Add a border to an element with the <code>.u--border</code> utility class.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-20 u--border">
          .u--border
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--border">.u--border</span>`}
      </Code>
    </Example>
    <Description>
      Modify the border color of an element with the{' '}
      <code>.u--border-color-</code> utility classes.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-color-white">
          .u--border-color-white
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-color-gray">
          .u--border-color-gray
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-color-black">
          .u--border-color-black
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-color-red">
          .u--border-color-red
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-color-yellow">
          .u--border-color-yellow
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-color-green">
          .u--border-color-green
        </span>
        <span className="u--display-block u--padding-20 u--border u--border-color-blue">
          .u--border-color-blue
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--border u--border-color-white">.u--border-color-white</span>
<span class="u--border u--border-color-gray">.u--border-color-gray</span>
<span class="u--border u--border-color-black">.u--border-color-black</span>
<span class="u--border u--border-color-red">.u--border-color-red</span>
<span class="u--border u--border-color-yellow">.u--border-color-yellow</span>
<span class="u--border u--border-color-green">.u--border-color-green</span>
<span class="u--border u--border-color-blue">.u--border-color-blue</span>`}
      </Code>
    </Example>
    <Description>
      Remove the border from one or all sides of an element with the{' '}
      <code>.u--border-width-0</code> a utility classes.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-width-0">
          .u--border-width-0
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-width-top-0">
          .u--border-width-top-0
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-width-right-0">
          .u--border-width-right-0
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--border u--border-width-bottom-0">
          .u--border-width-bottom-0
        </span>
        <span className="u--display-block u--padding-20 u--border u--border-width-left-0">
          .u--border-width-left-0
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--border u--border-width-0">.u--border-width-0</span>
<span class="u--border u--border-width-top-0">.u--border-width-top-0</span>
<span class="u--border u--border-width-right-0">.u--border-width-right-0</span>
<span class="u--border u--border-width-bottom-0">.u--border-width-bottom-0</span>
<span class="u--border u--border-width-left-0">.u--border-width-left-0</span>`}
      </Code>
    </Example>

    <SubTitle id="utilities-margins">Margins</SubTitle>
    <Description>
      Add or remove margins from elements with the <code>.u--margin-</code>{' '}
      utility classes.{' '}
      <em>
        Note that each numerical postfix represents a specific pixel value.
      </em>
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-20 u--margin-0 u--background-color-gray">
          .u--margin-0
        </span>
        <span className="u--display-block u--padding-20 u--margin-5 u--background-color-gray">
          .u--margin-5
        </span>
        <span className="u--display-block u--padding-20 u--margin-10 u--background-color-gray">
          .u--margin-10
        </span>
        <span className="u--display-block u--padding-20 u--margin-15 u--background-color-gray">
          .u--margin-15
        </span>
        <span className="u--display-block u--padding-20 u--margin-20 u--background-color-gray">
          .u--margin-20
        </span>
        <span className="u--display-block u--padding-20 u--margin-30 u--background-color-gray">
          .u--margin-30
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--margin-0">.u--margin-0</span>
<span class="u--margin-5">.u--margin-5</span>
<span class="u--margin-10">.u--margin-10</span>
<span class="u--margin-15">.u--margin-15</span>
<span class="u--margin-20">.u--margin-20</span>
<span class="u--margin-30">.u--margin-30</span>`}
      </Code>
    </Example>
    <Description>
      You may also apply margin to specific sides of element by using the{' '}
      <code>top</code>, <code>right</code>, <code>bottom</code> and{' '}
      <code>left</code> modifiers, like so:
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-20 u--margin-top-10 u--margin-right-20 u--margin-bottom-15 u--margin-left-30 u--background-color-gray">
          .u--margin-top-10.u--margin-right-20.u--margin-bottom-15.u--margin-left-30
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--margin-top-10 u--margin-right-20 u--margin-bottom-15 u--margin-left-30">.u--margin-top-10.u--margin-right-20.u--margin-bottom-15.u--margin-left-30</span>`}
      </Code>
    </Example>

    <SubTitle id="utilities-padding">Padding</SubTitle>
    <Description>
      Add or remove padding from elements with the <code>.u--padding-</code>{' '}
      utility classes.{' '}
      <em>
        Note that each numerical postfix represents a specific pixel value.
      </em>
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-0 u--margin-bottom-15 u--background-color-gray">
          .u--padding-0
        </span>
        <span className="u--display-block u--padding-5 u--margin-bottom-15 u--background-color-gray">
          .u--padding-5
        </span>
        <span className="u--display-block u--padding-10 u--margin-bottom-15 u--background-color-gray">
          .u--padding-10
        </span>
        <span className="u--display-block u--padding-15 u--margin-bottom-15 u--background-color-gray">
          .u--padding-15
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-gray">
          .u--padding-20
        </span>
        <span className="u--display-block u--padding-30 u--background-color-gray">
          .u--padding-30
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--padding-0">.u--padding-0</span>
<span class="u--padding-5">.u--padding-5</span>
<span class="u--padding-10">.u--padding-10</span>
<span class="u--padding-15">.u--padding-15</span>
<span class="u--padding-20">.u--padding-20</span>
<span class="u--padding-30">.u--padding-30</span>`}
      </Code>
    </Example>
    <Description>
      As with margins, you may apply padding to specific sides of element by
      using the <code>top</code>, <code>right</code>, <code>bottom</code> and{' '}
      <code>left</code> modifiers, like so:
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-top-20 u--padding-left-15 u--padding-top-30 u--padding-bottom-5 u--background-color-gray">
          .u--padding-top-20.u--padding-left-15.u--padding-top-30.u--padding-bottom-5
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--padding-top-20 u--padding-left-15 u--padding-top-30 u--padding-bottom-5">.u--padding-top-20.u--padding-left-15.u--padding-top-30.u--padding-bottom-5</span>`}
      </Code>
    </Example>

    <SubTitle id="utilities-width">Width</SubTitle>
    <Description>
      Adjust the width of an element with the <code>.u--width-</code> utility
      classes.{' '}
      <em>
        Note that each numerical postfix represents a percentage of the
        containing element.
      </em>
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-gray u--width-25">
          .u--width-25
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-gray u--width-33">
          .u--width-33
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-gray u--width-50">
          .u--width-50
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-gray u--width-66">
          .u--width-66
        </span>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-gray u--width-75">
          .u--width-75
        </span>
        <span className="u--display-block u--padding-20 u--background-color-gray u--width-100">
          .u--width-100
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--width-25">.u--width-25</span>
<span class="u--width-33">.u--width-33</span>
<span class="u--width-50">.u--width-50</span>
<span class="u--width-66">.u--width-66</span>
<span class="u--width-75">.u--width-75</span>
<span class="u--width-100">.u--width-100</span>`}
      </Code>
    </Example>

    <SubTitle id="utilities-floats">Floats</SubTitle>
    <Description>
      Add or remove float from elements with the <code>.u--float-</code> utility
      classes. You can also use the <code>.u--clearfix</code> utility to clear
      floats.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-gray u--float-left">
          .u--float-left
        </span>
        <div className="u--clearfix" />
        <span className="u--display-block u--padding-20 u--margin-bottom-15 u--background-color-gray u--float-right">
          .u--float-right
        </span>
        <div className="u--clearfix" />
        <span className="u--display-block u--padding-20 u--background-color-gray u--float-none">
          .u--float-none
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--float-left">.u--float-left</span>
<div class="u--clearfix"></div>
<span class="u--float-right">.u--float-right</span>
<div class="u--clearfix"></div>
<span class="u--float-none">.u--float-none</span>`}
      </Code>
    </Example>
    <Description>
      Combine a float utility class with margin and width utility classes to
      create a nice text wrapping effect.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-block u--padding-20 u--margin-left-30 u--margin-bottom-15 u--background-color-gray u--width-33 u--float-right">
          .u--float-right.u--width-33.u--margin-left-30.u--margin-bottom-15
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          dolor at suscipit tristique. Curabitur condimentum euismod velit non
          feugiat. Praesent tincidunt nibh non ullamcorper convallis.
          Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis
          in faucibus.
        </p>
        <p>
          Donec euismod, turpis sed facilisis congue, sem risus tempus nunc, in
          rutrum mauris neque non est. Phasellus imperdiet gravida ligula.
          Mauris in augue blandit, iaculis turpis a, hendrerit nisl. Fusce sem
          sem, commodo id orci vel, mollis pellentesque nisi. Cras a lorem
          iaculis, cursus leo id, tempor neque.
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Cras aliquam sit amet metus vel vestibulum.
          Suspendisse ultricies, eros et venenatis vulputate, lorem magna
          rhoncus eros, quis ultricies eros augue at felis. Phasellus finibus
          suscipit aliquet. Cras mattis dui a nisl dictum sagittis. Suspendisse
          pulvinar venenatis aliquet.
        </p>
      </ExampleView>
      <Code language="html">
        {`<span class="u--display-block u--padding-20 u--margin-left-30 u--margin-bottom-15 u--background-color-gray u--width-33 u--float-right">.u--float-right.u--width-33.u--margin-left-30.u--margin-bottom-15</span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dolor at suscipit tristique. Curabitur condimentum euismod velit non feugiat. Praesent tincidunt nibh non ullamcorper convallis. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
<p>Donec euismod, turpis sed facilisis congue, sem risus tempus nunc, in rutrum mauris neque non est. Phasellus imperdiet gravida ligula. Mauris in augue blandit, iaculis turpis a, hendrerit nisl. Fusce sem sem, commodo id orci vel, mollis pellentesque nisi. Cras a lorem iaculis, cursus leo id, tempor neque.</p>
<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras aliquam sit amet metus vel vestibulum. Suspendisse ultricies, eros et venenatis vulputate, lorem magna rhoncus eros, quis ultricies eros augue at felis. Phasellus finibus suscipit aliquet. Cras mattis dui a nisl dictum sagittis. Suspendisse pulvinar venenatis aliquet.</p>`}
      </Code>
    </Example>

    <SubTitle id="utilities-text-styles">Text Styles &amp; Formatting</SubTitle>
    <Description>
      Modify font weight with the <code>.u--font-weight-</code> utility classes.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--font-weight-normal">.u--font-weight-normal</span>
        <br />
        <span className="u--font-weight-bold">.u--font-weight-bold</span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--font-weight-normal">.u--font-weight-normal</span>
<span class="u--font-weight-bold">.u--font-weight-bold</span>`}
      </Code>
    </Example>
    <Description>
      Modify font style with the <code>.u--font-style-</code> utility classes.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--font-style-normal">.u--font-style-normal</span>
        <br />
        <span className="u--font-style-italic">.u--font-style-italic</span>
        <br />
        <span className="u--font-style-oblique">.u--font-style-oblique</span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--font-style-normal">.u--font-style-normal</span>
<span class="u--font-style-italic">.u--font-style-italic</span>
<span class="u--font-style-oblique">.u--font-style-oblique</span>`}
      </Code>
    </Example>
    <Description>
      Modify text alignment with the <code>.u--text-align-</code> utility
      classes.
    </Description>
    <Example>
      <ExampleView>
        <p>.u--text-align-left</p>
        <span className="u--display-block u--padding-30 u--margin-bottom-15 u--background-color-gray u--text-align-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          ligula rutrum, ornare elit quis, consectetur quam. Fusce nunc a
          finibus ornare. Proin iaculis tellus id ipsum faucibus interdum. Donec
          sit amet ipsum eu nunc porttitor vehicula ut at metus.
        </span>
        <p>.u--text-align-center</p>
        <span className="u--display-block u--padding-30 u--margin-bottom-15 u--background-color-gray u--text-align-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          ligula rutrum, ornare elit quis, consectetur quam. Fusce nunc a
          finibus ornare. Proin iaculis tellus id ipsum faucibus interdum. Donec
          sit amet ipsum eu nunc porttitor vehicula ut at metus.
        </span>
        <p>.u--text-align-right</p>
        <span className="u--display-block u--padding-30 u--margin-bottom-15 u--background-color-gray u--text-align-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          ligula rutrum, ornare elit quis, consectetur quam. Fusce nunc a
          finibus ornare. Proin iaculis tellus id ipsum faucibus interdum. Donec
          sit amet ipsum eu nunc porttitor vehicula ut at metus.
        </span>
        <p>.u--text-align-justify</p>
        <span className="u--display-block u--padding-30 u--background-color-gray u--text-align-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          ligula rutrum, ornare elit quis, consectetur quam. Fusce nunc a
          finibus ornare. Proin iaculis tellus id ipsum faucibus interdum. Donec
          sit amet ipsum eu nunc porttitor vehicula ut at metus.
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--text-align-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ligula rutrum, ornare elit quis, consectetur quam. Fusce nunc a finibus ornare. Proin iaculis tellus id ipsum faucibus interdum. Donec sit amet ipsum eu nunc porttitor vehicula ut at metus.</span>
<span class="u--text-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ligula rutrum, ornare elit quis, consectetur quam. Fusce nunc a finibus ornare. Proin iaculis tellus id ipsum faucibus interdum. Donec sit amet ipsum eu nunc porttitor vehicula ut at metus.</span>
<span class="u--text-align-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ligula rutrum, ornare elit quis, consectetur quam. Fusce nunc a finibus ornare. Proin iaculis tellus id ipsum faucibus interdum. Donec sit amet ipsum eu nunc porttitor vehicula ut at metus.</span>
<span class="u--text-align-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ligula rutrum, ornare elit quis, consectetur quam. Fusce nunc a finibus ornare. Proin iaculis tellus id ipsum faucibus interdum. Donec sit amet ipsum eu nunc porttitor vehicula ut at metus.</span>`}
      </Code>
    </Example>
    <Description>
      Transform text with the <code>.u--text-transform-</code> utility classes.
    </Description>
    <Example>
      <ExampleView>
        <p>.u--text-transform-uppercase</p>
        <span className="u--display-block u--padding-30 u--margin-bottom-15 u--background-color-gray u--text-transform-uppercase">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
        <p>.u--text-transform-lowercase</p>
        <span className="u--display-block u--padding-30 u--margin-bottom-15 u--background-color-gray u--text-transform-lowercase">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
        <p>.u--text-transform-capitalize</p>
        <span className="u--display-block u--padding-30 u--background-color-gray u--text-transform-capitalize">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--text-transform-uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
<span class="u--text-transform-lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
<span class="u--text-transform-capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>`}
      </Code>
    </Example>

    <SubTitle id="utilities-responsive-embeds">Responsive Embeds</SubTitle>
    <Description>
      <p>
        To make media embeds like <code>iframe</code>, <code>video</code>,{' '}
        <code>embed</code> and <code>object</code> elements responsive, simply
        wrap them in a <code>div</code> element with the{' '}
        <code>.u--embed-responsive</code> class.
      </p>
    </Description>
    <Example>
      <ExampleView>
        <div className="u--embed-responsive">
          <iframe
            src="https://www.youtube.com/embed/WQJuGeqdbn4"
            title="Responsive embed with default 16x9 aspect ratio"
            allowFullScreen
          />
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="u--embed-responsive">
    <iframe src="https://www.youtube.com/embed/WQJuGeqdbn4" title="Responsive embed with default 16x9 aspect ratio" allowFullScreen />
</div>`}
      </Code>
    </Example>
    <Description>
      <p>
        The default aspect ratio is 16x9. You can change the aspect ratio by
        adding one of the following modifying classes:
      </p>
      <ul>
        <li>
          <code>.u--embed-responsive--21x9</code>
        </li>
        <li>
          <code>.u--embed-responsive--16x9</code>
        </li>
        <li>
          <code>.u--embed-responsive--4x3</code>
        </li>
        <li>
          <code>.u--embed-responsive--1x1</code>
        </li>
      </ul>
      <p>Below is an example of the 4x3 aspect ratio.</p>
    </Description>
    <Example>
      <ExampleView>
        <div className="u--embed-responsive u--embed-responsive--4x3">
          <iframe
            src="https://www.youtube.com/embed/WQJuGeqdbn4"
            title="Responsive embed with 4x3 aspect ratio"
            allowFullScreen
          />
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="u--embed-responsive u--embed-responsive--4x3">
    <iframe src="https://www.youtube.com/embed/WQJuGeqdbn4" title="Responsive embed with 4x3 aspect ratio" allowFullScreen />
</div>`}
      </Code>
    </Example>

    <SubTitle id="utilities-display">Display &amp; Visibility</SubTitle>
    <Description>
      Control visibility and display of elements with the{' '}
      <code>.u--display-</code> and <code>.u--hidden</code> utility classes.
    </Description>
    <Example>
      <ExampleView>
        <span className="u--display-inline u--background-color-gray">
          .u--display-inline
        </span>
        <br />
        <br />
        <span className="u--display-inline-block u--background-color-gray">
          .u--display-inline-block
        </span>
        <br />
        <br />
        <span className="u--display-block u--background-color-gray">
          .u--display-block
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--display-inline">.u--display-inline</span>
<span class="u--display-inline-block">.u--display-inline-block</span>
<span class="u--display-block">.u--display-block</span>`}
      </Code>
    </Example>
    <Description>
      <p>The full list of display utilities includes:</p>
      <ul>
        <li>
          <code>.u--display-none</code>
        </li>
        <li>
          <code>.u--display-inline</code>
        </li>
        <li>
          <code>.u--display-inline-block</code>
        </li>
        <li>
          <code>.u--display-block</code>
        </li>
        <li>
          <code>.u--display-table</code>
        </li>
        <li>
          <code>.u--display-table-row</code>
        </li>
        <li>
          <code>.u--display-flex</code>
        </li>
        <li>
          <code>.u--display-inline-flex</code>
        </li>
      </ul>
      <p>
        To simply hide elements, use the <code>.u--hidden</code> utility class.
        This will set the style to <code>display: none</code>.
      </p>
    </Description>

    <SubTitle id="utilities-responsive-postfixes">
      Responsive Utility Postfixes
    </SubTitle>
    <Description>
      <p>
        You may also apply responsive postfixes to any of the{' '}
        <code>.u--margin-</code>, <code>.u--padding-</code>,{' '}
        <code>.u--width-</code>, <code>.u--float-</code>,{' '}
        <code>.u--display-</code> and <code>.u--hidden</code> utility classes to
        make them apply only for certain device sizes:
      </p>
      <table className="table table--bordered">
        <tbody>
          <tr>
            <th>Screen Size</th>
            <th>Postfix</th>
          </tr>
          <tr>
            <td>All</td>
            <td>(no postfix)</td>
          </tr>
          <tr>
            <td>Extra Small (and up)</td>
            <td>
              <code>-xs</code>
            </td>
          </tr>
          <tr>
            <td>Small (and up)</td>
            <td>
              <code>-sm</code>
            </td>
          </tr>
          <tr>
            <td>Medium (and up)</td>
            <td>
              <code>-md</code>
            </td>
          </tr>
          <tr>
            <td>Large (and up)</td>
            <td>
              <code>-lg</code>
            </td>
          </tr>
          <tr>
            <td>Extra Large (and up)</td>
            <td>
              <code>-xl</code>
            </td>
          </tr>
          <tr>
            <td>Print (only)</td>
            <td>
              <code>-print</code>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        For example, if you only wanted something to display for large devices (<code>lg</code>)
        and up and not others, you might do the following:
      </p>
    </Description>
    <Example>
      <ExampleView>
        <p>
          <code>.u--display-none.u--display-block-lg</code>
        </p>
        <span className="u--display-none u--display-block-lg u--padding-20 u--background-color-gray">
          I'm only visible for large devices!
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--display-none u--display-block-lg">I'm only visible for large devices!</span>`}
      </Code>
    </Example>
    <Description>
      Or if you only wanted something to display for extra small (<code>xs</code>)
      and small (<code>sm</code>) devices, you could do:
    </Description>
    <Example>
      <ExampleView>
        <p>
          <code>.u--display-block.u--display-none-md</code>
        </p>
        <span className="u--display-block u--display-none-md u--padding-20 u--background-color-gray">
          I'm only visible on extra small and small devices!
        </span>
      </ExampleView>
      <Code language="html">
        {`<span class="u--display-block u--display-none-md">I'm only visible on extra small and small devices!</span>`}
      </Code>
    </Example>
  </Section>;

export default Utilities;
