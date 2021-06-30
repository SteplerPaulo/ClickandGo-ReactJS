import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Material UI Core
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';

//Material UI Icons
import StoreIcon from '@material-ui/icons/Store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import MoreIcon from '@material-ui/icons/MoreVert';


//Admin Views
import Catalogue from 'views/Public/Catalogue/Catalogue.js';
import Cart from 'views/Public/Cart.js';
import Messages from 'views/Public/Messages.js';

//Custom Style
import useStyles from 'components/AppBar/Style.js'

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';


    return (
        <Router className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton component={Link} to="/" edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
                        <StoreIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Click & Go
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton component={Link} to="/cart" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton component={Link} to="/messages" aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <QuestionAnswerIcon />
                            </Badge>
                        </IconButton>
                        <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true"
                            onClick={handleProfileMenuOpen} color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Container>
                <Menu
                    anchorEl={mobileMoreAnchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={mobileMenuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMobileMenuOpen}
                    onClose={handleMobileMenuClose}
                >
                    <MenuItem component={Link} to="/cart">
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <p>Cart</p>
                    </MenuItem>
                    <MenuItem component={Link} to="/messages">
                        <IconButton aria-label="show 11 new notifications" color="inherit">
                            <Badge badgeContent={11} color="secondary">
                                <QuestionAnswerIcon />
                            </Badge>
                        </IconButton>
                        <p>Messages</p>
                    </MenuItem>
                    <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <p>Profile</p>
                    </MenuItem>
                </Menu>

                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleMenuClose}>Setting</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>

                <Switch>
                    <Route path="/catalogue"><Catalogue /></Route>
                    <Route path="/cart"><Cart /></Route>
                    <Route path="/messages"><Messages /></Route>
                    <Route exact path="/"><Catalogue /></Route>
                </Switch>
            </Container>
        </Router>
    );
}
