import React, { Component } from 'react';
import classnames from 'classnames';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      sticky: false,
    };

    this.scrollTo = this.scrollTo.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.sticky === this.state.sticky) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    window.onscroll = () => {
      this.setState({
        sticky: window.pageYOffset > 0,
      });
    };
  }

  render() {
    const topbarClassNames = classnames('framework__topbar', {
      'framework__topbar--sticky': this.state.sticky,
    });

    return (
      <div className={topbarClassNames}>
        <div className="container container--md">
          <ul className="framework__nav">
            <li>
              <a onClick={event => this.scrollTo(event, 'grid')} href="#grid">
                Grid
              </a>
              <ul>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'grid-gapless')}
                    href="#grid-gapless"
                  >
                    Gapless
                  </a>
                </li>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'grid-vertical-alignment')}
                    href="#grid-vertical-alignment"
                  >
                    Vertical Alignment
                  </a>
                </li>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'grid-horizontal-alignment')}
                    href="#grid-horizontal-alignment"
                  >
                    Horizontal Alignment
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={event => this.scrollTo(event, 'containers')}
                href="#containers"
              >
                Containers
              </a>
            </li>
            <li>
              <a
                onClick={event => this.scrollTo(event, 'typography')}
                href="#typography"
              >
                Typography
              </a>
              <ul>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'typography-headings')}
                    href="#typography-headings"
                  >
                    Headings
                  </a>
                </li>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'typography-blockquote')}
                    href="#typography-blockquote"
                  >
                    Blockquote
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'typography-lists')}
                    href="#typography-lists"
                  >
                    Lists
                  </a>
                </li>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'typography-horizontal-rule')}
                    href="#typography-horizontal-rule"
                  >
                    Horizontal Rule
                  </a>
                </li>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'typography-preformatted-text')}
                    href="#typography-preformatted-text"
                  >
                    Preformatted Text
                  </a>
                </li>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'typography-inline-elements')}
                    href="#typography-inline-elements"
                  >
                    Inline Elements
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={event => this.scrollTo(event, 'buttons')}
                href="#buttons"
              >
                Buttons
              </a>
              <ul>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'buttons-colors')}
                    href="#buttons-colors"
                  >
                    Colors
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'buttons-outlined')}
                    href="#buttons-outlined"
                  >
                    Outlined
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'buttons-sizes')}
                    href="#buttons-sizes"
                  >
                    Sizes
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'buttons-link')}
                    href="#buttons-link"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'buttons-rounded')}
                    href="#buttons-rounded"
                  >
                    Rounded
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'buttons-block')}
                    href="#buttons-block"
                  >
                    Block
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={event => this.scrollTo(event, 'forms')} href="#forms">
                Forms
              </a>
              <ul>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'forms-sizes')}
                    href="#forms-sizes"
                  >
                    Sizes
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'forms-rounded')}
                    href="#forms-rounded"
                  >
                    Rounded
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'forms-input-group')}
                    href="#forms-input-group"
                  >
                    Input group
                  </a>
                </li>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'forms-input-group-sizes')}
                    href="#forms-input-group-sizes"
                  >
                    Input group sizes
                  </a>
                </li>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'forms-input-states')}
                    href="#forms-input-states"
                  >
                    Input states
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={event => this.scrollTo(event, 'tables')}
                href="#tables"
              >
                Tables
              </a>
              <ul>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'tables-striped')}
                    href="#tables-striped"
                  >
                    Striped rows
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'tables-bordered')}
                    href="#tables-bordered"
                  >
                    Bordered
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'tables-hover')}
                    href="#tables-hover"
                  >
                    Hoverable rows
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'tables-compact')}
                    href="#tables-compact"
                  >
                    Compact
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'tables-narrow')}
                    href="#tables-narrow"
                  >
                    Narrow
                  </a>
                </li>
                <li>
                  <a
                    onClick={event => this.scrollTo(event, 'tables-responsive')}
                    href="#tables-responsive"
                  >
                    Responsive
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={event => this.scrollTo(event, 'components')}
                href="#components"
              >
                Components
              </a>
              <ul>
                <li>
                  <a
                    onClick={event =>
                      this.scrollTo(event, 'components-tooltips')}
                    href="#components-tooltips"
                  >
                    Tooltips
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  scrollTo(event, elementId) {
    event.preventDefault();

    const { menuIsOpen, toggleMobileMenu } = this.props;
    const el = document.getElementById(elementId);
    const yPos =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      (menuIsOpen ? 70 : 80);
    window.scrollTo(0, yPos);

    if (menuIsOpen) {
      toggleMobileMenu(event);
    }
  }
}

export default Menu;
