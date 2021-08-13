import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import routes from "routes/admin.routes.js";
//Material UI Style
import clsx from 'clsx';
//Material UI Core
import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';
//Material UI Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
//Views
import Dashboard from 'views/Admin/Dashboard.js';
//Custom Style
import useStyles from 'layouts/Admin/Style.js'

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Click and Go - Admin
          </Typography>
        </Toolbar>
      </AppBar>
      
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
              <ListItem button component={Link} to="/" >
                <ListItemIcon><HomeIcon /> </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
          </List>
          <Divider />
          <List>
            {routes.map((prop) => (
              <ListItem button component={Link} to={prop.layout + prop.path} key={prop.name}>
                <ListItemIcon><prop.icon /> </ListItemIcon>
                <ListItemText primary={prop.name} />
              </ListItem>)
            )}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/admin"><Dashboard /></Route>
            {routes.map((prop) => (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={prop.name}
              />
            ))}
          </Switch>
        </main>
    </div>
  );
}