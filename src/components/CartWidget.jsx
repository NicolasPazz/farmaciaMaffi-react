import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
    return (
        <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;