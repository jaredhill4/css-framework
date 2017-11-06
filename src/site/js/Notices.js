import React, { Component } from 'react';
import { Section, Title, SubTitle, Description, Example } from './Framework';
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
          <div className="notice u--margin-bottom-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempor dolor at suscipit tristique.
            </p>
          </div>
        </Example>
        <SubTitle id="notices-colors">Colors</SubTitle>
        <Description>
          Adjust the state/color of the notice by adding a color modifier class
          like <code>.notice--red</code>.
        </Description>
        <Example>
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
        </Example>
        <SubTitle id="notices-titles">Titles</SubTitle>
        <Description>
          Add a title to a notice by adding the <code>.notice__title</code>{' '}
          class to a heading or inline element.
        </Description>
        <Example>
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
              <span className="notice__title">Error</span> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Donec tempor dolor at suscipit
              tristique.
            </p>
          </div>
        </Example>
        <SubTitle id="notices-dismissible">Dismissible</SubTitle>
        <Description>
          <p>
            To make a notice dismissible add the attribute{' '}
            <code>[data-notice-dismissible]</code> and prepend the notice with a{' '}
            <code>span.notice__close</code> or <code>a.notice__close</code>.
          </p>
          <p>
            In order to use dismissible notices you must import the library and
            call <code>alerts('[data-tooltip]');</code>
          </p>
        </Description>
        <Example>
          <div
            className="notice notice--blue u--margin-bottom-0"
            data-notice-dismissible
          >
            <span className="notice__close" />
            <h5 className="notice__title">This is a dismissible notice</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempor dolor at suscipit tristique.
            </p>
          </div>
        </Example>
      </Section>
    );
  }
}

export default Notices;
