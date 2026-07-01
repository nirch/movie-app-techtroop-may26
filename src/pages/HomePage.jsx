import { Button, Container, Group, Text } from '@mantine/core';
// import { GithubIcon } from '@mantinex/dev-icons';
import classes from './HomePage.module.css';
import { Link } from 'react-router';

export default function HomePage() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          An amazing{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Movie Application
          </Text>{' '}
          to show case React's Features 🎥
        </h1>

        {/* <Text className={classes.description} c="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text> */}

        <Group className={classes.controls}>
          <Button
            component={Link}
            to="/movies"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>
          

          {/* <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button> */}
        </Group>
      </Container>
    </div>
  );
}