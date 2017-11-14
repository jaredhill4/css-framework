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

const Grid = () =>
  <Section>
    <Title id="grid">Grid</Title>
    <Description>
      To build a grid, add a <code>.grid</code> container with as many{' '}
      <code>.grid__col-*</code> elements as you want. A <code>.grid</code>{' '}
      element can be nested within a <code>.grid__col-*</code> element. A{' '}
      <code>.grid__col</code> element without a defined column width will
      automatically size based on its content. Available size modifiers are{' '}
      <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and{' '}
      <code>xl</code>.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid</div>
          <div className="grid">
            <div className="grid__col">
              <div className="example__grid">.grid__col</div>
            </div>
            <div className="grid__col-lg-3">
              <div className="example__grid">.grid__col-lg-3</div>
            </div>
            <div className="grid__col-xs-12">
              <div className="example__grid">.grid__col-xs-12</div>
            </div>
            <div className="grid__col-xs-12 grid__col-md-6">
              <div className="example__grid">
                <div className="example__grid__text">.grid</div>
                <div className="grid">
                  <div className="grid__col-xs-6">
                    <div className="example__grid">.grid__col-xs-6</div>
                  </div>
                  <div className="grid__col-xs-6">
                    <div className="example__grid">.grid__col-xs-6</div>
                  </div>
                  <div className="grid__col">
                    <div className="example__grid">.grid__col</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid__col-xs-12 grid__col-md-6">
              <div className="example__grid">
                <div className="example__grid__text">.grid</div>
                <div className="grid">
                  <div className="grid__col-xs-12">
                    <div className="example__grid">.grid__col-xs-12</div>
                  </div>
                  <div className="grid__col">
                    <div className="example__grid">.grid__col</div>
                  </div>
                  <div className="grid__col">
                    <div className="example__grid">.grid__col</div>
                  </div>
                  <div className="grid__col">
                    <div className="example__grid">.grid__col</div>
                  </div>
                  <div className="grid__col">
                    <div className="example__grid">.grid__col</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid">
    <div class="grid__col">.grid__col</div>
    <div class="grid__col-lg-3">.grid__col-lg-3</div>
    <div class="grid__col-xs-12">.grid__col-xs-12</div>
    <div class="grid__col-xs-12 grid__col-md-6">
        <div class="grid">
            <div class="grid__col-xs-6">.grid__col-xs-6</div>
            <div class="grid__col-xs-6">.grid__col-xs-6</div>
            <div class="grid__col">.grid__col</div>
        </div>
    </div>
    <div class="grid__col-xs-12 grid__col-md-6">
        <div class="grid">
            <div class="grid__col-xs-12">.grid__col-xs-12</div>
            <div class="grid__col">.grid__col</div>
            <div class="grid__col">.grid__col</div>
            <div class="grid__col">.grid__col</div>
            <div class="grid__col">.grid__col</div>
        </div>
    </div>
