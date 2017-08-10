import React, { Component } from 'react';
import classnames from 'classnames';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
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
              <a href="#grid">Grid</a>
            </li>
            <li>
              <a href="#containers">Containers</a>
            </li>
            <li>
              <a href="#typography">Typography</a>
            </li>
            <li>
              <a href="#buttons">Buttons</a>
            </li>
            <li>
              <a href="#forms">Forms</a>
            </li>
            <li>
              <a href="#tables">Tables</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
