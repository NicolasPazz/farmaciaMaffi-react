import Nav from 'react-bootstrap/Nav';
import { IoCartOutline } from 'react-icons/io5';

const CartWidget = () => {
    return (
        <div className="cartIcon">
            <span className="cartQuantity">5</span>
            <Nav.Link href="#carrito"><IoCartOutline /></Nav.Link>
        </div>
    )
}

export default CartWidget;
