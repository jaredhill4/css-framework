// @flow

import React, { useEffect } from 'react';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code
} from '../components';
import dropdown from '../framework/js/dropdown';

export default () => {
  useEffect(() => {
    dropdown('[data-dropdown]');
  }, []);

  return (
    <Section>
      <Title id="dropdowns">Dropdowns</Title>
      <Description>
        Dropdowns are overlay elements that display a list of links.
      </Description>
      <SubTitle id="dropdowns-setup">Setup</SubTitle>
      <Description>
        <p>
          In order to use dropdowns you must import the library and call{' '}
          <code>dropdowns('[data-dropdown]');</code>
        </p>
      </Description>
      <Description>
        <p>
          To create a dropdown you need a <code>div.dropdown</code> element with
          a <code>[data-dropdown]</code> attribute. The{' '}
          <code>[data-dropdown]</code> attribute must have a unique identifier
          as its value. The dropdown element can have children of{' '}
          <code>a.dropdown__item</code> or <code>div.dropdown__divider</code>.
        </p>
      </Description>
      <SubTitle id="dropdowns-showing-hiding">Showing &amp; Hiding</SubTitle>
      <Description>
        <p>
          A dropdown toggle can be created by adding a{' '}
          <code>[data-dropdown-toggle]</code> attribute to an element that
          points to a corresponding <code>[data-dropdown]</code>.
        </p>
      </Description>
      <Example>
        <ExampleView>
          <button
            type="button"
            className="btn"
            data-dropdown-toggle="dropdown-example-1"
            id="dropdown-example-1-label"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div
            className="dropdown"
            data-dropdown="dropdown-example-1"
            aria-labelledby="dropdown-example-1-label"
          >
            <a href="#dropdown-example-link-1" className="dropdown__item">
              Link 1
            </a>
            <a href="#dropdown-example-link-2" className="dropdown__item">
              Link 2
            </a>
            <a href="#dropdown-example-link-3" className="dropdown__item">
              Link 3
            </a>
            <div className="dropdown__divider" />
            <a href="#dropdown-example-link-4" className="dropdown__item">
              Link 4
            </a>
          </div>
        </ExampleView>
        <Code language="html">
          {`<button type="button" class="btn" data-dropdown-toggle="dropdown-example-1" id="dropdown-example-1-label" aria-haspopup="true" aria-expanded="false">...</button>
<div class="dropdown" data-dropdown="dropdown-example-1" aria-labelledby="dropdown-example-1-label">
    <a href="#" class="dropdown__item">...</a>
    <a href="#" class="dropdown__item">...</a>
    <a href="#" class="dropdown__item">...</a>
    <div class="dropdown__divider" />
    <a href="#" class="dropdown__item">...</a>
</div>`}
        </Code>
      </Example>
      <SubTitle id="dropdowns-positioning">Positioning</SubTitle>
      <Description>
        <p>
          Dropdown menus can be positioned by adding an optional{' '}
          <code>[data-dropdown-position]</code> attribute to a{' '}
          <code>.dropdown</code>. Supported positions are <em>top</em>,{' '}
          <em>right</em>, <em>bottom</em>, <em>left</em> and can be appended
          with <em>-start</em> or <em>-end</em> for alignment. Default position
          is <em>bottom-start</em>.
        </p>
      </Description>
      <Example>
        <ExampleView>
          <button
            type="button"
            className="btn"
            data-dropdown-toggle="dropdown-example-2"
            id="dropdown-example-2-label"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown (top-end)
          </button>
          <div
            className="dropdown"
            data-dropdown="dropdown-example-2"
            data-dropdown-position="top-end"
            aria-labelledby="dropdown-example-2-label"
          >
            <a href="#dropdown-example-link-1" className="dropdown__item">
              Link 1
            </a>
            <a href="#dropdown-example-link-2" className="dropdown__item">
              Link 2
            </a>
            <a href="#dropdown-example-link-3" className="dropdown__item">
              Link 3
            </a>
            <div className="dropdown__divider" />
            <a href="#dropdown-example-link-4" className="dropdown__item">
              Link 4
            </a>
          </div>
          <button
            type="button"
            className="btn"
            data-dropdown-toggle="dropdown-example-3"
            id="dropdown-example-3-label"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown (right-start)
          </button>
          <div
            className="dropdown"
            data-dropdown="dropdown-example-3"
            data-dropdown-position="right-start"
            aria-labelledby="dropdown-example-3-label"
          >
            <a href="#dropdown-example-link-1" className="dropdown__item">
              Link 1
            </a>
            <a href="#dropdown-example-link-2" className="dropdown__item">
              Link 2
            </a>
            <a href="#dropdown-example-link-3" className="dropdown__item">
              Link 3
            </a>
            <div className="dropdown__divider" />
            <a href="#dropdown-example-link-4" className="dropdown__item">
              Link 4
            </a>
          </div>
        </ExampleView>
      </Example>
    </Section>
  );
};
