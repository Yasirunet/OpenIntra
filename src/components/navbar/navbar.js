import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './navbar.style';
import { Link } from 'react-router-dom';

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.navItemButton}>
              OpenIntra
            </Link>
          </Typography>
          <Link to="/login" className={classes.navItemButton}>
            <Button color="secondary">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
