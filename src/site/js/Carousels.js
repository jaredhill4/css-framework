import $ from 'jquery';
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
import carousel from '../../framework/js/carousel';

const slideStyles = {
  width: '100%',
  padding: '150px',
  textAlign: 'center',
  backgroundColor: '#ccc',
}

class Carousels extends Component {
  componentDidMount() {
    const sampleCarousel = carousel('[data-carousel="sample-carousel"]');
  }

  render() {
    return (
      <Section>
        <Title id="carousels">Carousels</Title>
        <Description>
          <p>You can add carousels of images, text or other elements with the <strong>carousel</strong> component.</p>
        </Description>
        <SubTitle id="carousels-markup">Markup</SubTitle>
        <Description>To create a carousel, you will first need to create the markup, which is simply a series of html elements (typically <code>&lt;div&gt;</code>s) nested inside a parent element with a unique selector, like an id, class name or data attribute. In this example we will use a data-attribute, with the value "sample-carousel."</Description>
        <Example>
          <Code language="html">
          {`<div data-carousel="sample-carousel">
    <div style="width: 100%; padding: 150px; text-align: center; background-color: #ccc;">
      Slide 1
    </div>
    <div style="width: 100%; padding: 150px; text-align: center; background-color: #ccc;">
      Slide 2
    </div>
    <div style="width: 100%; padding: 150px; text-align: center; background-color: #ccc;">
      Slide 3
    </div>
    <div style="width: 100%; padding: 150px; text-align: center; background-color: #ccc;">
      Slide 4
    </div>
    <div style="width: 100%; padding: 150px; text-align: center; background-color: #ccc;">
      Slide 5
    </div>
</div>`}
          </Code>
        </Example>
        <SubTitle id="carousels-initialization">Initialization</SubTitle>
        <Description>
          <p>Now that the markup is in place, you will need to initialize the carousel using the javascript component like so:</p>
        </Description>
        <Example>
          <Code language="javascript">
            {`const sampleCarousel = carousel('[data-carousel="sample-carousel"]');`}
          </Code>
        </Example>
        <Description>
          <p>Now, you should see a simple slideshow that looks like this:</p>
        </Description>
        <Example>
          <ExampleView>
            <div data-carousel="sample-carousel">
                <div style={slideStyles}>
                  Slide 1
                </div>
                <div style={slideStyles}>
                  Slide 2
                </div>
                <div style={slideStyles}>
                  Slide 3
                </div>
                <div style={slideStyles}>
                  Slide 4
                </div>
                <div style={slideStyles}>
                  Slide 5
                </div>
            </div>
          </ExampleView>
        </Example>
        <SubTitle id="carousels-settings">Settings</SubTitle>
        <Description>
          <p>To adjust the settings of a particular carousel, you may pass in a settings object to the carousel function, like so:</p>
        </Description>
        <Code language="javascript">
          {`const sampleCarouselSettings = {
  autoplay: true,      // enable automatic slide progression
  dots: true,          // display dot indicators
  autoplaySpeed: 5000, // set the slide pause time to 5 seconds
  speed: 500,          // set the slide transition speed to half a second
};
const sampleCarousel = carousel('[data-carousel="sample-carousel"]', sampleCarouselSettings);`}
        </Code>
        <SubTitle id="carousels-settings">Events</SubTitle>
        <Description>
          <p>You may also hook into the various events that are fired by the carousel. To see a full list of the events and their arguments, go to <a href="http://kenwheeler.github.io/slick/">http://kenwheeler.github.io/slick/</a>.</p>
        </Description>
        <Code language="javascript">
          {`const sampleCarousel = carousel('[data-carousel="sample-carousel"]', sampleCarouselSettings);

sampleCarousel.on('afterChange', (event, slick, currentSlide) => {
  // do something after the slide changes...
});`}
        </Code>
        <SubTitle id="carousels-documentation">Methods</SubTitle>
        <Description>
          <p>You can also hook into the various Slick methods, using our custom API methods. These include:</p>
        </Description>
        <table className="table table--bordered">
          <thead>
            <tr>
              <th>Method</th>
              <th>Description</th>
              <th>Arguments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>getCurrentSlide</code>
              </td>
              <td>Returns the current slide index</td>
              <td><em>none</em></td>
            </tr>

            <tr>
              <td>
                <code>goToSlide</code>
              </td>
              <td>Navigates to a slide by index</td>
              <td><em>index (int), preventAnimation (boolean)</em></td>
            </tr>

            <tr>
              <td>
                <code>next</code>
              </td>
              <td>Navigates to the next slide</td>
              <td><em>none</em></td>
            </tr>

            <tr>
              <td>
                <code>prev</code>
              </td>
              <td>Navigates to the previous slide</td>
              <td><em>none</em></td>
            </tr>

            <tr>
              <td>
                <code>pause</code>
              </td>
              <td>Pauses autoplay</td>
              <td><em>none</em></td>
            </tr>

            <tr>
              <td>
                <code>play</code>
              </td>
              <td>Starts autoplay</td>
              <td><em>none</em></td>
            </tr>

            <tr>
              <td>
                <code>addSlide</code>
              </td>
              <td>Add a slide. If an index is provided, will add at that index, or before if addBefore is set. If no index is provided, add to the end or to the beginning if addBefore is set. Accepts HTML String || Object</td>
              <td><em>html (html or DOM object), index (int), addBefore (boolean)</em></td>
            </tr>

            <tr>
              <td>
                <code>removeSlide</code>
              </td>
              <td>Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false, remove the slide following index, or the last slide if no index is set.</td>
              <td><em>index (int), removeBefore (boolean)</em></td>
            </tr>

            <tr>
              <td>
                <code>filter</code>
              </td>
              <td>Filters slides using jQuery .filter()</td>
              <td><em>filter (selector or function)</em></td>
            </tr>

            <tr>
              <td>
                <code>unfilter</code>
              </td>
              <td>Removes applied filtering</td>
              <td><em>index (int)</em></td>
            </tr>

            <tr>
              <td>
                <code>getOption</code>
              </td>
              <td>Gets an individual option value</td>
              <td><em>option (string)</em></td>
            </tr>

            <tr>
              <td>
                <code>setOption</code>
              </td>
              <td>Sets an individual value live. Set refresh to true if it's a UI update.</td>
              <td><em>option (string), value (depends on option), refresh (boolean)</em></td>
            </tr>

            <tr>
              <td>
                <code>destroy</code>
              </td>
              <td>Deconstructs slick.</td>
              <td><em>none</em></td>
            </tr>

            <tr>
              <td>
                <code>getSlick</code>
              </td>
              <td>Get Slick Object</td>
              <td><em>none</em></td>
            </tr>
          </tbody>
        </table>
        <Code language="javascript">
          {`const sampleCarousel = carousel('[data-carousel="sample-carousel"]', sampleCarouselSettings);
// Set the autoplaySpeed to 3 seconds
sampleCarousel.setOption('autoplaySpeed', 3000);
// Return the current slide index and store it in a variable
const currentSlide = sampleCarousel.getCurrentSlide();
// Return the autoplaySpeed (3000) and store it in a variable
const sampleCarouselAutoplaySpeed = sampleCarousel.getOption('autoplaySpeed');`}
        </Code>

        <SubTitle id="carousels-documentation">Documentation</SubTitle>
        <Description>
          <p>To view the full documentation for Slick JS, including the full list of available settings, events and methods, visit <a href="http://kenwheeler.github.io/slick/">http://kenwheeler.github.io/slick/</a>.</p>
        </Description>
      </Section>
    )
  }
}

export default Carousels;