</div>`}
      </Code>
    </Example>
    <SubTitle id="grid-gapless">Gapless</SubTitle>
    <Description>
      You can remove column gutters by adding the <code>.grid--gapless</code>{' '}
      modifier to a grid. There are also <code>.grid--gapless-horizontal</code>{' '}
      and <code>.grid--gapless-vertical</code> modifiers to remove the
      corresponding gutters.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--gapless</div>
          <div className="grid grid--gapless">
            <div className="grid__col">
              <div className="example__grid">.grid__col</div>
            </div>
            <div className="grid__col">
              <div className="example__grid">.grid__col</div>
            </div>
            <div className="grid__col">
              <div className="example__grid">.grid__col</div>
            </div>
            <div className="grid__col">
              <div className="example__grid">.grid__col</div>
            </div>
            <div className="grid__col-xs-12">
              <div className="example__grid">.grid__col-xs-12</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--gapless">
    <div class="grid__col">.grid__col</div>
    <div class="grid__col">.grid__col</div>
    <div class="grid__col">.grid__col</div>
    <div class="grid__col">.grid__col</div>
    <div class="grid__col-xs-12">.grid__col-xs-12</div>
</div>`}
      </Code>
    </Example>
    <SubTitle id="grid-vertical-alignment">Vertical Alignment</SubTitle>
    <Description>
      Add the <code>.grid--valign-stretch</code> modifier for equal height
      columns. <em>This is the default setting.</em>
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-stretch</div>
          <div className="grid grid--valign-stretch">
            <div className="grid__col-xs-6">
              <div className="example__grid">
                <p>.grid__col-xs-6</p>
                {loremIpsum}
              </div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-stretch">
    <div class="grid__col-xs-6">
        <p>.grid__col-xs-6</p>
        ${loremIpsum}
    </div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--valign-top</code> modifier to align columns along the
      top.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-top</div>
          <div className="grid grid--valign-top">
            <div className="grid__col-xs-6">
              <div className="example__grid">
                <p>.grid__col-xs-6</p>
                {loremIpsum}
              </div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-top">
    <div class="grid__col-xs-6">
        <p>.grid__col-xs-6</p>
        ${loremIpsum}
    </div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--valign-center</code> modifier to center columns
      vertically.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-center</div>
          <div className="grid grid--valign-center">
            <div className="grid__col-xs-6">
              <div className="example__grid">
                <p>.grid__col-xs-6</p>
                {loremIpsum}
              </div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-center">
    <div class="grid__col-xs-6">
        <p>.grid__col-xs-6</p>
        ${loremIpsum}
    </div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--valign-bottom</code> modifier to align columns along
      the bottom.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-bottom</div>
          <div className="grid grid--valign-bottom">
            <div className="grid__col-xs-6">
              <div className="example__grid">
                <p>.grid__col-xs-6</p>
                {loremIpsum}
              </div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-bottom">
    <div class="grid__col-xs-6">
        <p>.grid__col-xs-6</p>
        ${loremIpsum}
    </div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--valign-row-top</code> modifier to align rows at the
      top of the available vertical space. <em>This is the default setting.</em>
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-row-top</div>
          <div className="grid grid--valign-row-top example__grid--static-height">
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-row-top">
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--valign-row-center</code> modifier to align rows in
      the center of the available vertical space.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-row-center</div>
          <div className="grid grid--valign-row-center example__grid--static-height">
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-row-center">
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--valign-row-bottom</code> modifier to align rows at
      the bottom of the available vertical space.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-row-bottom</div>
          <div className="grid grid--valign-row-bottom example__grid--static-height">
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-row-bottom">
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--valign-row-stretch</code> modifier to stretch all of
      the rows to fill available vertical space.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-row-stretch</div>
          <div className="grid grid--valign-row-stretch example__grid--static-height">
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-row-stretch">
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--valign-row-between</code> modifier to add equal space
      around each row while keeping the first and last justified to the top and
      bottom.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-row-between</div>
          <div className="grid grid--valign-row-between example__grid--static-height">
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-row-between">
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--valign-row-around</code> modifier to add equal space
      around each row.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--valign-row-around</div>
          <div className="grid grid--valign-row-around example__grid--static-height">
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
            <div className="grid__col-xs-6">
              <div className="example__grid">.grid__col-xs-6</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--valign-row-around">
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
    <div class="grid__col-xs-6">.grid__col-xs-6</div>
</div>`}
      </Code>
    </Example>
    <SubTitle id="grid-horizontal-alignment">Horizontal Alignment</SubTitle>
    <Description>
      Add the <code>.grid--halign-left</code> modifier to align columns on the
      left. <em>This is the default setting.</em>
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--halign-left</div>
          <div className="grid grid--halign-left">
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--halign-left">
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--halign-center</code> modifier to center columns
      horizontally.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--halign-center</div>
          <div className="grid grid--halign-center">
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--halign-center">
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--halign-right</code> modifier to align columns on the
      right.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--halign-right</div>
          <div className="grid grid--halign-right">
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--halign-right">
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--halign-between</code> modifier to add equal space
      around each column while keeping the first and last justified to the left
      and right.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--halign-between</div>
          <div className="grid grid--halign-between">
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--halign-between">
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--halign-around</code> modifier to add equal space
      around each column.
    </Description>
    <Example>
      <ExampleView>
        <div className="example__grid">
          <div className="example__grid__text">.grid--halign-around</div>
          <div className="grid grid--halign-around">
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
            <div className="grid__col-sm-4">
              <div className="example__grid">.grid__col-sm-4</div>
            </div>
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--halign-around">
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
    <div class="grid__col-sm-4">.grid__col-sm-4</div>
</div>`}
      </Code>
    </Example>
  </Section>;

export default Grid;
