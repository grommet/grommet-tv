import React, { Component } from 'react';
import { Box } from 'grommet';

class Logo extends Component {
  render() {
    return (
      <Box pad="large" background="accent-3" round="full">
        <Box pad="large" background="accent-2" round="full">
          <Box pad="large" background="accent-1" round="full"/>
        </Box>
      </Box>
    );
  }
}

export default Logo;
