import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from "@mui/material";
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cart } = useCartContext();
    return ( 
        <div style={{display: "flex", alignItems: "center"}}>
            <ShoppingCartIcon/>
            <Typography> {cart.items.lenght} </Typography>
        </div>
    );
}

export default CartWidget;