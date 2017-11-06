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
      mobileMenuOpen: false,
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.mobileMenuOpen === this.state.mobileMenuOpen) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div
        className={this.state.mobileMenuOpen ? 'framework__menu-is-open' : ''}
      >
        <Menu
          toggleMobileMenu={this.toggleMobileMenu}
          menuIsOpen={this.state.mobileMenuOpen}
        />
        <MenuToggle toggleMobileMenu={this.toggleMobileMenu} />
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

  toggleMobileMenu(event) {
    event.preventDefault();

    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    });
  }
}

export default App;
