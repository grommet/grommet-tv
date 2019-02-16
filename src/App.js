import React, { Component } from 'react';
import { Grommet } from 'grommet';
// import { grommet } from 'grommet/themes';
import { theme } from './theme';
import Browse from './Browse';
import Details from './Details';
import Splash from './Splash';

const screens = {
  browse: Browse,
  details: Details,
  splash: Splash,
}

class App extends Component {
  state = { screen: 'details' }

  render() {
    const { screen } = this.state;
    const Screen = screens[screen];
    return (
      <Grommet full theme={theme}>
        <Screen onScreen={nextScreen => this.setState({ screen: nextScreen })} />
      </Grommet>
    );
  }
}

export default App;
