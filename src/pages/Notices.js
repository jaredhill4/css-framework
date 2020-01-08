// @flow

import React, { useEffect } from 'react';
import lorem from '../util/lorem';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code
} from '../components';
import notice from '../framework/js/notice';

export default () => {
  useEffect(() => {
    notice('[data-notice-dismissible]');
  }, []);

  return (
    <Section>
      <Title id="notices">Notices</Title>
      <Description>
        To create an alert-style callout, add a <code>.notice</code> class to a{' '}
        <code>div</code> or other block-level element.
      </Description>
      <Example>
        <ExampleView>
          <div className="notice u--margin-bottom-0" role="alert">
            {lorem(101)}
          </div>
        </ExampleView>
        <Code language="html">
          {`<div class="notice" role="alert">
    ...
</div>`}
        </Code>
      </Example>
      <SubTitle id="notices-colors">Colors</SubTitle>
      <Description>
        Adjust the state/color of the notice by adding a color modifier class
        like <code>.notice--red</code>.
      </Description>
      <Example>
        <ExampleView>
          <div className="notice notice--red" role="alert">
            {lorem(90)}
          </div>
          <div className="notice notice--yellow" role="alert">
            {lorem(91)}
          </div>
          <div className="notice notice--green" role="alert">
            {lorem(92)}
          </div>
          <div className="notice notice--blue" role="alert">
            {lorem(93)}
          </div>
          <div
            className="notice notice--primary u--margin-bottom-0"
            role="alert"
          >
            {lorem(94)}
          </div>
        </ExampleView>
        <Code language="html">
          {`<div class="notice notice--red" role="alert">
    ...
</div>
<div class="notice notice--yellow" role="alert">
    ...
</div>
<div class="notice notice--green" role="alert">
    ...
</div>
<div class="notice notice--blue" role="alert">
    ...
</div>
<div class="notice notice--primary" role="alert">
    ...
</div>`}
        </Code>
      </Example>
      <SubTitle id="notices-titles">Titles</SubTitle>
      <Description>
        Add a title to a notice by adding the <code>.notice__title</code> class
        to a heading or inline element.
      </Description>
      <Example>
        <ExampleView>
          <div className="notice notice--green" role="alert">
            <h5 className="notice__title">
              This is a title for a success notice
            </h5>
            <p>{lorem(80)}</p>
          </div>
          <div className="notice notice--red u--margin-bottom-0">
            <strong className="notice__title">Error</strong> {lorem(64)}
          </div>
        </ExampleView>
        <Code language="html">
          {`<div class="notice notice--green" role="alert">
    <h5 class="notice__title">...</h5>
    <p>...</p>
</div>
<div class="notice notice--red" role="alert">
    <span class="notice__title">...</span> ...
</div>`}
        </Code>
      </Example>
      <SubTitle id="notices-dismissible">Dismissible</SubTitle>
      <Description>
        <p>
          To make a notice dismissible add the attribute{' '}
          <code>[data-notice-dismissible]</code> and prepend the notice with a{' '}
          <code>button.notice__close</code> with the attribute{' '}
          <code>[data-notice-close]</code>.
        </p>
        <p>
          In order to use dismissible notices you must import the library and
          call <code>notices('[data-notice-dismissible]');</code>
        </p>
      </Description>
      <Example>
        <ExampleView>
          <div
            className="notice notice--blue u--margin-bottom-0"
            role="alert"
            data-notice-dismissible
          >
            <button
              type="button"
              className="notice__close"
              data-notice-close
              aria-label="Close"
            />
            <h5 className="notice__title">This is a dismissible notice</h5>
            <p>{lorem(61)}</p>
          </div>
        </ExampleView>
        <Code language="html">
          {`<div class="notice notice--blue" role="alert" data-notice-dismissible>
    <button type="button" className="notice__close" data-notice-close aria-label="Close"></button>
    <h5 class="notice__title">...</h5>
    <p>...</p>
</div>`}
        </Code>
      </Example>

      <SubTitle id="notices-events">Events</SubTitle>
      <Description>
        <p>
          You may also hook into events that are fired by the notice. These
          events include:
        </p>
      </Description>
      <table className="table table--bordered">
        <tbody>
          <tr>
            <td>
              <code>notice:afterHide</code>
            </td>
            <td>fired after "hide" has completed</td>
          </tr>
        </tbody>
      </table>
      <Code language="javascript" collapsible={false}>
        {`$('#sample-notice').on('notice:afterHide', event => {
  // do something...
}); `}
      </Code>
    </Section>
  );
};
