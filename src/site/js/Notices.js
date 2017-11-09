import React, { Component } from 'react';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code,
} from './Framework';
import notices from '../../framework/js/notices';

class Notices extends Component {
  componentDidMount() {
    notices('[data-notice-dismissible]');
  }

  render() {
    return (
      <Section>
        <Title id="notices">Notices</Title>
        <Description>
          To create an alert-style callout, add a <code>.notice</code> class to
          a <code>div</code> or other block-level element.
        </Description>
        <Example>
          <ExampleView>
            <div className="notice u--margin-bottom-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempor dolor at suscipit tristique.
              </p>
            </div>
          </ExampleView>
          <Code language="html">
            {`<div class="notice">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dolor at suscipit tristique.</p>
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
            <div className="notice notice--red">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempor dolor at suscipit tristique.
              </p>
            </div>
            <div className="notice notice--yellow">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempor dolor at suscipit tristique.
              </p>
            </div>
            <div className="notice notice--green">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempor dolor at suscipit tristique.
              </p>
            </div>
            <div className="notice notice--blue u--margin-bottom-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempor dolor at suscipit tristique.
              </p>
            </div>
          </ExampleView>
          <Code language="html">
            {`<div class="notice notice--red">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dolor at suscipit tristique.</p>
</div>
<div class="notice notice--yellow">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dolor at suscipit tristique.</p>
</div>
<div class="notice notice--green">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dolor at suscipit tristique.</p>
</div>
<div class="notice notice--blue">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dolor at suscipit tristique.</p>
</div>`}
          </Code>
        </Example>
        <SubTitle id="notices-titles">Titles</SubTitle>
        <Description>
          Add a title to a notice by adding the <code>.notice__title</code>{' '}
          class to a heading or inline element.
        </Description>
        <Example>
          <ExampleView>
            <div className="notice notice--green">
              <h5 className="notice__title">
                This is a title for a success notice
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempor dolor at suscipit tristique.
              </p>
            </div>
            <div className="notice notice--red u--margin-bottom-0">
              <p>
                <span className="notice__title">Error</span> Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Donec tempor dolor at
                suscipit tristique.
              </p>
            </div>
          </ExampleView>
          <Code language="html">
            {`<div class="notice notice--green">
    <h5 class="notice__title">This is a title for a success notice</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dolor at suscipit tristique.</p>
</div>
<div class="notice notice--red">
    <p><span class="notice__title">Error</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dolor at suscipit tristique.</p>
</div>`}
          </Code>
        </Example>
        <SubTitle id="notices-dismissible">Dismissible</SubTitle>
        <Description>
          <p>
            To make a notice dismissible add the attribute{' '}
            <code>[data-notice-dismissible]</code> and prepend the notice with a{' '}
            <code>span.notice__close</code> or <code>a.notice__close</code> with
            the attribute <code>[data-notice-close]</code>.
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
              data-notice-dismissible
            >
              <span className="notice__close" data-notice-close />
              <h5 className="notice__title">This is a dismissible notice</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempor dolor at suscipit tristique.
              </p>
            </div>
          </ExampleView>
          <Code language="html">
            {`<div class="notice notice--blue" data-notice-dismissible>
    <span class="notice__close" data-notice-close></span>
    <h5 class="notice__title">This is a dismissible notice</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor dolor at suscipit tristique.</p>
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
        <Code language="javascript">
          {`$('#sample-notice').on('notice:afterHide', (event) => {
  // do something...
}); `}
        </Code>
      </Section>
    );
  }
}

export default Notices;
