import { AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {

    return (
        <AppBar sx={{ backgroundColor: "#000000" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography sx={{ height: "100px", marginTop: "15px"}} >
                    <img src="https://www.monsterenergy.com/img/home/monster-logo.png" alt="Logo Monster" />
                </Typography>
                <NavLink className="navbar-link" to="/">
                <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    Home/Categorias
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/products">
                    <Typography >
                        Productos
                    </Typography>
                </NavLink>
                <NavLink>
                    <CartWidget />
                </NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;