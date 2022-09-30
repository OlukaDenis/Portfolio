import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
//   NavLink as RouterLink,
  //   matchPath,
  useLocation,
} from 'react-router-dom';

import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  Link,
  Chip,
  IconButton,
  Stack,
} from '@mui/material';
import { CodeRounded, OpenInNewRounded } from '@mui/icons-material';
import fetchProjects from '../store/actions/project.action';
import { useAnalytics } from '../utils/googleAnalytics';
import Loading from '../components/loading';

export default function Work() {
  const projectState = useSelector((state) => state.projectReducer);
  const { loading, projects, error } = projectState;

  const dispatch = useDispatch();

  const location = useLocation();
  useAnalytics(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">

      <Box sx={{
        display: 'flex', justifyContent: 'center', padding: 4, marginTop: 5, marginBottom: 3,
      }}
      >
        <Typography variant="h1" color="secondary" fontWeight="bold">My Work</Typography>
      </Box>
      <Grid
        container
        spacing={6}
      >
        {loading && <Loading />}
        {error ? <p>Error</p>
          : projects && projects.map((project) => (
            <Grid
              key={project.id}
              item
              lg={6}
              md={6}
              xl={6}
              xs={12}
            >
              <Box sx={{ padding: 4 }}>

                <Box sx={{ padding: 2 }}>
                  <Avatar
                    variant="rounded"
                    src={project.coverImage}
                    sx={{
                      width: '100%',
                      height: 300,
                    }}
                  />
                </Box>

                <Box>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      variant="outlined"
                      size="small"
                      sx={{ marginRight: 1, marginBottom: 1, color: (theme) => theme.palette.grayish }}
                    />
                  ))}
                </Box>

                <Box sx={{ marginTop: 1 }}>
                  <Link
                    href={project.liveUrl}
                    underline="none"
                    variant="h3"
                    color="secondary"
                    sx={{
                      fontWeight: 'bold',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {project.title}
                  </Link>
                </Box>

                <Typography
                  variant="body1"
                  color="secondary"
                  align="justify"
                  sx={{ marginTop: 2 }}
                >
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} mt={1}>
                  <IconButton aria-label="delete" color="secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                    <CodeRounded />
                  </IconButton>
                  <IconButton aria-label="delete" color="secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                    <OpenInNewRounded />
                  </IconButton>
                </Stack>

              </Box>
            </Grid>
          ))}

      </Grid>
    </Container>
  );
}
