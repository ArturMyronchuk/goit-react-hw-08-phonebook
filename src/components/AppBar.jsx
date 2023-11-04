import { AppBar, Toolbar, Typography } from '@mui/material';
import { selectIsAutenticated } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu/UserMenu';
import { Home } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, REGISTER_ROUTE, LOGIN_ROUTE } from 'config/routes';
export const ComponentHeader = () => {
  const authenticated = useSelector(selectIsAutenticated);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="span"
          sx={{
            flexGrow: 1,
            display: {
              xs: 'none',
              md: 'flex',
              justifyContent: 'space-between',
            },
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {authenticated ? (
            <UserMenu />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Home
                color="inherit"
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              />
              <NavLink
                to={HOME_ROUTE}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                HOME
              </NavLink>
              <NavLink
                to={REGISTER_ROUTE}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  marginLeft: '1rem',
                }}
              >
                REGISTER
              </NavLink>
              <NavLink
                to={LOGIN_ROUTE}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  marginLeft: '1rem',
                }}
              >
                LOG IN
              </NavLink>
            </div>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
