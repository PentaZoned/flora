import React from 'react';
import { Container, AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from '../styles';
import Auth from "../../utils/auth";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HistoryIcon from '@mui/icons-material/History';

const pages = [
    {
        pageTitle: "Flora",
        pageURL: "/",
    }, 
    {
        pageTitle: "Cart",
        pageURL: "/Cart",
    },
    {
        pageTitle: "Spin",
        pageURL: "/Spin",
    },
    {
        pageTitle: "Signup",
        pageURL: "/Signup",
    },
    {
        pageTitle: "Login",
        pageURL: "/Login",
    },
];

function Navbar (props) {

    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }
    const handleCloseNavMenu = (pageURL) => {
        setAnchorElNav(null);
        if (pageURL)
            props.handlePageChange(pageURL);
    }


    if (Auth.loggedIn()) {
          return (
            <ul className="flex-row">
              <li className="mx-1">
                <Link to="/history">
                <HistoryIcon /> Order History
                </Link>
              </li>

              <li className="mx-1">
                <Link to="/Cart">
                <AddShoppingCartIcon />Cart
                </Link>
              </li>

              <li className="mx-1">
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          );
        } else {
          return (
        <AppBar className={classes.navStyle} position="static">
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: {xs: 'none', md: 'flex'}}}>
                        Flora
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={() => {
                                handleCloseNavMenu(null);
                            }}
                        sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                        {pages.map((page, index)=> {
                            const { pageTitle, pageURL} = page;
                            return (
                            <MenuItem key={index} onClick={()=> {
                                handleCloseNavMenu(pageURL)
                            }}
                            > 
                                <Typography textAlign="center">{pageTitle}</Typography>
                            </MenuItem>
                            );
                        })}
                        </Menu>
                        </Box>
                    <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: {xs: 'flex',md:'none'}}}
                    > 
                        Flora
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex' }}}>
                        {pages.map((page, index) => {
                            const { pageTitle, pageURL} = page;
                            return (
                            <Button
                                key={index}
                                onClick={()=>handleCloseNavMenu(pageURL)}
                                sx={{ my: 2, color: 'white', display: 'block'}}
                            >
                                {pageTitle}
                            </Button>
                            );
                            })}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar;