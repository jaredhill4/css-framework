import React, { Component } from 'react';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Code,
} from './Framework';

class Colors extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Section>
        <Title id="colors">Colors</Title>
        <Description>
          <p>The framework includes a foundation of color variables to get started. These colors are stored in the <code>variables.scss</code> file and are used to control the colors of all the components in the framework.</p>
        </Description>

        <SubTitle id="colors-default">Default Palette</SubTitle>
        <Description>
          <p>These are our default colors. Each color includes a "hover" variant, which is the color on the right side of each swatch below.</p>
        </Description>
        <div className="grid">
          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--blue">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--green">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--yellow">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--red">
              <div class="swatch__color"></div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--black">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--gray-darkest">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--gray-darker">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--gray-dark">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--gray">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--gray-light">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--gray-lighter">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--gray-lightest">
              <div class="swatch__color"></div>
            </div>
          </div>

          <div class="grid__col grid__col-xs-12 grid__col-sm-6 grid__col-md-3">
            <div class="swatch swatch--white">
              <div class="swatch__color"></div>
            </div>
          </div>
        </div>

        <SubTitle id="colors-modifying">Modifying Colors</SubTitle>
        <Description>
          <p>To modify the existing color palette, you simply need to change the default color variables. As mentioned above, each color variable has a hover variant, which is simply a darkened or lightened version of the base color.</p>
        </Description>
        <Code language="scss">
          {`// base
$color-blue: #6772e5;
$color-green: #3ecf8e;
$color-yellow: #ffd65a;
$color-red: #e56767;

// hover
$color-blue-hover: darken($color-blue, 15%);
$color-green-hover: darken($color-green, 15%);
$color-yellow-hover: darken($color-yellow, 15%);
$color-red-hover: darken($color-red, 15%);`}
        </Code>
        <SubTitle id="colors-modifying">Adding Colors</SubTitle>
        <Description>
          <p>To add colors, you will need to add a new base and hover color variable. You will then need to update the <code>$colors-theme</code> map to include your new color. Here is an example of what this would look like:</p>
        </Description>
        <Code language="scss">
          {`// base
$color-burnt-orange: #e87420;

// hover
$color-burnt-orange-hover: darken($color-burnt-orange, 8%);

// theme
$colors-theme: (
  ..., // other colors

  'burnt-orange': (
    'name': 'Burnt Orange',
    'base': $color-burnt-orange,
    'hover': $color-burnt-orange-hover
  )
);`}
        </Code>
        <Description>
          This will cause your new color to cascade to all the components that use the <code>$colors-theme</code> map, and will create a new variant of each component. For example, you could now use a "burnt orange" button, like this:
        </Description>
        <Code>
          {`<button class="btn btn--burnt-orange">...</button>`}
        </Code>
      </Section>
    );
  }
}

export default Colors;
