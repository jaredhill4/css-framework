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

const createTableWithClassNames = classNames =>
  <table className={classNames}>
    <thead>
      <tr>
        <th>Col 1</th>
        <th>Col 2</th>
        <th>Col 3</th>
        <th>Col 4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row 1 / Col 1</td>
        <td>Row 1 / Col 2</td>
        <td>Row 1 / Col 3</td>
        <td>Row 1 / Col 4</td>
      </tr>
      <tr>
        <td>Row 2 / Col 1</td>
        <td>Row 2 / Col 2</td>
        <td>Row 2 / Col 3</td>
        <td>Row 2 / Col 4</td>
      </tr>
      <tr>
        <td>Row 3 / Col 1</td>
        <td>Row 3 / Col 2</td>
        <td>Row 3 / Col 3</td>
        <td>Row 3 / Col 4</td>
      </tr>
      <tr>
        <td>Row 4 / Col 1</td>
        <td>Row 4 / Col 2</td>
        <td>Row 4 / Col 3</td>
        <td>Row 4 / Col 4</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Col 1</th>
        <th>Col 2</th>
        <th>Col 3</th>
        <th>Col 4</th>
      </tr>
    </tfoot>
  </table>;

const Tables = () =>
  <Section>
    <Title id="tables">Tables</Title>
    <Description>
      Style a table by adding the <code>.table</code> class.
    </Description>
    <Example>
      <ExampleView>
        {createTableWithClassNames('table')}
      </ExampleView>
      <Code language="html">
        {`<table class="table">
    <thead>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
          <th>Col 3</th>
          <th>Col 4</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Row 1 / Col 1</td>
          <td>Row 1 / Col 2</td>
          <td>Row 1 / Col 3</td>
          <td>Row 1 / Col 4</td>
        </tr>
        <tr>
          <td>Row 2 / Col 1</td>
          <td>Row 2 / Col 2</td>
          <td>Row 2 / Col 3</td>
          <td>Row 2 / Col 4</td>
        </tr>
        <tr>
          <td>Row 3 / Col 1</td>
          <td>Row 3 / Col 2</td>
          <td>Row 3 / Col 3</td>
          <td>Row 3 / Col 4</td>
        </tr>
        <tr>
          <td>Row 4 / Col 1</td>
          <td>Row 4 / Col 2</td>
          <td>Row 4 / Col 3</td>
          <td>Row 4 / Col 4</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
          <th>Col 3</th>
          <th>Col 4</th>
        </tr>
    </tfoot>
</table>`}
      </Code>
    </Example>
    <SubTitle id="tables-striped">Striped rows</SubTitle>
    <Description>
      Add the <code>.table--striped</code> modifier to add zebra-striping to
      table rows.
    </Description>
    <Example>
      <ExampleView>
        {createTableWithClassNames('table table--striped')}
      </ExampleView>
      <Code language="html">
        {`<table class="table table--striped">
    <!-- Table content here -->
</table>`}
      </Code>
    </Example>
    <SubTitle id="tables-bordered">Bordered</SubTitle>
    <Description>
      Add the <code>.table--bordered</code> modifier to add borders around the
      table and table cells.
    </Description>
    <Example>
      <ExampleView>
        {createTableWithClassNames('table table--bordered')}
      </ExampleView>
      <Code language="html">
        {`<table class="table table--bordered">
    <!-- Table content here -->
</table>`}
      </Code>
    </Example>
    <SubTitle id="tables-hover">Hoverable rows</SubTitle>
    <Description>
      Add the <code>.table--hover</code> modifier to enable a hover state on
      table rows.
    </Description>
    <Example>
      <ExampleView>
        {createTableWithClassNames('table table--hover')}
      </ExampleView>
      <Code language="html">
        {`<table class="table table--hover">
    <!-- Table content here -->
</table>`}
      </Code>
    </Example>
    <SubTitle id="tables-compact">Compact</SubTitle>
    <Description>
      Add the <code>.table--compact</code> modifier to reduce padding within
      table cells.
    </Description>
    <Example>
      <ExampleView>
        {createTableWithClassNames('table table--compact')}
      </ExampleView>
      <Code language="html">
        {`<table class="table table--compact">
    <!-- Table content here -->
</table>`}
      </Code>
    </Example>
    <SubTitle id="tables-narrow">Narrow</SubTitle>
    <Description>
      Add the <code>.table--narrow</code> modifier to reduce cell width.
    </Description>
    <Example>
      <ExampleView>
        {createTableWithClassNames('table table--narrow')}
      </ExampleView>
      <Code language="html">
        {`<table class="table table--narrow">
    <!-- Table content here -->
</table>`}
      </Code>
    </Example>
    <SubTitle id="tables-responsive">Responsive</SubTitle>
    <Description>
      Add the <code>.table--responsive</code> modifier to make tables scroll
      horizontally at small screen sizes.
    </Description>
    <Example>
      <ExampleView>
        {createTableWithClassNames('table table--responsive')}
      </ExampleView>
      <Code language="html">
        {`<table class="table table--responsive">
    <!-- Table content here -->
</table>`}
      </Code>
    </Example>
  </Section>;

export default Tables;
