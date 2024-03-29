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
import modal from '../framework/js/modal';

export default () => {
  useEffect(() => {
    modal('[data-modal]');
  }, []);

  return (
    <Section>
      <Title id="modals">Modals</Title>
      <Description>
        <p>
          In order to use modals you must import the library and call{' '}
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
          <code>data-modal</code> attribute must have a unique identifier as its
          value. The modal element must also include a child element with the{' '}
          <code>.modal__dialog</code> class, and the modal dialog must include a
          child element with the <code>.modal__content</code> class.
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
          <div
            id="modal-sample"
            className="modal"
            data-modal="modal-sample"
            aria-labelledby="modal-sample-label"
            role="dialog"
          >
            <div className="modal__dialog" role="document">
              <button
                type="button"
                className="modal__close"
                data-modal-close
                aria-label="Close"
              />
              <div className="modal__content">
                <header className="modal__header">
                  <h3 className="modal__title" id="modal-sample-label">
                    This is a modal title
                  </h3>
                </header>
                <section className="modal__body">
                  <p>{lorem(77)}</p>
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
          {`<div id="modal-sample" class="modal" data-modal="modal-sample" aria-labelledby="modal-sample-label" role="dialog">
    <div class="modal__dialog" role="document">
        <div class="modal__content">
            <button type="button" class="modal__close" data-modal-close aria-label="Close"></button>
            <header class="modal__header">
                <h2 class="modal__title" id="modal-sample-label">...</h2>
            </header>
            <section class="modal__body">
                <p>...</p>
            </section>
            <footer class="modal__footer u--text-align-right">
                <a href="#modal-extra-small" class="btn" data-modal-close>...</a>
            </footer>
        </div>
    </div>
</div>`}
        </Code>
      </Example>
      <SubTitle id="modals-showing-and-hiding">Showing &amp; Hiding</SubTitle>
      <Description>
        <p>
          To trigger a modal, simply create an anchor or button element (or any
          element really), and add the <code>data-modal-show</code> attribute to
          it. The value of the <code>data-modal-show</code> attribute should be
          set to the unique identifier for the modal you wish to show. Clicking
          on the element will now show the modal.
        </p>
        <p>
          To hide a modal&mdash;similar to showing the modal&mdash;add the{' '}
          <code>data-modal-hide</code> attribute (with the unique identifier for
          the modal as the value) to an element. Clicking on that element will
          now hide the modal.
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
      <Code language="html" collapsible={false}>
        {`<!-- show modal -->
<a href="#sample-modal" data-modal-show="sample-modal">...</a>
<!-- hide modal -->
<a href="#sample-modal" data-modal-hide="sample-modal">...</a>
<!-- toggle modal -->
<a href="#sample-modal" data-modal-toggle="sample-modal">...</a>
<!-- close modal - only works within [data-modal] -->
<a href="#sample-modal" data-modal-close>...</a>`}
      </Code>
      <SubTitle id="modals-sizes">Sizes</SubTitle>
      <Description>
        <p>
          The width of the modal dialog can be adjusted with size modifiers on
          the modal element. Available modifiers are <code>xs</code>,{' '}
          <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code> and{' '}
          <code>full</code>.{' '}
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
            aria-labelledby="modal-extra-small-label"
            role="dialog"
          >
            <div className="modal__dialog" role="document">
              <button
                type="button"
                className="modal__close"
                data-modal-close
                aria-label="Close"
              />
              <div className="modal__content">
                <header className="modal__header">
                  <h3 className="modal__title" id="modal-extra-small-label">
                    This is a modal title
                  </h3>
                </header>
                <section className="modal__body">
                  <p>{lorem(94)}</p>
                </section>
                <footer className="modal__footer u--text-align-right">
                  <a href="#modal-extra-small" className="btn" data-modal-close>
                    Close
                  </a>
                </footer>
              </div>
            </div>
          </div>

          <a href="#modal-small" className="btn" data-modal-show="modal-small">
            Small
          </a>
          <div
            id="modal-small"
            className="modal modal--sm"
            data-modal="modal-small"
            aria-labelledby="modal-small-label"
            role="dialog"
          >
            <div className="modal__dialog" role="document">
              <button
                type="button"
                className="modal__close"
                data-modal-close
                aria-label="Close"
              />
              <div className="modal__content">
                <header className="modal__header">
                  <h3 className="modal__title" id="modal-small-label">
                    This is a modal title
                  </h3>
                </header>
                <section className="modal__body">
                  <p>{lorem(94)}</p>
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
            aria-labelledby="modal-medium-label"
            role="dialog"
          >
            <div className="modal__dialog" role="document">
              <button
                type="button"
                className="modal__close"
                data-modal-close
                aria-label="Close"
              />
              <div className="modal__content">
                <header className="modal__header">
                  <h3 className="modal__title" id="modal-medium-label">
                    This is a modal title
                  </h3>
                </header>
                <section className="modal__body">
                  <p>{lorem(94)}</p>
                </section>
                <footer className="modal__footer u--text-align-right">
                  <a href="#modal-medium" className="btn" data-modal-close>
                    Close
                  </a>
                </footer>
              </div>
            </div>
          </div>

          <a href="#modal-large" className="btn" data-modal-show="modal-large">
            Large
          </a>
          <div
            id="modal-large"
            className="modal modal--lg"
            data-modal="modal-large"
            aria-labelledby="modal-large-label"
            role="dialog"
          >
            <div className="modal__dialog" role="document">
              <button
                type="button"
                className="modal__close"
                data-modal-close
                aria-label="Close"
              />
              <div className="modal__content">
                <header className="modal__header">
                  <h3 className="modal__title" id="modal-large-label">
                    This is a modal title
                  </h3>
                </header>
                <section className="modal__body">
                  <p>{lorem(94)}</p>
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
            aria-labelledby="modal-extra-large-label"
            role="dialog"
          >
            <div className="modal__dialog" role="document">
              <button
                type="button"
                className="modal__close"
                data-modal-close
                aria-label="Close"
              />
              <div className="modal__content">
                <header className="modal__header">
                  <h3 className="modal__title" id="modal-extra-large-label">
                    This is a modal title
                  </h3>
                </header>
                <section className="modal__body">
                  <p>{lorem(94)}</p>
                </section>
                <footer className="modal__footer u--text-align-right">
                  <a href="#modal-extra-large" className="btn" data-modal-close>
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
            aria-labelledby="modal-full-label"
            role="dialog"
          >
            <div className="modal__dialog" role="document">
              <button
                type="button"
                className="modal__close"
                data-modal-close
                aria-label="Close"
              />
              <div className="modal__content">
                <header className="modal__header">
                  <h3 className="modal__title" id="modal-full-label">
                    This is a modal title
                  </h3>
                </header>
                <section className="modal__body">
                  <p>{lorem(94)}</p>
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
          modal dialog vertically. By default, the modal is aligned to the top.
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
            aria-labelledby="modal-vertically-centered-label"
            role="dialog"
          >
            <div className="modal__dialog" role="document">
              <button
                type="button"
                className="modal__close"
                data-modal-close
                aria-label="Close"
              />
              <div className="modal__content">
                <header className="modal__header">
                  <h3
                    className="modal__title"
                    id="modal-vertically-centered-label"
                  >
                    This is a modal title
                  </h3>
                </header>
                <section className="modal__body">
                  <p>{lorem(13)}</p>
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
      <SubTitle id="modals-methods">Methods</SubTitle>
      <Description>
        <p>
          You can trigger the modal show, hide and toggle methods
          programmatically by using the jQuery "trigger" method with one of the
          modal elements as the selector.
        </p>
      </Description>
      <table className="table table--responsive table--bordered">
        <tbody>
          <tr>
            <td>
              <code>modal:show</code>
            </td>
            <td>Shows a given modal</td>
          </tr>
          <tr>
            <td>
              <code>modal:hide</code>
            </td>
            <td>Hides a given modal</td>
          </tr>
          <tr>
            <td>
              <code>modal:toggle</code>
            </td>
            <td>Toggles a given modal</td>
          </tr>
        </tbody>
      </table>
      <Code language="javascript" collapsible={false}>
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
      <table className="table table--responsive table--bordered">
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
      <Code language="javascript" collapsible={false}>
        {`$('[data-modal="sample-modal"]').on('modal:beforeShow', (event) => {
  // do something...
}); `}
      </Code>
    </Section>
  );
};
