import React, { Component } from 'react';
import { Section, Title, SubTitle, Description, Example } from './Framework';
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
          <Example>
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
              tabIndex="-1"
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
                    <a href="#modal-sample" className="btn" data-modal-close>
                      Close
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </Example>
          <pre>
            &lt;div id="modal-sample" className="modal"
            data-modal="modal-sample"&gt;<br />
            {'  '}&lt;div className="modal__dialog"&gt;<br />
            {'    '}&lt;div className="modal__content"&gt;<br />
            {'      '}&lt;span className="modal__close"
            data-modal-close&gt;&lt;/span&gt;<br />
            {'      '}&lt;header className="modal__header"&gt;<br />
            {'        '}&lt;h2 className="modal__title"&gt;This is a modal
            title&lt;/h2&gt;<br />
            {'      '}&lt;/header&gt;<br />
            {'      '}&lt;section className="modal__body"&gt;<br />
            {'        '}&lt;p&gt;Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin magna mi, posuere in lectus quis, auctor
            condimentum est. Proin blandit mauris at nisi accumsan, at aliquam
            quam blandit.&lt;/p&gt;<br />
            {'      '}&lt;/section&gt;<br />
            {'      '}&lt;footer className="modal__footer
            u--text-align-right"&gt;<br />
            {'        '}&lt;a href="#modal-extra-small" className="btn"
            data-modal-close&gt;Close&lt;/a&gt;<br />
            {'      '}&lt;/footer&gt;<br />
            {'    '}&lt;/div&gt;<br />
            {'  '}&lt;/div&gt;<br />
            &lt;/div&gt;
          </pre>
        </Description>
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
          <pre>
            &lt;!-- show modal --&gt;<br />
            &lt;a href="#sample-modal" data-modal-show="sample-modal"&gt;Show
            Modal&lt;/a&gt;<br />
            <br />
            &lt;!-- hide modal --&gt;<br />
            &lt;a href="#sample-modal" data-modal-hide="sample-modal"&gt;Hide
            Modal&lt;/a&gt;<br />
            <br />
            &lt;!-- toggle modal --&gt;<br />
            &lt;a href="#sample-modal"
            data-modal-toggle="sample-modal"&gt;Toggle Modal&lt;/a&gt;<br />
            <br />
            &lt;!-- close modal - only works within modal --&gt;<br />
            &lt;a href="#sample-modal" data-modal-close&gt;Close Modal&lt;/a&gt;<br
            />
          </pre>
        </Description>
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
            tabIndex="-1"
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
                    est. Proin blandit mauris at nisi accumsan, at aliquam quam
                    blandit.
                  </p>
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
            tabIndex="-1"
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
                    est. Proin blandit mauris at nisi accumsan, at aliquam quam
                    blandit.
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
            tabIndex="-1"
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
                    est. Proin blandit mauris at nisi accumsan, at aliquam quam
                    blandit.
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

          <a href="#modal-large" className="btn" data-modal-show="modal-large">
            Large
          </a>
          <div
            id="modal-large"
            className="modal modal--lg"
            data-modal="modal-large"
            tabIndex="-1"
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
                    est. Proin blandit mauris at nisi accumsan, at aliquam quam
                    blandit.
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
            tabIndex="-1"
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
                    est. Proin blandit mauris at nisi accumsan, at aliquam quam
                    blandit.
                  </p>
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
            tabIndex="-1"
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
                    est. Proin blandit mauris at nisi accumsan, at aliquam quam
                    blandit.
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
            tabIndex="-1"
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
                    est. Proin blandit mauris at nisi accumsan, at aliquam quam
                    blandit.
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
        </Example>
        <SubTitle id="modals-listeners">Listeners</SubTitle>
        <Description>
          <p>
            You can trigger the modal show, hide and toggle listeners
            programmatically by using the jQuery "trigger" method with one of
            the modal elements as the selector.
          </p>
          <pre>
            &lt;!-- show modal --&gt;<br />
            $('[data-modal="sample-modal"]').trigger('modal:show');<br />
            <br />
            &lt;!-- hide modal --&gt;<br />
            $('[data-modal="sample-modal"]').trigger('modal:hide');<br />
            <br />
            &lt;!-- toggle modal --&gt;<br />
            $('[data-modal="sample-modal"]').trigger('modal:toggle');<br />
          </pre>
          <h4>Events</h4>
          <p>
            You may also hook into events that are fired by the modal. These
            events include:
          </p>
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
          <pre>
            {"$('#sample-modal').on('modal:beforeShow', (event) => {"}
            <br />
            {'  // do something...'}
            <br />
            {'});'}
          </pre>
        </Description>
      </Section>
    );
  }
}

export default Modals;
