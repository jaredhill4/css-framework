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

class Cards extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Section>
        <Title id="cards">Cards</Title>
        <Description>
          Cards can be used to represent self-contained bits of content. At a
          minimum, a card must consist of two elements: a parent element with
          the <code>.card</code> class, and a child element with a{' '}
          <code>.card__body</code> class.
        </Description>
        <Example>
          <ExampleView>
            <div className="grid">
              <div class="grid__col grid__col-md-4">
                <article className="card">
                  <section className="card__body">
                    <p class="u--font-size-sm u--color-gray-dark">
                      Category Name
                    </p>
                    <h4>This is a card title</h4>
                    <p>
                      Officia et mollit incididunt nisi consectetur esse
                      laborum. Pariatur proident Lorem eiusmod et adipisicing
                      culpa deserunt.
                    </p>
                    <p>
                      <button className="btn btn--blue">Learn More</button>
                    </p>
                  </section>
                </article>
              </div>
            </div>
          </ExampleView>
          <Code language="html">
            {`<article class="card">
    <section class="card__body">
        ...
    </section>
</article>`}
          </Code>
        </Example>

        <SubTitle id="buttons-colors">Headers &amp; Footers</SubTitle>
        <Description>
          Add headers and footers to cards with the <code>.card__header</code>{' '}
          and <code>.card__footer</code> elements.
        </Description>
        <Example>
          <ExampleView>
            <div className="grid">
              <div class="grid__col grid__col-md-4">
                <article className="card u--height-100">
                  <header class="card__header">
                    <p class="u--font-size-sm u--color-gray-dark">
                      Category Name
                    </p>
                  </header>
                  <section className="card__body">
                    <h4>This is a card title</h4>
                    <p>
                      Officia et mollit incididunt nisi consectetur esse
                      laborum. Pariatur proident Lorem eiusmod et adipisicing
                      culpa deserunt.
                    </p>
                    <p>
                      <button className="btn btn--blue">Learn More</button>
                    </p>
                  </section>
                  <footer class="card__footer">
                    <p class="u--font-size-sm u--color-gray-dark">
                      Last updated 3 mins ago
                    </p>
                  </footer>
                </article>
              </div>
            </div>
          </ExampleView>
          <Code language="html">
            {`<article class="card">
    <header class="card__header">
        ...
    </header>
    <section class="card__body">
        ...
    </section>
    <footer class="card__footer">
        ...
    </footer>
</article>`}
          </Code>
        </Example>

        <SubTitle id="buttons-colors">Media</SubTitle>
        <Description>
          Add media (images or videos) to cards with the{' '}
          <code>.card__media</code> element. To add videos, make sure to use an
          iframe embed wrapped in the <code>.u--embed-responsive</code> element.
        </Description>
        <Example>
          <ExampleView>
            <div className="grid">
              <div class="grid__col grid__col-md-4">
                <article className="card u--height-100">
                  <img
                    src="http://placehold.it/1600x900"
                    className="card__media"
                    alt="Card media"
                  />
                  <section className="card__body">
                    <h4>Image card</h4>
                    <p>This card has an image.</p>
                    <p>
                      <button className="btn btn--green">Learn More</button>
                    </p>
                  </section>
                </article>
              </div>

              <div class="grid__col grid__col-md-4">
                <article className="card u--height-100">
                  <div class="card__media u--embed-responsive">
                    <iframe
                      src="https://www.youtube.com/embed/WQJuGeqdbn4"
                      title="Responsive embed with default 16x9 aspect ratio"
                      allowfullscreen=""
                    />
                  </div>
                  <section className="card__body">
                    <h4>Video card</h4>
                    <p>This card has a video.</p>
                    <p>
                      <button className="btn btn--green">Learn More</button>
                    </p>
                  </section>
                </article>
              </div>
            </div>
          </ExampleView>
          <Code language="html">
            {`<article class="card">
    <img src="..." class="card__media" />
    <section class="card__body">
        ...
    </section>
</article>

<article class="card">
    <div class="card__media u--embed-responsive">
        <iframe src="..." title="..." allowfullscreen></iframe>
    </div>
    <section class="card__body">
        ...
    </section>
</article>
`}
          </Code>
        </Example>

        <SubTitle id="buttons-colors">Grids</SubTitle>
        <Description>
          Cards use flex display, so it is easy to create a equal-height grid of
          cards. Build the structure of the grid with our <code>.grid</code> and{' '}
          <code>.grid__col</code> elements, and then place each card in its own{' '}
          <code>.grid__col</code> element.
        </Description>
        <Example>
          <ExampleView>
            <div className="grid">
              <div class="grid__col grid__col-md-4">
                <article className="card">
                  <header class="card__header">
                    <p class="u--font-size-sm">Category Name</p>
                  </header>
                  <section className="card__body">
                    <h4>This is a card title</h4>
                    <p>
                      Officia et mollit incididunt nisi consectetur esse
                      laborum. Pariatur proident Lorem eiusmod et adipisicing
                      culpa deserunt.
                    </p>
                    <p>
                      Officia et mollit incididunt nisi consectetur esse
                      laborum. Pariatur proident Lorem eiusmod et adipisicing
                      culpa deserunt.
                    </p>
                    <p>
                      <button className="btn btn--red">Learn More</button>
                    </p>
                  </section>
                  <footer class="card__footer">
                    <p class="u--font-size-sm u--color-gray-dark">
                      Last updated 3 mins ago
                    </p>
                  </footer>
                </article>
              </div>
              <div class="grid__col grid__col-md-4">
                <article className="card">
                  <img
                    src="http://placehold.it/600x400"
                    className="card__media"
                    alt="Card media"
                  />
                  <section className="card__body">
                    <h4>This is a card title</h4>
                    <p>
                      Officia et mollit incididunt nisi consectetur esse
                      laborum. Pariatur proident Lorem eiusmod et adipisicing
                      culpa deserunt.
                    </p>
                    <p>
                      <button className="btn btn--green">Learn More</button>
                    </p>
                  </section>
                  <footer class="card__footer">
                    <p class="u--font-size-sm u--color-gray-dark">
                      Last updated 3 mins ago
                    </p>
                  </footer>
                </article>
              </div>
              <div class="grid__col grid__col-md-4">
                <article className="card">
                  <section className="card__body">
                    <h4>This is a card title</h4>
                    <p>
                      Officia et mollit incididunt nisi consectetur esse
                      laborum. Pariatur proident Lorem eiusmod et adipisicing
                      culpa deserunt.
                    </p>
                    <p>
                      <button className="btn btn--blue">Learn More</button>
                    </p>
                  </section>
                  <footer class="card__footer">
                    <p class="u--font-size-sm u--color-gray-dark">
                      Last updated 3 mins ago
                    </p>
                  </footer>
                </article>
              </div>
            </div>
          </ExampleView>
          <Code language="html">
            {`<div class="grid">
    <div class="grid__col grid__col-md-4">
        <article class="card">
            ...
        </article>
    </div>
    <div class="grid__col grid__col-md-4">
        <article class="card">
            ...
        </article>
    </div>
    <div class="grid__col grid__col-md-4">
        <article class="card">
            ...
        </article>
    </div>
</div>`}
          </Code>
        </Example>
      </Section>
    );
  }
}

export default Cards;
