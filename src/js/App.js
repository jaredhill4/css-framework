import React, { Component as ReactComponent } from 'react';
import loremIpsum from 'lorem-ipsum';
import Component from './Component';
import Title from './Title';
import SubTitle from './SubTitle';
import Description from './Description';
import Example from './Example';

class App extends ReactComponent {
  render() {
    return (
      <div>
        <Component id="grid">
          <Title>Grid</Title>
          <Description>
            To build a grid, add a <code>.grid</code> container with as many{' '}
            <code>.grid__col-*</code> elements as you want. A <code>.grid</code>{' '}
            element can be nested within a <code>.grid__col-*</code> element. A{' '}
            <code>.grid__col</code> element without a defined column width will
            automatically size based on its content.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">.grid</div>
              <div className="grid">
                <div className="grid__col">
                  <div className="example__grid">.grid__col</div>
                </div>
                <div className="grid__col-lg-3">
                  <div className="example__grid">.grid__col-lg-3</div>
                </div>
                <div className="grid__col-xs-12">
                  <div className="example__grid">.grid__col-xs-12</div>
                </div>
                <div className="grid__col-xs-12 grid__col-md-6">
                  <div className="example__grid">
                    <div className="example__grid__text">.grid</div>
                    <div className="grid">
                      <div className="grid__col-xs-6">
                        <div className="example__grid">.grid__col-xs-6</div>
                      </div>
                      <div className="grid__col-xs-6">
                        <div className="example__grid">.grid__col-xs-6</div>
                      </div>
                      <div className="grid__col">
                        <div className="example__grid">.grid__col</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid__col-xs-12 grid__col-md-6">
                  <div className="example__grid">
                    <div className="example__grid__text">.grid</div>
                    <div className="grid">
                      <div className="grid__col-xs-12">
                        <div className="example__grid">.grid__col-xs-12</div>
                      </div>
                      <div className="grid__col">
                        <div className="example__grid">.grid__col</div>
                      </div>
                      <div className="grid__col">
                        <div className="example__grid">.grid__col</div>
                      </div>
                      <div className="grid__col">
                        <div className="example__grid">.grid__col</div>
                      </div>
                      <div className="grid__col">
                        <div className="example__grid">.grid__col</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Example>
          <SubTitle>Gapless</SubTitle>
          <Description>
            You can remove column gutters by adding the{' '}
            <code>.grid--gapless</code> modifier to a grid.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">.grid--gapless</div>
              <div className="grid grid--gapless">
                <div className="grid__col">
                  <div className="example__grid">.grid__col</div>
                </div>
                <div className="grid__col">
                  <div className="example__grid">.grid__col</div>
                </div>
                <div className="grid__col">
                  <div className="example__grid">.grid__col</div>
                </div>
                <div className="grid__col">
                  <div className="example__grid">.grid__col</div>
                </div>
                <div className="grid__col-xs-12">
                  <div className="example__grid">.grid__col-xs-12</div>
                </div>
              </div>
            </div>
          </Example>
          <SubTitle>Alignment</SubTitle>
          <Description>
            Add the <code>.grid--valign-stretch</code> modifier for equal height
            columns. <em>This is the default setting.</em>
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">.grid--valign-stretch</div>
              <div className="grid grid--valign-stretch">
                <div className="grid__col">
                  <div className="example__grid">
                    <p>.grid__col</p>
                    {loremIpsum({ count: 3 })}
                  </div>
                </div>
                <div className="grid__col">
                  <div className="example__grid">.grid__col</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--valign-top</code> modifier to align columns
            along the top.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">.grid--valign-top</div>
              <div className="grid grid--valign-top">
                <div className="grid__col">
                  <div className="example__grid">
                    <p>.grid__col</p>
                    {loremIpsum({ count: 3 })}
                  </div>
                </div>
                <div className="grid__col">
                  <div className="example__grid">.grid__col</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--valign-center</code> modifier to center columns
            vertically.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">.grid--valign-center</div>
              <div className="grid grid--valign-center">
                <div className="grid__col">
                  <div className="example__grid">
                    <p>.grid__col</p>
                    {loremIpsum({ count: 3 })}
                  </div>
                </div>
                <div className="grid__col">
                  <div className="example__grid">.grid__col</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--valign-bottom</code> modifier to align columns
            along the bottom.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">.grid--valign-bottom</div>
              <div className="grid grid--valign-bottom">
                <div className="grid__col">
                  <div className="example__grid">
                    <p>.grid__col</p>
                    {loremIpsum({ count: 3 })}
                  </div>
                </div>
                <div className="grid__col">
                  <div className="example__grid">.grid__col</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--valign-content-top</code> modifier to align all
            grid elements at the top of the available vertical space.{' '}
            <em>This is the default setting.</em>
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">
                .grid--valign-content-top
              </div>
              <div className="grid grid--valign-content-top example__grid--static-height">
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--valign-content-center</code> modifier to align
            all grid elements in the center of the available vertical space.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">
                .grid--valign-content-center
              </div>
              <div className="grid grid--valign-content-center example__grid--static-height">
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--valign-content-bottom</code> modifier to align
            all grid elements at the bottom of the available vertical space.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">
                .grid--valign-content-bottom
              </div>
              <div className="grid grid--valign-content-bottom example__grid--static-height">
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--valign-content-stretch</code> modifier to
            stretch all of the grid elements to fill available vertical space.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">
                .grid--valign-content-stretch
              </div>
              <div className="grid grid--valign-content-stretch example__grid--static-height">
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--valign-content-space-between</code> modifier to
            add equal space around each row while keeping the first and last
            justified to the top and bottom.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">
                .grid--valign-content-space-between
              </div>
              <div className="grid grid--valign-content-space-between example__grid--static-height">
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--valign-content-space-around</code> modifier to
            add equal space around each row.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">
                .grid--valign-content-space-around
              </div>
              <div className="grid grid--valign-content-space-around example__grid--static-height">
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
                <div className="grid__col-xs-6">
                  <div className="example__grid">.grid__col-xs-6</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--halign-left</code> modifier to align columns on
            the left. <em>This is the default setting.</em>
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">.grid--halign-left</div>
              <div className="grid grid--halign-left">
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--halign-center</code> modifier to center columns
            horizontally.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">.grid--halign-center</div>
              <div className="grid grid--halign-center">
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--halign-right</code> modifier to align columns
            on the right.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">.grid--halign-right</div>
              <div className="grid grid--halign-right">
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--halign-space-between</code> modifier to add
            equal space around each column while keeping the first and last
            justified to the left and right.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">
                .grid--halign-space-between
              </div>
              <div className="grid grid--halign-space-between">
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
              </div>
            </div>
          </Example>
          <Description>
            Add the <code>.grid--halign-space-around</code> modifier to add
            equal space around each column.
          </Description>
          <Example>
            <div className="example__grid">
              <div className="example__grid__text">
                .grid--halign-space-around
              </div>
              <div className="grid grid--halign-space-around">
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
                <div className="grid__col-sm-4">
                  <div className="example__grid">.grid__col-sm-4</div>
                </div>
              </div>
            </div>
          </Example>
        </Component>

        <Component id="typography">
          <Title>Typography</Title>
          <SubTitle>Headings</SubTitle>
          <Description>
            Each heading element has a corresponding class, such as{' '}
            <code>.h3</code>, that can be used to emulate heading styles.
          </Description>
          <Example>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </Example>
          <SubTitle>Blockquote</SubTitle>
          <Example>
            <blockquote>
              {loremIpsum({ count: 6 })}
            </blockquote>
          </Example>
          <SubTitle>Lists</SubTitle>
          <Example>
            <ul>
              <li>
                {loremIpsum()}
              </li>
              <li>
                {loremIpsum()}
              </li>
              <li>
                {loremIpsum()}
                <ul>
                  <li>
                    {loremIpsum()}
                  </li>
                  <li>
                    {loremIpsum()}
                  </li>
                  <li>
                    {loremIpsum()}
                  </li>
                </ul>
              </li>
            </ul>
            <ol>
              <li>
                {loremIpsum()}
              </li>
              <li>
                {loremIpsum()}
              </li>
              <li>
                {loremIpsum()}
                <ol>
                  <li>
                    {loremIpsum()}
                  </li>
                  <li>
                    {loremIpsum()}
                  </li>
                  <li>
                    {loremIpsum()}
                  </li>
                </ol>
              </li>
            </ol>
          </Example>
        </Component>

        <Component id="buttons">
          <Title>Buttons</Title>
          <Description>
            Add a <code>.btn</code> class to an anchor tag or button.
          </Description>
          <Example>
            <button type="button" className="btn">
              .btn
            </button>
          </Example>
          <SubTitle>Colors</SubTitle>
          <Description>
            Different button colors can be created by adding a color modifier
            class like <code>.btn--red</code>.
          </Description>
          <Example>
            <button type="button" className="btn btn--white">
              .btn--white
            </button>
            <button type="button" className="btn btn--black">
              .btn--black
            </button>
            <button type="button" className="btn btn--red">
              .btn--red
            </button>
            <button type="button" className="btn btn--green">
              .btn--green
            </button>
            <button type="button" className="btn btn--blue">
              .btn--blue
            </button>
          </Example>
          <SubTitle>Outlined</SubTitle>
          <Description>
            Create buttons stylized with an outline by adding a{' '}
            <code>.btn--outline</code> modifier.
          </Description>
          <Example>
            <button type="button" className="btn btn--outline">
              .btn--outline
            </button>
            <button type="button" className="btn btn--black btn--outline">
              .btn--outline
            </button>
            <button type="button" className="btn btn--red btn--outline">
              .btn--outline
            </button>
            <button type="button" className="btn btn--green btn--outline">
              .btn--outline
            </button>
            <button type="button" className="btn btn--blue btn--outline">
              .btn--outline
            </button>
          </Example>
          <SubTitle>Sizes</SubTitle>
          <Example>
            <button type="button" className="btn btn--xs">
              .btn--xs
            </button>
            <button type="button" className="btn btn--sm">
              .btn--sm
            </button>
            <button type="button" className="btn btn--md">
              .btn--md
            </button>
            <button type="button" className="btn btn--lg">
              .btn--lg
            </button>
            <button type="button" className="btn btn--xl">
              .btn--xl
            </button>
          </Example>
          <SubTitle>Link</SubTitle>
          <Description>
            Add the <code>.btn--link</code> modifier to a button to disguise the
            button as an anchor tag.
          </Description>
          <Example>
            <button type="button" className="btn btn--link">
              .btn--link
            </button>
          </Example>
          <SubTitle>Rounded</SubTitle>
          <Example>
            <button type="button" className="btn btn--round">
              .btn--round
            </button>
          </Example>
          <SubTitle>Block</SubTitle>
          <Example>
            <button type="button" className="btn btn--block">
              .btn--block
            </button>
          </Example>
        </Component>
      </div>
    );
  }
}

export default App;
