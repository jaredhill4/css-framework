import React, { Component } from 'react';
import $ from 'jquery';
import code from '../../framework/js/code';
import Menu from './Menu';
import MenuToggle from './MenuToggle';

import Grid from './Grid';
import Containers from './Containers';
import Sections from './Sections';
import Typography from './Typography';
import Buttons from './Buttons';
import Forms from './Forms';
import Tables from './Tables';
import Notices from './Notices';
import Modals from './Modals';
import Dropdowns from './Dropdowns';
import Tooltips from './Tooltips';
import Carousels from './Carousels';
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

  componentDidMount() {
    this.sideEffects();
    code('[data-code]');
  }

  componentDidUpdate() {
    this.sideEffects();
  }

  sideEffects() {
    if (this.state.menuOpen) {
      $('body').addClass('html--menu-open');
    } else {
      $('body').removeClass('html--menu-open');
    }
  }

  render() {
    return (
      <div>
        <Menu toggleMenu={this.toggleMenu} menuIsOpen={this.state.menuOpen} />
        <MenuToggle toggleMenu={this.toggleMenu} />
        <Grid />
        <Containers />
        <Sections />
        <Typography />
        <Buttons />
        <Forms />
        <Tables />
        <Notices />
        <Modals />
        <Dropdowns />
        <Tooltips />
        <Carousels />
        <Utilities />
        <div className="framework__backdrop" onClick={this.toggleMenu} />
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
