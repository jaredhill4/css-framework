import React, { Component } from 'react';
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
import toggle from '../../framework/js/toggle';

export default class Toggles extends Component {
  componentDidMount() {
    toggle('[data-toggle-target]');
  }

  render() {
    return (
      <Section>
        <Title id="toggles">Toggles</Title>
        <Description>
          <p>
            Use the <strong>toggle</strong> component to toggle the visibility
            of sections of content.
          </p>
        </Description>
        <SubTitle id="toggles-introduction">Introduction</SubTitle>
        <Description>
          <p>
            In order to use toggles you must import the library and call{' '}
            <code>toggles('[data-toggle-target]');</code>
          </p>
          <p>
            Toggles require at least two separate elements to work: the{' '}
            <em>target</em> and the <em>switch</em>.
          </p>
          <p>
            The <em>target</em>, at a minimum, must have the{' '}
            <code>data-toggle-target</code> attribute with a unique identifier
            as its value. (It should also have the class{' '}
            <code>.toggle__target</code>, but if you forget to add the class, it
            will be added dynamically on page load.)
          </p>
          <p>
            The <em>switch</em>, must have the <code>data-toggle-switch</code>{' '}
            attribute with the value set to the same unique identifier as the
            target to be toggled.
          </p>
          <p>
            When a switch is clicked and the target element is visible, the{' '}
            <code>.toggle__switch--on</code> class will be added to the switch
            element to allow custom styling to be added to the switch element.
          </p>
          <p>
            <em>
              Note: It is important not to place any padding, margin or border
              on the target element, as this could cause an undesireable jumpy
              effect as the element is toggled. Therefore, it is recommended to
              place any necessary block styling on an element nested within the
              target element.
            </em>
          </p>
        </Description>
        <SubTitle id="toggle-simple">Simple Toggle</SubTitle>
        <p>
          Create a simple toggle using the instructions above, and you will see
          something like this:
        </p>
        <Example>
          <ExampleView>
            <strong data-toggle-switch="simple-toggle-element">
              Simple Toggle
            </strong>
            <div
              className="toggle__target"
              data-toggle-target="simple-toggle-element"
            >
              {lorem(113)}
            </div>
          </ExampleView>
          <Code language="html">
            {`<strong data-toggle-switch="simple-toggle-element">...</strong>
<div class="toggle__target" data-toggle-target="simple-toggle-element">
    ...
</div>`}
          </Code>
        </Example>

        <SubTitle id="toggles-accordion-basic">Basic Accordion</SubTitle>
        <Description>
          <p>
            The toggle component may also be used to construct{' '}
            <strong>accordions</strong>.
          </p>
          <p>
            You can achieve this by grouping (nesting) multiple{' '}
            <em>switches</em> and <em>targets</em> inside a parent element with
            the <code>data-toggle-group</code> attribute. The{' '}
            <code>data-toggle-group</code> must have a unique identifier as its
            value.
          </p>
          <p>
            Finally, add the <code>data-toggle-parent</code> data attribute to
            each of the switches in the group, and make sure the attribute value
            is equal to the <code>data-toggle-group</code> attribute of the
            parent.
          </p>
          <p>
            By default, only one target in the group may be open at a time. To
            allow multiple targets to be open at once, add{' '}
            <code>data-toggle-group-allow-multiple="true"</code> to the parent
            element.
          </p>
          <p>
            See below for an example of a basic, unstyled accordion using this
            method.
          </p>
        </Description>
        <Example>
          <ExampleView>
            <div data-toggle-group="basic-accordion">
              <div>
                <strong
                  data-toggle-switch="basic-accordion-item-1"
                  data-toggle-parent="basic-accordion"
                >
                  This is an accordion header.
                </strong>
                <div
                  className="toggle__target"
                  data-toggle-target="basic-accordion-item-1"
                >
                  {lorem(114)}
                </div>
              </div>

              <div>
                <strong
                  data-toggle-switch="basic-accordion-item-2"
                  data-toggle-parent="basic-accordion"
                >
                  This is an accordion header.
                </strong>
                <div
                  className="toggle__target"
                  data-toggle-target="basic-accordion-item-2"
                >
                  {lorem(115)}
                </div>
              </div>

              <div>
                <strong
                  data-toggle-switch="basic-accordion-item-3"
                  data-toggle-parent="basic-accordion"
                >
                  This is an accordion header.
                </strong>
                <div
                  className="toggle__target"
                  data-toggle-target="basic-accordion-item-3"
                >
                  {lorem(116)}
                </div>
              </div>
            </div>
          </ExampleView>
          <Code language="html">
            {`<div data-toggle-group="basic-accordion">
    <div>
        <strong data-toggle-switch="basic-accordion-item-1" data-toggle-parent="basic-accordion">
            ...
        </strong>
        <div class="toggle__target" data-toggle-target="basic-accordion-item-1">
            ...
        </div>
    </div>
    <div>
        <strong data-toggle-switch="basic-accordion-item-2" data-toggle-parent="basic-accordion">
            ...
        </strong>
        <div class="toggle__target" data-toggle-target="basic-accordion-item-2">
            ...
        </div>
    </div>
    <div>
        <strong data-toggle-switch="basic-accordion-item-3" data-toggle-parent="basic-accordion">
            ...
        </strong>
        <div class="toggle__target" data-toggle-target="basic-accordion-item-3">
            ...
        </div>
    </div>
</div>`}
          </Code>
        </Example>

        <SubTitle id="toggles-accordion-styled">Styled Accordion</SubTitle>
        <Description>
          <p>
            You may also pair the <strong>toggle</strong> component with our
            built-in <strong>accordion</strong> CSS classes, to create a styled
            accordion.
          </p>
          <p>
            View the example and code below to see how the mark-up should look.
          </p>
        </Description>
        <Example>
          <ExampleView>
            <dl className="accordion" data-toggle-group="styled-accordion">
              <dt
                className="accordion__header"
                data-toggle-switch="styled-accordion-item-1"
                data-toggle-parent="styled-accordion"
              >
                <h5 className="u--margin-0">This is an accordion header.</h5>
              </dt>
              <dd
                className="toggle__target"
                data-toggle-target="styled-accordion-item-1"
              >
                <div className="accordion__content">{lorem(117)}</div>
              </dd>

              <dt
                className="accordion__header"
                data-toggle-switch="styled-accordion-item-2"
                data-toggle-parent="styled-accordion"
              >
                <h5 className="u--margin-0">This is an accordion header.</h5>
              </dt>
              <dd
                className="toggle__target"
                data-toggle-target="styled-accordion-item-2"
              >
                <div className="accordion__content">{lorem(118)}</div>
              </dd>

              <dt
                className="accordion__header"
                data-toggle-switch="styled-accordion-item-3"
                data-toggle-parent="styled-accordion"
              >
                <h5 className="u--margin-0">This is an accordion header.</h5>
              </dt>
              <dd
                className="toggle__target"
                data-toggle-target="styled-accordion-item-3"
              >
                <div className="accordion__content">{lorem(119)}</div>
              </dd>
            </dl>
          </ExampleView>
          <Code language="html">
            {`<dl class="accordion" data-toggle-group="styled-accordion">
    <dt class="accordion__header" data-toggle-switch="styled-accordion-item-1" data-toggle-parent="styled-accordion">
        <h5 class="u--margin-0">...</h5>
    </dt>
    <dd class="toggle__target" data-toggle-target="styled-accordion-item-1" data-toggle-parent="styled-accordion">
        <div class="accordion__content">...</div>
    </dd>
    <dt class="accordion__header" data-toggle-switch="styled-accordion-item-2" data-toggle-parent="styled-accordion">
        <h5 class="u--margin-0">...</h5>
    </dt>
    <dd class="toggle__target" data-toggle-target="styled-accordion-item-2" data-toggle-parent="styled-accordion">
        <div class="accordion__content">...</div>
    </dd>
    <dt class="accordion__header" data-toggle-switch="styled-accordion-item-3" data-toggle-parent="styled-accordion">
        <h5 class="u--margin-0">...</h5>
    </dt>
    <dd class="toggle__target" data-toggle-target="styled-accordion-item-3">
        <div class="accordion__content">...</div>
    </dd>
</dl>`}
          </Code>
        </Example>

        <SubTitle id="toggles-tabs">Tabs</SubTitle>
        <Description>
          <p>
            Similar to accordions, you can also create <strong>tabs</strong>{' '}
            using toggle groups.
          </p>
          <p>
            To ensure that one tab is always active and its content visible, add{' '}
            <code>data-toggle-group-require-active</code> to the parent{' '}
            <code>data-toggle-group</code> element. This will prevent the active
            tab from closing when clicked.
          </p>
          <p>
            Finally, add <code>data-toggle-target-transition="fade"</code> to
            each of the <code>data-toggle-target</code> elements to change the
            transition to "fade."
          </p>
        </Description>
        <Example>
          <ExampleView>
            <div
              className="tabs"
              data-toggle-group="tabs"
              data-toggle-group-require-active
            >
              <nav className="tabs__nav">
                <ul>
                  <li>
                    <button
                      className="toggle__switch--on"
                      data-toggle-switch="tab-1"
                      data-toggle-parent="tabs"
                    >
                      Tab 1
                    </button>
                  </li>
                  <li>
                    <button
                      data-toggle-switch="tab-2"
                      data-toggle-parent="tabs"
                    >
                      Tab 2
                    </button>
                  </li>
                  <li>
                    <button
                      data-toggle-switch="tab-3"
                      data-toggle-parent="tabs"
                    >
                      Tab 3
                    </button>
                  </li>
                </ul>
              </nav>

              <div className="tabs__content">
                <div
                  className="toggle__target toggle__target--visible"
                  data-toggle-target="tab-1"
                  data-toggle-target-transition="fade"
                >
                  {lorem(120)}
                </div>
                <div
                  className="toggle__target"
                  data-toggle-target="tab-2"
                  data-toggle-target-transition="fade"
                >
                  {lorem(121)}
                </div>
                <div
                  className="toggle__target"
                  data-toggle-target="tab-3"
                  data-toggle-target-transition="fade"
                >
                  {lorem(122)}
                </div>
              </div>
            </div>
          </ExampleView>
          <Code language="html">
            {`<div class="tabs" data-toggle-group="tabs" data-toggle-group-require-active>
    <nav class="tabs__nav">
        <ul>
            <li>
                <button class="toggle__switch--on" data-toggle-switch="tab-1" data-toggle-parent="tabs">...</button>
            </li>
            <li>
                <button data-toggle-switch="tab-2" data-toggle-parent="tabs">...</button>
            </li>
            <li>
                <button data-toggle-switch="tab-3" data-toggle-parent="tabs">...</button>
            </li>
        </ul>
    </nav>
    <div class="tabs__content">
        <div class="toggle__target toggle__target--visible" data-toggle-target="tab-1" data-toggle-target-transition="fade">
            ...
        </div>
        <div class="toggle__target" data-toggle-target="tab-2" data-toggle-target-transition="fade">
            ...
        </div>
        <div class="toggle__target" data-toggle-target="tab-3" data-toggle-target-transition="fade">
            ...
        </div>
    </div>
</div>`}
          </Code>
        </Example>

        <SubTitle id="toggles-listeners">Methods</SubTitle>
        <Description>
          <p>
            You can trigger the toggle show, hide and toggle methods
            programmatically by using the jQuery "trigger" method with one of
            the toggle <em>target</em> elements as the selector.
          </p>
          <p>
            <em>
              Note: For the group methods to work properly, the{' '}
              <code>data-toggle-group-allow-multiple</code> attribute must be
              set to <code>true</code> on parent element.
            </em>
          </p>
        </Description>
        <table className="table table--responsive table--bordered">
          <tbody>
            <tr>
              <td>
                <code>toggle:show</code>
              </td>
              <td>Shows a given toggle target</td>
            </tr>
            <tr>
              <td>
                <code>toggle:hide</code>
              </td>
              <td>Hides a given toggle target</td>
            </tr>
            <tr>
              <td>
                <code>toggle:toggle</code>
              </td>
              <td>Toggles a given toggle target</td>
            </tr>
            <tr>
              <td>
                <code>toggle:groupShowAll</code>
              </td>
              <td>Shows all the targets in the given toggle group</td>
            </tr>
            <tr>
              <td>
                <code>toggle:groupHideAll</code>
              </td>
              <td>Hides all the targets in the given toggle group</td>
            </tr>
          </tbody>
        </table>
        <Code language="javascript" collapsible={false}>
          {`// show toggle target
$('[data-toggle-target="simple-toggle-element"]').trigger('toggle:show');
// show all targets in toggle group
$('[data-toggle-group="basic-accordion"]').trigger('toggle:groupShowAll');`}
        </Code>

        <SubTitle id="toggles-events">Events</SubTitle>
        <Description>
          <p>
            You may also hook into events that are fired by the toggle{' '}
            <em>target</em> element. These events include:
          </p>
        </Description>
        <table className="table table--responsive table--bordered">
          <tbody>
            <tr>
              <td>
                <code>toggle:beforeShow</code>
              </td>
              <td>fired immediately when "show" is called</td>
            </tr>
            <tr>
              <td>
                <code>toggle:afterShow</code>
              </td>
              <td>fired after "show" has completed</td>
            </tr>
            <tr>
              <td>
                <code>toggle:beforeHide</code>
              </td>
              <td>fired immediately when "hide" is called</td>
            </tr>
            <tr>
              <td>
                <code>toggle:afterHide</code>
              </td>
              <td>fired after "hide" has completed</td>
            </tr>
          </tbody>
        </table>
        <Code language="javascript" collapsible={false}>
          {`$('[data-toggle-target="simple-toggle-element"]').on('toggle:beforeShow', (event) => {
  // do something...
}); `}
        </Code>
      </Section>
    );
  }
}
