import React, { Component } from 'react';
import { Box, Button, Grid, Image, Keyboard, Stack, Text } from 'grommet';
import { Channel, Favorite, Gamepad, Search, Target, Ticket } from 'grommet-icons';
import Logo from './Logo';

const items = Array(20)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const MenuButton = ({ label, Icon, onClick }) => (
  <Button plain onClick={onClick}>
    <Box
      pad={{ horizontal: 'large', vertical: 'small' }}
      direction="row"
      align="center"
      gap="small"
    >
      {Icon && <Icon />}
      <Text size="xlarge">{label}</Text>
    </Box>
  </Button>
);

class Browse extends Component {
  state = { active: 0 }

  render() {
    const { onScreen } = this.props;
    const { active } = this.state;
    return (
      <Keyboard
        target="document"
        onLeft={() => this.setState({ active: Math.max(0, active - 1) })}
        onRight={() => this.setState({ active: Math.min(items.length, active + 1) })}
        onEnter={() => onScreen('details')}
        onEsc={() => onScreen('splash')}
      >
        <Box fill direction="row">
          <Box
            flex={false}
            gap="medium"
            justify="between"
            align="start"
            margin={{ top: 'large' }}
            overflow="hidden"
          >
            <MenuButton label="search" Icon={Search} />
            <Box>
              <MenuButton label="featured" Icon={Target} />
              <MenuButton label="favorites" Icon={Favorite} />
              <MenuButton label="movies" Icon={Ticket} />
              <MenuButton label="series" Icon={Channel} />
              <MenuButton label="games" Icon={Gamepad} />
            </Box>
            <Stack guidingChild="last" anchor="top-right">
              <Box pad={{ right: 'xlarge' }}>
                <Logo />
              </Box>
              <Box pad={{ vertical: 'large' }}>
                <MenuButton label="grommet tv" onClick={() => onScreen('splash')} />
              </Box>
            </Stack>
          </Box>

          <Box flex={true} overflow="auto">
            <Grid
              columns="small"
              rows="medium"
              margin="large"
              gap="large"
            >
              {items.map((item, index) => (
                <Box
                  key={item}
                  background="dark-2"
                  round="small"
                  border={index === active
                    ? { size: 'medium', color: 'focus' }
                    : undefined
                  }
                  overflow="hidden"
                >
                  <Image fit="cover" src={`/images/image-${index}.jpg`} />
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>
      </Keyboard>
    );
  }
}

export default Browse;
