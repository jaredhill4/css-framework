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
import modals from '../../framework/js/modals';

class Modals extends Component {
  componentDidMount() {
    modals('[data-modal]');
  }

  render() {
    return (
      <Section>
        <Title id="modals">Modals</Title>
        <Description>
          <p>
            In order to use dropdowns you must import the library and call{' '}
            <code>modals('[data-modal]');</code>
          </p>
          <p>
            Modals are dialog boxes that appear above the rest of the content on
            the page. They can contain simple content or more dynamic elements
            like forms.
          </p>
        </Description>
        <SubTitle id="modals-setup">Setup</SubTitle>
        <Description>
          <p>
            To create a modal you need an element with the <code>.modal</code>{' '}
            class and the <code>data-modal</code> attribute. The{' '}
            <code>data-modal</code> attribute must have a unique identifier as
            its value. The modal element must also include a child element with
            the <code>.modal__dialog</code> class, and the modal dialog must
            include a child element with the <code>.modal__content</code> class.
          </p>
          <p>
            Optionally, you may also include the following elements within the
            modal dialog element:
          </p>
          <ul>
            <li>
              <code>.modal__close</code>
            </li>
            <li>
              <code>.modal__header</code>
            </li>
            <li>
              <code>.modal__title</code>
            </li>
            <li>
              <code>.modal__body</code>
            </li>
            <li>
              <code>.modal__footer</code>
            </li>
          </ul>
        </Description>
        <Example>
          <ExampleView>
            <a
              href="#modal-sample"
              className="btn"
              data-modal-show="modal-sample"
            >
              Sample Modal
            </a>
            <div id="modal-sample" className="modal" data-modal="modal-sample">
              <div className="modal__dialog">
                <span className="modal__close" data-modal-close />
                <div className="modal__content">
                  <header className="modal__header">
                    <h3 className="modal__title">This is a modal title</h3>
                  </header>
                  <section className="modal__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin magna mi, posuere in lectus quis, auctor condimentum
                      est. Proin blandit mauris at nisi accumsan, at aliquam
                      quam blandit.
                    </p>
                  </section>
                  <footer className="modal__footer u--text-align-right">
                    <a href="#modal-sample" className="btn" data-modal-close>
                      Close
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </ExampleView>
          <Code language="html">
            {`<div id="modal-sample" class="modal" data-modal="modal-sample">
    <div class="modal__dialog">
        <div class="modal__content">
            <span class="modal__close" data-modal-close></span>
            <header class="modal__header">
                <h2 class="modal__title">This is a modal title</h2>
            </header>
            <section class="modal__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin magna mi, posuere in lectus quis, auctor condimentum est. Proin blandit mauris at nisi accumsan, at aliquam quam blandit.</p>
            </section>
            <footer class="modal__footer u--text-align-right">
                <a href="#modal-extra-small" class="btn" data-modal-close>Close</a>
            </footer>
        </div>
    </div>
</div>`}
          </Code>
        </Example>
        <SubTitle id="modals-showing-and-hiding">Showing &amp; Hiding</SubTitle>
        <Description>
          <p>
            To trigger a modal, simply create an anchor or button element (or
            any element really), and add the <code>data-modal-show</code>{' '}
            attribute to it. The value of the <code>data-modal-show</code>{' '}
            attribute should be set to the unique identifier for the modal you
            wish to show. Clicking on the element will now show the modal.
          </p>
          <p>
            To hide a modal&mdash;similar to showing the modal&mdash;add the{' '}
            <code>data-modal-hide</code> attribute (with the unique identifier
            for the modal as the value) to an element. Clicking on that element
            will now hide the modal.
          </p>
          <p>
            To toggle a modal (hide and show) add the{' '}
            <code>data-modal-toggle</code> attribute to an element. Clicking on
            that element will now toggle the modal.
          </p>
          <p>
            To close the modal from within the modal itself, add the{' '}
            <code>data-modal-close</code> attribute to an element. No value is
            necessary.
          </p>
        </Description>
        <Code language="html">
          {`<!-- show modal -->
<a href="#sample-modal" data-modal-show="sample-modal">Show Modal</a>
<!-- hide modal -->
<a href="#sample-modal" data-modal-hide="sample-modal">Hide Modal</a>
<!-- toggle modal -->
<a href="#sample-modal" data-modal-toggle="sample-modal">Toggle Modal</a>
<!-- close modal - only works within [data-modal] -->
<a href="#sample-modal" data-modal-close>Close Modal</a>`}
        </Code>
        <SubTitle id="modals-sizes">Sizes</SubTitle>
        <Description>
          <p>
            The width of the modal dialog can be adjusted with size modifiers on
            the modal element. Available modifiers are <code>xs</code>,{' '}
            <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>{' '}
            and <code>full</code>.{' '}
            <em>
              The default size is <code>sm</code>.
            </em>
          </p>
        </Description>
        <Example>
          <ExampleView>
            <a
              href="#modal-extra-small"
              className="btn"
              data-modal-show="modal-extra-small"
            >
              Extra small
            </a>
            <div
              id="modal-extra-small"
              className="modal modal--xs"
              data-modal="modal-extra-small"
            >
              <div className="modal__dialog">
                <span className="modal__close" data-modal-close />
                <div className="modal__content">
                  <header className="modal__header">
                    <h3 className="modal__title">This is a modal title</h3>
                  </header>
                  <section className="modal__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin magna mi, posuere in lectus quis, auctor condimentum
                      est. Proin blandit mauris at nisi accumsan, at aliquam
                      quam blandit.
                    </p>
                  </section>
                  <footer className="modal__footer u--text-align-right">
                    <a
                      href="#modal-extra-small"
                      className="btn"
                      data-modal-close
                    >
                      Close
                    </a>
                  </footer>
                </div>
              </div>
            </div>

            <a
              href="#modal-small"
              className="btn"
              data-modal-show="modal-small"
            >
              Small
            </a>
            <div
              id="modal-small"
              className="modal modal--sm"
              data-modal="modal-small"
            >
              <div className="modal__dialog">
                <span className="modal__close" data-modal-close />
                <div className="modal__content">
                  <header className="modal__header">
                    <h3 className="modal__title">This is a modal title</h3>
                  </header>
                  <section className="modal__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin magna mi, posuere in lectus quis, auctor condimentum
                      est. Proin blandit mauris at nisi accumsan, at aliquam
                      quam blandit.
                    </p>
                  </section>
                  <footer className="modal__footer u--text-align-right">
                    <a href="#modal-small" className="btn" data-modal-close>
                      Close
                    </a>
                  </footer>
                </div>
              </div>
            </div>

            <a
              href="#modal-medium"
              className="btn"
              data-modal-show="modal-medium"
            >
              Medium
            </a>
            <div
              id="modal-medium"
              className="modal modal--md"
              data-modal="modal-medium"
            >
              <div className="modal__dialog">
                <span className="modal__close" data-modal-close />
                <div className="modal__content">
                  <header className="modal__header">
                    <h3 className="modal__title">This is a modal title</h3>
                  </header>
                  <section className="modal__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin magna mi, posuere in lectus quis, auctor condimentum
                      est. Proin blandit mauris at nisi accumsan, at aliquam
                      quam blandit.
                    </p>
                  </section>
                  <footer className="modal__footer u--text-align-right">
                    <a href="#modal-medium" className="btn" data-modal-close>
                      Close
                    </a>
                  </footer>
                </div>
              </div>
            </div>

            <a
              href="#modal-large"
              className="btn"
              data-modal-show="modal-large"
            >
              Large
            </a>
            <div
              id="modal-large"
              className="modal modal--lg"
              data-modal="modal-large"
            >
              <div className="modal__dialog">
                <span className="modal__close" data-modal-close />
                <div className="modal__content">
                  <header className="modal__header">
                    <h3 className="modal__title">This is a modal title</h3>
                  </header>
                  <section className="modal__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin magna mi, posuere in lectus quis, auctor condimentum
                      est. Proin blandit mauris at nisi accumsan, at aliquam
                      quam blandit.
                    </p>
                  </section>
                  <footer className="modal__footer u--text-align-right">
                    <a href="#modal-large" className="btn" data-modal-close>
                      Close
                    </a>
                  </footer>
                </div>
              </div>
            </div>

            <a
              href="#modal-extra-large"
              className="btn"
              data-modal-show="modal-extra-large"
            >
              Extra large
            </a>
            <div
              id="modal-extra-large"
              className="modal modal--xl"
              data-modal="modal-extra-large"
            >
              <div className="modal__dialog">
                <span className="modal__close" data-modal-close />
                <div className="modal__content">
                  <header className="modal__header">
                    <h3 className="modal__title">This is a modal title</h3>
                  </header>
                  <section className="modal__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin magna mi, posuere in lectus quis, auctor condimentum
                      est. Proin blandit mauris at nisi accumsan, at aliquam
                      quam blandit.
                    </p>
                  </section>
                  <footer className="modal__footer u--text-align-right">
                    <a
                      href="#modal-extra-large"
                      className="btn"
                      data-modal-close
                    >
                      Close
                    </a>
                  </footer>
                </div>
              </div>
            </div>

            <a href="#modal-full" className="btn" data-modal-show="modal-full">
              Full
            </a>
            <div
              id="modal-full"
              className="modal modal--full"
              data-modal="modal-full"
            >
              <div className="modal__dialog">
                <span className="modal__close" data-modal-close />
                <div className="modal__content">
                  <header className="modal__header">
                    <h3 className="modal__title">This is a modal title</h3>
                  </header>
                  <section className="modal__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin magna mi, posuere in lectus quis, auctor condimentum
                      est. Proin blandit mauris at nisi accumsan, at aliquam
                      quam blandit.
                    </p>
                  </section>
                  <footer className="modal__footer u--text-align-right">
                    <a href="#modal-full" className="btn" data-modal-close>
                      Close
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </ExampleView>
        </Example>
        <SubTitle id="modals-vertical-alignment">Vertical Alignment</SubTitle>
        <Description>
          <p>
            Add the <code>.modal--valign-center</code> modifier to center the
            modal dialog vertically. By default, the modal is aligned to the
            top.
          </p>
        </Description>
        <Example>
          <ExampleView>
            <a
              href="#modal-vertically-centered"
              className="btn"
              data-modal-show="modal-vertically-centered"
            >
              Vertically Centered
            </a>
            <div
              id="modal-vertically-centered"
              className="modal modal--valign-center"
              data-modal="modal-vertically-centered"
            >
              <div className="modal__dialog">
                <span className="modal__close" data-modal-close />
                <div className="modal__content">
                  <header className="modal__header">
                    <h3 className="modal__title">This is a modal title</h3>
                  </header>
                  <section className="modal__body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin magna mi, posuere in lectus quis, auctor condimentum
                      est. Proin blandit mauris at nisi accumsan, at aliquam
                      quam blandit.
                    </p>
                  </section>
                  <footer className="modal__footer u--text-align-right">
                    <a
                      href="#modal-vertically-centered"
                      className="btn"
                      data-modal-close
                    >
                      Close
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </ExampleView>
        </Example>
        <SubTitle id="modals-listeners">Methods</SubTitle>
        <Description>
          <p>
            You can trigger the modal show, hide and toggle methods
            programmatically by using the jQuery "trigger" method with one of
            the modal elements as the selector.
          </p>
        </Description>
        <Code language="javascript">
          {`// show modal
$('[data-modal="sample-modal"]').trigger('modal:show');
// hide modal
$('[data-modal="sample-modal"]').trigger('modal:hide');
// toggle modal
$('[data-modal="sample-modal"]').trigger('modal:toggle');`}
        </Code>
        <SubTitle id="modals-events">Events</SubTitle>
        <Description>
          <p>
            You may also hook into events that are fired by the modal. These
            events include:
          </p>
        </Description>
        <table className="table table--bordered">
          <tbody>
            <tr>
              <td>
                <code>modal:beforeShow</code>
              </td>
              <td>fired immediately when "show" is called</td>
            </tr>
            <tr>
              <td>
                <code>modal:afterShow</code>
              </td>
              <td>fired after "show" has completed</td>
            </tr>
            <tr>
              <td>
                <code>modal:beforeHide</code>
              </td>
              <td>fired immediately when "hide" is called</td>
            </tr>
            <tr>
              <td>
                <code>modal:afterHide</code>
              </td>
              <td>fired after "hide" has completed</td>
            </tr>
          </tbody>
        </table>
        <Code language="javascript">
          {`$('[data-modal="sample-modal"]').on('modal:beforeShow', (event) => {
  // do something...
}); `}
        </Code>
      </Section>
    );
  }
}

export default Modals;
