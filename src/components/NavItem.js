import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@mui/material';

function NavItem({
  href,
  title,
}) {
  const location = useLocation();

  const active = href ? !!matchPath({
    path: href,
    end: false,
  }, location.pathname) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0,
      }}
    >
      <Button
        component={RouterLink}
        sx={{
          color: 'background',
          fontWeight: 'bold',
          fontSize: 16,
          justifyContent: 'center',
          marginBottom: 1,
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'primary',
          }),
          '& svg': {
            mr: 1,
          },
          '&:hover': {
            color: 'primary.main',
          },
        }}
        to={href}
      >
        <span>
          {title}
        </span>
      </Button>
    </ListItem>
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
