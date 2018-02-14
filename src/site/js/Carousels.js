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
import carousels from '../../framework/js/carousels';

const slideStyles = {
  width: '100%',
  padding: '150px 30px',
  textAlign: 'center',
  backgroundColor: '#e3e3e3',
};

class Carousels extends Component {
  componentDidMount() {
    carousels('[data-carousel="sample-carousel"]');
    carousels('[data-carousel="sample-carousel-dots"]', {
      infinite: false,
      autoplay: true,
      dots: true,
      autoplaySpeed: 5000,
      speed: 500,
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Section>
        <Title id="carousels">Carousels</Title>
        <Description>
          <p>
            You can add carousels of images, text or other elements using the{' '}
            <strong>carousel</strong> component.
          </p>
        </Description>
        <SubTitle id="carousels-documentation">Introduction</SubTitle>
        <Description>
          <p>
            Our carousel component is an extension of the{' '}
            <a href="http://kenwheeler.github.io/slick/">Slick jQuery plugin</a>,
            so all the same settings, events and methods are available for you
            to use.
          </p>
          <p>
            One caveat to this is how we handle the Slick methods. For these, we
            provide a custom API, to make hooking into them simpler and
            consistent with our other JavaScript components.
          </p>
          <p>
            To view the full documentation for Slick, visit{' '}
            <a href="http://kenwheeler.github.io/slick/">
              http://kenwheeler.github.io/slick/
            </a>.
          </p>
        </Description>
        <SubTitle id="carousels-setup">Setup</SubTitle>
        <Description>
          To create a carousel, you will first need to create the markup, which
          is simply a series of html elements (typically <code>div</code>s)
          nested inside a parent element (also typically a <code>div</code>)
          with a unique selector (like an id, class name or data attribute). In
          this example, we will use a data attribute selector, with the value
          "sample-carousel."
        </Description>
        <Code language="html">
          {`<div data-carousel="sample-carousel">
    <div>
        Slide 1
    </div>
    <div>
        Slide 2
    </div>
    <div>
        Slide 3
    </div>
    <div>
        Slide 4
    </div>
    <div>
        Slide 5
    </div>
</div>`}
        </Code>
        <Description>
          <p>
            Now that the markup is in place, you will need to create a new
            carousel instance. To do so, call the <code>carousel()</code>{' '}
            JavaScript component function (with your unique selector as the
            first argument) and assign it to a variable, like so:
          </p>
        </Description>
        <Code language="javascript">
          {`const sampleCarousel = carousel('[data-carousel="sample-carousel"]');`}
        </Code>
        <Description>
          <p>Now, you should see a simple slideshow that looks like this:</p>
        </Description>
        <Example>
          <ExampleView>
            <div data-carousel="sample-carousel">
              <div style={slideStyles}>Slide 1</div>
              <div style={slideStyles}>Slide 2</div>
              <div style={slideStyles}>Slide 3</div>
              <div style={slideStyles}>Slide 4</div>
              <div style={slideStyles}>Slide 5</div>
            </div>
          </ExampleView>
        </Example>
        <SubTitle id="carousels-settings">Settings</SubTitle>
        <Description>
          <p>
            To adjust the settings of a particular carousel, you may pass in a
            settings object to the inital <code>carousel()</code> function, like
            so:
          </p>
        </Description>
        <Code language="javascript">
          {`const sampleCarouselSettings = {
  infinite: false,     // prevent slides from looping
  autoplay: true,      // enable automatic slide progression
  dots: true,          // display dot indicators
  autoplaySpeed: 5000, // set the slide pause time to 5 seconds
  speed: 500,          // set the slide transition speed to half a second
};
const sampleCarousel = carousel('[data-carousel="sample-carousel"]', sampleCarouselSettings);`}
        </Code>
        <Description>
          <p>Now, your slideshow will look like this:</p>
        </Description>
        <Example>
          <ExampleView>
            <div data-carousel="sample-carousel-dots">
              <div style={slideStyles}>Slide 1</div>
              <div style={slideStyles}>Slide 2</div>
              <div style={slideStyles}>Slide 3</div>
              <div style={slideStyles}>Slide 4</div>
              <div style={slideStyles}>Slide 5</div>
            </div>
          </ExampleView>
        </Example>
        <SubTitle id="carousels-events">Events</SubTitle>
        <Description>
          <p>
            You may also hook into the various events that are fired by the
            carousel. To do so, pass the desired event to the carousel's{' '}
            <code>on()</code> method, along with a callback function as the
            second argument, like so:
          </p>
        </Description>
        <Code language="javascript">
          {`const sampleCarousel = carousel('[data-carousel="sample-carousel"]');

sampleCarousel.on('afterChange', (event, slick, currentSlide) => {
  // do something after the slide changes...
});`}
        </Code>
        <Description>
          Each event has its own unique arguments that it passes to the callback
          function. To see a full list of events and their arguments, review the
          Slick documentation at{' '}
          <a href="http://kenwheeler.github.io/slick/">
            http://kenwheeler.github.io/slick/
          </a>.
        </Description>
        <SubTitle id="carousels-methods">Methods</SubTitle>
        <Description>
          <p>
            You can also hook into the various Slick methods, using our custom
            API methods. These include:
          </p>
        </Description>
        <table className="table table--responsive table--bordered">
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
              <td>
                <em>none</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>goToSlide</code>
              </td>
              <td>Navigates to a slide by index</td>
              <td>
                <em>index (int), preventAnimation (boolean)</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>next</code>
              </td>
              <td>Navigates to the next slide</td>
              <td>
                <em>none</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>prev</code>
              </td>
              <td>Navigates to the previous slide</td>
              <td>
                <em>none</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>pause</code>
              </td>
              <td>Pauses autoplay</td>
              <td>
                <em>none</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>play</code>
              </td>
              <td>Starts autoplay</td>
              <td>
                <em>none</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>addSlide</code>
              </td>
              <td>
                Add a slide. If an index is provided, will add at that index, or
                before if addBefore is set. If no index is provided, add to the
                end or to the beginning if addBefore is set. Accepts HTML String
                || Object
              </td>
              <td>
                <em>
                  html (html or DOM object), index (int), addBefore (boolean)
                </em>
              </td>
            </tr>

            <tr>
              <td>
                <code>removeSlide</code>
              </td>
              <td>
                Remove slide by index. If removeBefore is set true, remove slide
                preceding index, or the first slide if no index is specified. If
                removeBefore is set to false, remove the slide following index,
                or the last slide if no index is set.
              </td>
              <td>
                <em>index (int), removeBefore (boolean)</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>filter</code>
              </td>
              <td>Filters slides using jQuery .filter()</td>
              <td>
                <em>filter (selector or function)</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>unfilter</code>
              </td>
              <td>Removes applied filtering</td>
              <td>
                <em>index (int)</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>getOption</code>
              </td>
              <td>Gets an individual option value</td>
              <td>
                <em>option (string)</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>setOption</code>
              </td>
              <td>
                Sets an individual value live. Set refresh to true if it's a UI
                update.
              </td>
              <td>
                <em>
                  option (string), value (depends on option), refresh (boolean)
                </em>
              </td>
            </tr>

            <tr>
              <td>
                <code>destroy</code>
              </td>
              <td>Deconstructs slick.</td>
              <td>
                <em>none</em>
              </td>
            </tr>

            <tr>
              <td>
                <code>getSlick</code>
              </td>
              <td>Get Slick Object</td>
              <td>
                <em>none</em>
              </td>
            </tr>
          </tbody>
        </table>
        <Code language="javascript">
          {`const sampleCarousel = carousel('[data-carousel="sample-carousel"]');
// Set the autoplaySpeed to 3 seconds
sampleCarousel.setOption('autoplaySpeed', 3000);
// Return the current slide index and store it in a variable
const currentSlide = sampleCarousel.getCurrentSlide();
// Return the autoplaySpeed (3000) and store it in a variable
const sampleCarouselAutoplaySpeed = sampleCarousel.getOption('autoplaySpeed');`}
        </Code>
      </Section>
    );
  }
}

export default Carousels;
