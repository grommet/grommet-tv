import React, { Component } from 'react';
import { Box, Button, Keyboard, Text } from 'grommet';
import Logo from './Logo';

class Splash extends Component {
  render() {
    const { onScreen } = this.props;
    return (
      <Keyboard
        target="document"
        onEnter={() => onScreen('browse')}
      >
        <Box fill={true} align="center" justify="center">
          <Box gap="large" align="center">
            <Button onClick={() => onScreen('browse')}>
              <Logo />
            </Button>
            <Text size="xxlarge">grommet <Text size="xxlarge" weight="bold">tv</Text></Text>
          </Box>
        </Box>
      </Keyboard>
    );
  }
}

export default Splash;
