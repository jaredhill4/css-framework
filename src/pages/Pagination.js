// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code
} from '../components';

export default () => (
  <Section>
    <Title id="pagination">Pagination</Title>
    <Description>
      <p>
        Apply the <code>.pagination</code> class to an unordered list of anchor
        tags to setup pagination. For screen readers, wrap the pagination in a{' '}
        <code>&lt;nav&gt;</code> tag with an <code>[aria-label]</code>{' '}
        attribute.
      </p>
    </Description>
    <Example>
      <ExampleView>
        <nav aria-label="Pagination example">
          <ul className="pagination">
            <li className="pagination__item">
              <Link to="/pagination" aria-label="Previous">
                &laquo;
              </Link>
            </li>
            <li className="pagination__item">
              <Link to="/pagination">1</Link>
            </li>
            <li className="pagination__item">
              <Link to="/pagination">2</Link>
            </li>
            <li className="pagination__item">
              <Link to="/pagination">3</Link>
            </li>
            <li className="pagination__item">
              <Link to="/pagination" aria-label="Previous">
                &raquo;
              </Link>
            </li>
          </ul>
        </nav>
      </ExampleView>
      <Code language="html">
        {`<nav aria-label="Pagination example">
    <ul class="pagination">
        <li class="pagination__item">
            <a href="#" aria-label="Previous">&laquo;</a>
        </li>
        <li class="pagination__item">
            <a href="#">1</a>
        </li>
        <li class="pagination__item">
            <a href="#">2</a>
        </li>
        <li class="pagination__item">
            <a href="#">3</a>
        </li>
        <li class="pagination__item">
            <a href="#" aria-label="Next">&raquo;</a>
        </li>
    </ul>
</nav>`}
      </Code>
    </Example>
    <SubTitle id="colors-modifying">Active &amp; Disabled States</SubTitle>
    <Description>
      <p>
        To indicate active and disabled states, simply add the{' '}
        <code>.pagination__item--active</code> and{' '}
        <code>.pagination__item--disabled</code> classes to the list items where
        applicable.
      </p>
    </Description>
    <Example>
      <ExampleView>
        <nav aria-label="Pagination example">
          <ul className="pagination">
            <li className="pagination__item pagination__item--disabled">
              <Link to="/pagination" tabIndex="-1" aria-label="Previous">
                Prev
              </Link>
            </li>
            <li className="pagination__item pagination__item--active">
              <Link to="/pagination">1</Link>
            </li>
            <li className="pagination__item">
              <Link to="/pagination">2</Link>
            </li>
            <li className="pagination__item">
              <Link to="/pagination">3</Link>
            </li>
            <li className="pagination__item">
              <Link to="/pagination">Next</Link>
            </li>
          </ul>
        </nav>
      </ExampleView>
      <Code language="html">
        {`<nav aria-label="Pagination example">
    <ul class="pagination pagination--xl">
        <li class="pagination__item pagination__item--disabled">
            <a href="#" tabindex="-1" aria-label="Previous">Prev</a>
        </li>
        <li class="pagination__item pagination__item--active">
            <a href="#" aria-current="true">1</a>
        </li>
        <li class="pagination__item">
            <a href="#">2</a>
        </li>
        <li class="pagination__item">
            <a href="#">3</a>
        </li>
        <li class="pagination__item">
            <a href="#">Next</a>
        </li>
    </ul>
</nav>`}
      </Code>
    </Example>

    <SubTitle id="colors-modifying">Sizes</SubTitle>
    <Description>
      <p>
        Adjust the size of the pagination by applying a size modifier. Available
        modifiers are <code>xs</code>, <code>sm</code>, <code>md</code>,{' '}
        <code>lg</code> and <code>xl</code>. The default size is <code>md</code>
        .
      </p>
    </Description>
    <Example>
      <ExampleView>
        <ul className="pagination pagination--xs u--margin-bottom-20">
          <li className="pagination__item">
            <Link to="/pagination">Prev</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">1</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">2</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">3</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">Next</Link>
          </li>
        </ul>
        <ul className="pagination pagination--sm u--margin-bottom-20">
          <li className="pagination__item">
            <Link to="/pagination">Prev</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">1</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">2</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">3</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">Next</Link>
          </li>
        </ul>
        <ul className="pagination pagination--md u--margin-bottom-20">
          <li className="pagination__item">
            <Link to="/pagination">Prev</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">1</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">2</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">3</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">Next</Link>
          </li>
        </ul>
        <ul className="pagination pagination--lg u--margin-bottom-20">
          <li className="pagination__item">
            <Link to="/pagination">Prev</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">1</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">2</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">3</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">Next</Link>
          </li>
        </ul>
        <ul className="pagination pagination--xl">
          <li className="pagination__item">
            <Link to="/pagination">Prev</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">1</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">2</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">3</Link>
          </li>
          <li className="pagination__item">
            <Link to="/pagination">Next</Link>
          </li>
        </ul>
      </ExampleView>
      <Code language="html">
        {`<ul class="pagination pagination--xs">...</ul>
<ul class="pagination pagination--sm">...</ul>
<ul class="pagination pagination--md">...</ul>
<ul class="pagination pagination--lg">...</ul>
<ul class="pagination pagination--xl">...</ul>`}
      </Code>
    </Example>
  </Section>
);
