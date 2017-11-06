import React from 'react';
import { Section, Title, SubTitle, Description, Example } from './Framework';

const Notices = () =>
  <Section>
    <Title id="notices">Notices</Title>
    <Description>
      To create an alert-style callout, add a <code>.notice</code> class to a{' '}
      <code>div</code> or other block-level element.
    </Description>
    <Example>
      <div className="notice u--margin-bottom-0">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          dolor at suscipit tristique.
        </p>
      </div>
    </Example>
    <SubTitle id="notices-colors">Colors</SubTitle>
    <Description>
      Adjust the state/color of the notice by adding a color modifier class like{' '}
      <code>.notice--red</code>.
    </Description>
    <Example>
      <div className="notice notice--red">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          dolor at suscipit tristique.
        </p>
      </div>
      <div className="notice notice--yellow">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          dolor at suscipit tristique.
        </p>
      </div>
      <div className="notice notice--green">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          dolor at suscipit tristique.
        </p>
      </div>
      <div className="notice notice--blue u--margin-bottom-0">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          dolor at suscipit tristique.
        </p>
      </div>
    </Example>
    <SubTitle id="notices-titles">Titles</SubTitle>
    <Description>
      Add a title to a notice by adding the <code>.notice__title</code> class to
      a heading or inline element.
    </Description>
    <Example>
      <div className="notice notice--green">
        <h5 className="notice__title">This is a title for a success notice</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          dolor at suscipit tristique.
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
      To make a notice dismissible add a <code>span</code> or <code>a</code> tag
      with the <code>.notice__close</code> class to the beginning of the notice.
      {
        // TODO: Add additional instructions about making a
        // notice dismissable once we have completed the JS
        // module associated with this component
      }
    </Description>
    <Example>
      <div className="notice notice--blue u--margin-bottom-0">
        <span className="notice__close" />
        <h5 className="notice__title">This is a dismissable notice</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          dolor at suscipit tristique.
        </p>
      </div>
    </Example>
  </Section>;

export default Notices;
