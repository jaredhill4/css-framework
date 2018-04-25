import React, { Component, Fragment } from 'react';
import { Head, Router, withSiteData } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import $ from 'jquery';

import Menu from './components/Menu';
import MenuToggle from './components/MenuToggle';

import './app.scss';
import '../framework/scss/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
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
    const { menuOpen } = this.state;
    const { title } = this.props;
    return (
      <Router>
        <Fragment>
          <Head>
            <title>{title}</title>
          </Head>
          <Menu toggleMenu={this.toggleMenu} menuIsOpen={menuOpen} />
          <MenuToggle toggleMenu={this.toggleMenu} />
          <Routes />
          <div className="framework__backdrop" onClick={this.toggleMenu} />
        </Fragment>
      </Router>
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

export default hot(module)(withSiteData(App));
