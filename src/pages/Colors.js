// @flow

import React from 'react';
import { Section, Title, SubTitle, Description, Code } from '../components';

export default () => (
  <Section>
    <Title id="colors">Colors</Title>
    <Description>
      <p>
        The framework includes a foundation of color variables to get started.
        These colors are stored in <code>$colors</code> map (which can be found
        in the <code>colors.scss</code> file) and are used to control the colors
        of all the components in the framework.
      </p>
    </Description>

    <SubTitle id="colors-default">Default Palette</SubTitle>
    <Description>
      <p>
        The swatched below represent the default color palette for the
        framework. Each color includes a "hover" variant, which is the color on
        the right side of each swatch below.
      </p>
    </Description>
    <div className="grid grid--gutter">
      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--dual swatch--primary">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--dual swatch--blue">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--dual swatch--green">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--dual swatch--yellow">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--dual swatch--red">
          <div className="swatch__color" />
        </div>
      </div>
    </div>

    <div className="grid grid--gutter">
      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--black">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--gray-darkest">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--gray-darker">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--gray-dark">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--gray">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--gray-light">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--gray-lighter">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--gray-lightest">
          <div className="swatch__color" />
        </div>
      </div>

      <div className="grid__col-xs-6 grid__col-md-3">
        <div className="swatch swatch--white">
          <div className="swatch__color" />
        </div>
      </div>
    </div>

    <SubTitle id="colors-modifying">Modifying Colors</SubTitle>
    <Description>
      <p>
        To modify the existing color palette, you simply need to change the{' '}
        <code>$colors</code> map. As mentioned above, each color variable has a
        hover variant by default, which is simply a darkened or lightened
        version of the base color.
      </p>
    </Description>
    <Code language="scss" collapsible={false}>
      {`$colors: (
  'blue': ('name': 'Blue', 'base': #6772e5, 'hover': darken(#6772e5, 15%)),
  'green': ('name': 'green', 'base': #3ecf8e, 'hover': darken(#3ecf8e, 15%)),
  'yellow': ('name': 'yellow', 'base': #ffd65a, 'hover': darken(#ffd65a, 15%)),
  'red': ('name': 'red', 'base': #e56767, 'hover': darken(#e56767, 15%))
);`}
    </Code>
    <SubTitle id="colors-modifying">Adding Colors</SubTitle>
    <Description>
      <p>
        To avoid duplication, all colors that will need to be reused should be
        contained in the <code>$color</code> map. To add a color, you will need
        to add a new item to the <code>$color</code> map. This new item should
        be set to a map with keys for "name", "base" and "hover". Here is an
        example of what this would look like:
      </p>
    </Description>
    <Code language="scss" collapsible={false}>
      {`$colors: (
  // other colors...
  'burnt-orange': ('name': 'Burnt Orange', 'base': #e87420, 'hover': darken(#e87420, 8%))
);`}
    </Code>
    <Description>
      This will cause your new color to cascade to all the components that use
      the <code>$colors</code> map, and will create a new variant of each
      component. For example, you could now use a "burnt orange" button, like
      this:
    </Description>
    <Code
      language="html"
      collapsible={false}
    >{`<button class="btn btn--burnt-orange">...</button>`}</Code>

    <SubTitle id="colors-using">Using Colors</SubTitle>
    <Description>
      To use a specific color from the <code>$color</code> map in your custom
      SCSS code, we have provided a <code>color()</code> helper function. To use
      the function, simply call it with a specific color key as the first
      argument. By default, it will return the "base" value of a given color. To
      get the "hover" variant, simply provide "hover" as the second argument.
    </Description>
    <Code language="scss" collapsible={false}>
      {`.foo {
  color: color('blue');
}`}
    </Code>
  </Section>
);
