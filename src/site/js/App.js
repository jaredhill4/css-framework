import React, { Component } from 'react';
import Menu from './Menu';
import MenuToggle from './MenuToggle';

import Grid from './Grid';
import Containers from './Containers';
import Typography from './Typography';
import Buttons from './Buttons';
import Forms from './Forms';
import Tables from './Tables';
import Notices from './Notices';
import Components from './Components';
import Utilities from './Utilities';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.menuOpen === this.state.menuOpen) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className={this.state.menuOpen ? 'framework__menu-is-open' : ''}>
        <Menu toggleMenu={this.toggleMenu} menuIsOpen={this.state.menuOpen} />
        <MenuToggle toggleMenu={this.toggleMenu} />
        <section className="framework">
          <Grid />
          <Containers />
          <Typography />
          <Buttons />
          <Forms />
          <Tables />
          <Notices />
          <Components />
          <Utilities />
        </section>
      </div>
    );
  }

  toggleMenu(event) {
    event.preventDefault();

    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }
}

export default App;
