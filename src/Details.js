import React, { Component } from 'react';
import { Box, Button, Heading, Image, Keyboard, Paragraph, Stack, Text } from 'grommet';
import { ClosedCaption, Favorite, PlayFill } from 'grommet-icons';

class Details extends Component {
  render() {
    const { onScreen } = this.props;
    return (
      <Keyboard
        target="document"
        onEsc={() => onScreen('browse')}
      >
        <Stack fill guidingChild="last">
          <Box fill={true} background="url(/images/image-11.jpg)" style={{ filter: 'blur(3em)' }} />
          <Box fill={true} background={{ opacity: 'strong', color: 'dark-1' }} />
          <Box pad="xlarge" direction="row" justify="center">
            <Box basis="xlarge" fill direction="row" gap="xlarge">
              <Box width="medium" height="large" round="small" overflow="hidden">
                <Image fit="cover" src="/images/image-11.jpg" />
              </Box>
              <Box flex={true} gap="large">
                <Box direction="row" justify="between" align="center">
                  <ClosedCaption />
                  <Box direction="row" align="center" gap="medium">
                    <Text>metacritic</Text>
                    <Box pad="small" background="neutral-1" round="xsmall">
                      <Text weight="bold">76</Text>
                    </Box>
                  </Box>
                </Box>
                <Heading weight="bold" margin="none">Guardians of the Galaxy</Heading>
                <Box direction="row" gap="medium">
                  <Text>2014</Text>
                  <Text>PG-13</Text>
                  <Text>2h 1m</Text>
                  <Text>Action, Adventure, Comedy, Sci-Fi</Text>
                </Box>
                <Paragraph size="xlarge" margin="none">
                  A group of intergalactic criminals must pull together to stop
                  a fanatical warrior with plans to purge the universe.
                </Paragraph>
                <Box>
                  <Text>Director: James Gunn</Text>
                  <Text>Writers: James Gunn, Nicole Perlman</Text>
                  <Text>Stars: Chris Pratt, Zoe Saldana, Vin Diesel, Bradley Cooper, Dave Bautista</Text>
                </Box>
                <Box direction="row" gap="large">
                  <Button plain>
                    <Box
                      pad={{ horizontal: 'xlarge', vertical: 'medium' }}
                      round="small"
                      background="brand"
                    >
                      <PlayFill size="large" color="accent-4" />
                    </Box>
                  </Button>
                  <Button plain>
                    <Box
                      pad={{ horizontal: 'xlarge', vertical: 'medium' }}
                      round="small"
                      background="accent-4"
                    >
                      <Favorite size="large" color="brand" />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Keyboard>
    );
  }
}

export default Details;
