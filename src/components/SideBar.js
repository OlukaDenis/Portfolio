import React from 'react';
import '../App.scss';
import '../scss/NavBar.scss';
import { NavLink } from 'react-router-dom';
import {
  List,
  Link,
  Button,
  Typography,
  Stack,
  Box,
  Avatar,
} from '@mui/material';
import ReactGA from 'react-ga';
import NavBar from './navbar/Navbar';
import NavItem from './NavItem';

const items = [
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/work',
    title: 'My Work',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
];

export default function SideBar() {
  ReactGA.initialize('UA-161206924-2');

  const registerResumeAnalytics = () => {
    ReactGA.event({
      category: 'Resume',
      action: 'View my resume',
    });
  };

  const registerHireAnalytics = () => {
    ReactGA.event({
      category: 'Hire Me',
      action: 'Send a hire me email',
    });
  };

  return (
    <>
      <Box className="side-bar-menu">
        <NavBar />
      </Box>
      <Box
        id="colorlib-aside"
        className="js-fullheight text-center"
      >
        <Box mb={10} sx={{ display: 'flex', justifyContent: 'center' }}>
          <NavLink to="/">
            <Avatar src="images/logo.svg" alt="Denny Logo" sx={{ width: 100, height: 100 }} />
          </NavLink>
        </Box>

        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
            />
          ))}
        </List>

        <Stack direction="column" spacing={1} mt={3}>

          <Link
            href="https://docs.google.com/document/d/1VFzAuigGH8sAw9jthdutik0dYWDmfR3QE3-GFLnym8k/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            textTransform="capitalize"
            onClick={() => registerResumeAnalytics}
          >
            <Button variant="outlined" size="large">
              <Typography variant="h6" textTransform="capitalize">Resume</Typography>
            </Button>
          </Link>

          <Link
            href="mailto:olukadeno@gmail.com"
            underline="none"
            textTransform="capitalize"
            onClick={() => registerHireAnalytics}
          >
            <Button variant="contained" size="large">
              <Typography variant="h5" textTransform="capitalize" color="secondary">Hire Me</Typography>
            </Button>
          </Link>
        </Stack>

      </Box>
    </>
  );
}
