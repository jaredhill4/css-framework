import React, { Component } from 'react';
import Menu from './Menu';
import Grid from './Grid';
import Containers from './Containers';
import Typography from './Typography';
import Buttons from './Buttons';
import Forms from './Forms';
import Tables from './Tables';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Grid />
        <Containers />
        <Typography />
        <Buttons />
        <Forms />
        <Tables />
      </div>
    );
  }
}

export default App;
