import React from 'react';
import classnames from 'classnames';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code,
} from '../components/Framework';

const GridPlaceholder = ({ fill, fixed, noMargin }) => (
  <div
    className={classnames(
      'example__grid',
      { 'example__grid--fill-height': fill },
      { 'example__grid--static-height': fixed },
      { 'u--margin-bottom-0': fill || fixed || noMargin }
    )}
  />
);

export default () => (
  <Section>
    <Title id="grid">Grid</Title>
    <Description>
      To build a grid, add a <code>.grid</code> container with as many{' '}
      <code>.grid__col-*</code> elements as you want. A <code>.grid</code>{' '}
      element can be nested within a <code>.grid__col-*</code> element.
      Available size modifiers are <code>xs</code>, <code>sm</code>,{' '}
      <code>md</code>, <code>lg</code>, and <code>xl</code>.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid">
          <div className="grid__col-xs-10">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-2">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-8">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-4">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-4">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-8">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-2">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-10">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid">
    <div class="grid__col-xs-10"></div>
    <div class="grid__col-xs-2"></div>
    <div class="grid__col-xs-8"></div>
    <div class="grid__col-xs-4"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-4"></div>
    <div class="grid__col-xs-8"></div>
    <div class="grid__col-xs-2"></div>
    <div class="grid__col-xs-10"></div>
</div>`}
      </Code>
    </Example>
    <SubTitle id="grid-offsets">Offsets</SubTitle>
    <Description>
      Columns may be offset with size and width modifiers.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid">
          <div className="grid__col-xs-2 grid__col-xs-offset-10">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-4 grid__col-xs-offset-8">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6 grid__col-xs-offset-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-8 grid__col-xs-offset-4">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-10 grid__col-xs-offset-2">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid">
    <div class="grid__col-xs-2 grid__col-xs-offset-10"></div>
    <div class="grid__col-xs-4 grid__col-xs-offset-8"></div>
    <div class="grid__col-xs-6 grid__col-xs-offset-6"></div>
    <div class="grid__col-xs-8 grid__col-xs-offset-4"></div>
    <div class="grid__col-xs-10 grid__col-xs-offset-2"></div>
</div>`}
      </Code>
    </Example>
    <SubTitle id="grid-offsets">Auto sizing</SubTitle>
    <Description>
      Columns can be sized automatically based on content if a column count
      isn't provided.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid">
          <div className="grid__col">
            <GridPlaceholder />
          </div>
          <div className="grid__col">
            <GridPlaceholder />
          </div>
          <div className="grid__col">
            <GridPlaceholder />
          </div>
          <div className="grid__col">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid">
    <div class="grid__col"></div>
    <div class="grid__col"></div>
    <div class="grid__col"></div>
    <div class="grid__col"></div>
</div>`}
      </Code>
    </Example>
    <SubTitle id="grid-gutters">Gutters</SubTitle>
    <Description>
      By default grids only have horizontal gutters. Modifiers available for
      adding gutters are <code>.grid--gutter</code>,{' '}
      <code>.grid--gutter-horizontal</code>, and{' '}
      <code>.grid--gutter-vertical</code>. Modifiers available for removing
      gutters are <code>.grid--no-gutter</code>,{' '}
      <code>.grid--no-gutter-horizontal</code>, and{' '}
      <code>.grid--no-gutter-vertical</code>.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--no-gutter">
          <div className="grid__col">
            <GridPlaceholder />
          </div>
          <div className="grid__col">
            <GridPlaceholder />
          </div>
          <div className="grid__col">
            <GridPlaceholder />
          </div>
          <div className="grid__col">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--no-gutter">
    <div class="grid__col"></div>
    <div class="grid__col"></div>
    <div class="grid__col"></div>
    <div class="grid__col"></div>
</div>`}
      </Code>
    </Example>
    <SubTitle id="grid-alignment">Alignment</SubTitle>
    <Description>
      Add the <code>.grid--left</code> modifier to align columns on the left.{' '}
      <em>This is the default setting.</em>
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--left">
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--left">
    <div class="grid__col-sm-4"></div>
    <div class="grid__col-sm-4"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--center</code> modifier to center columns
      horizontally.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--center">
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--center">
    <div class="grid__col-sm-4"></div>
    <div class="grid__col-sm-4"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--right</code> modifier to align columns on the right.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--right">
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--right">
    <div class="grid__col-sm-4"></div>
    <div class="grid__col-sm-4"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--between</code> modifier to add equal space around
      each column while keeping the first and last justified to the left and
      right.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--between">
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--between">
    <div class="grid__col-sm-4"></div>
    <div class="grid__col-sm-4"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--around</code> modifier to add equal space around each
      column.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--around">
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
          <div className="grid__col-sm-4">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--around">
    <div class="grid__col-sm-4"></div>
    <div class="grid__col-sm-4"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--top</code> modifier to align columns along the top.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--top">
          <div className="grid__col-xs-6">
            <GridPlaceholder fixed />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--top">
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--middle</code> modifier to center columns vertically.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--middle">
          <div className="grid__col-xs-6">
            <GridPlaceholder fixed />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder noMargin />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--middle">
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--bottom</code> modifier to align columns along the
      bottom.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--bottom">
          <div className="grid__col-xs-6">
            <GridPlaceholder fixed />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder noMargin />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--bottom">
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--row-top</code> modifier to align rows at the top of
      the available vertical space. <em>This is the default setting.</em>
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--row-top example__grid--static-height">
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--row-top">
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--row-middle</code> modifier to align rows in the
      center of the available vertical space.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--row-middle example__grid--static-height">
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--row-middle">
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--row-bottom</code> modifier to align rows at the
      bottom of the available vertical space.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--row-bottom example__grid--static-height">
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--row-bottom">
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--row-stretch</code> modifier to stretch all of the
      rows to fill available vertical space.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--row-stretch example__grid--static-height">
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--row-stretch">
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--row-between</code> modifier to add equal space around
      each row while keeping the first and last justified to the top and bottom.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--row-between example__grid--static-height">
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--row-between">
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
</div>`}
      </Code>
    </Example>
    <Description>
      Add the <code>.grid--row-around</code> modifier to add equal space around
      each row.
    </Description>
    <Example>
      <ExampleView>
        <div className="grid grid--row-around example__grid--static-height">
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
          <div className="grid__col-xs-6">
            <GridPlaceholder fill />
          </div>
        </div>
      </ExampleView>
      <Code language="html">
        {`<div class="grid grid--row-around">
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
    <div class="grid__col-xs-6"></div>
</div>`}
      </Code>
    </Example>
  </Section>
);
