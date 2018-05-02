import React from 'react';
import { Link } from 'react-static';
import {
  Section,
  Title,
  SubTitle,
  Description,
  Example,
  ExampleView,
  Code,
} from '../components/Framework';

export default () => (
  <Section>
    <Title id="pagination">Pagination</Title>
    <Description>
      <p>
        Apply the <code>.pagination</code> class to an unordered list of anchor
        tags to setup pagination. For screen readers, wrap the pagination in a{' '}
        <code>&lt;nav&gt;</code> tag.
      </p>
    </Description>
    <Example>
      <ExampleView>
        <nav>
          <ul className="pagination">
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
        </nav>
      </ExampleView>
      <Code language="html">
        {`<nav>
    <ul class="pagination">
        <li class="pagination__item">
            <a href="#">Prev</a>
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
            <a href="#">Next</a>
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
        <nav>
          <ul className="pagination">
            <li className="pagination__item pagination__item--disabled">
              <Link to="/pagination">Prev</Link>
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
        {`<nav>
    <ul class="pagination pagination--xl">
        <li class="pagination__item pagination__item--disabled">
            <a href="#" tabindex="-1">Prev</a>
        </li>
        <li class="pagination__item pagination__item--active">
            <a href="#">1</a>
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
        <code>lg</code> and <code>xl</code>. The default setting is{' '}
        <code>md</code>.
      </p>
    </Description>
    <Example>
      <ExampleView>
        <nav className="u--margin-bottom-20">
          <ul className="pagination pagination--xs">
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
        </nav>

        <nav className="u--margin-bottom-20">
          <ul className="pagination pagination--sm">
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
        </nav>

        <nav className="u--margin-bottom-20">
          <ul className="pagination pagination--md">
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
        </nav>

        <nav className="u--margin-bottom-20">
          <ul className="pagination pagination--lg">
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
        </nav>

        <nav>
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
        </nav>
      </ExampleView>
      <Code language="html">
        {`<nav>
    <ul class="pagination pagination--xs">
        ...
    </ul>
    </nav>

    <nav>
    <ul class="pagination pagination--sm">
        ...
    </ul>
    </nav>

    <nav>
    <ul class="pagination pagination--md">
        ...
    </ul>
    </nav>

    <nav>
    <ul class="pagination pagination--lg">
        ...
    </ul>
    </nav>

    <nav>
    <ul class="pagination pagination--xl">
        ...
    </ul>
</nav>`}
      </Code>
    </Example>
  </Section>
);
