import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
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
import Toggles from './Toggles';
import Utilities from './Utilities';
import NotFound from './NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.sideEffects();
  }

  componentDidUpdate() {
    this.sideEffects();
  }

  render() {
    return (
      <div>
        <Menu toggleMenu={this.toggleMenu} menuIsOpen={this.state.menuOpen} />
        <MenuToggle toggleMenu={this.toggleMenu} />
        <Switch>
          <Route path="/grid" component={Grid} />
          <Route path="/containers" component={Containers} />
          <Route path="/sections" component={Sections} />
          <Route path="/typography" component={Typography} />
          <Route path="/buttons" component={Buttons} />
          <Route path="/forms" component={Forms} />
          <Route path="/tables" component={Tables} />
          <Route path="/notices" component={Notices} />
          <Route path="/modals" component={Modals} />
          <Route path="/dropdowns" component={Dropdowns} />
          <Route path="/tooltips" component={Tooltips} />
          <Route path="/carousels" component={Carousels} />
          <Route path="/toggles" component={Toggles} />
          <Route path="/utilities" component={Utilities} />
          <Redirect exact from="/" to="/grid" />
          <Route component={NotFound} />
        </Switch>
        <div className="framework__backdrop" onClick={this.toggleMenu} />
      </div>
    );
  }

  sideEffects() {
    if (this.state.menuOpen) {
      $('html').addClass('html--menu-open');
    } else {
      $('html').removeClass('html--menu-open');
    }
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
}

export default App;
