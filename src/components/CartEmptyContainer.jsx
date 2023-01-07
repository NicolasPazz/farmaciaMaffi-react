import {
    ContCarritoVacio,
    PmsjErr,
    StyledLink,
} from "../styles/components/Cart.Elements";

const CartEmpty = () => {
    return (
        <ContCarritoVacio>
            <PmsjErr>El carrito esta vacio.</PmsjErr>

            <StyledLink to="/">Volver a la Tienda</StyledLink>
        </ContCarritoVacio>
    );
};
export default CartEmpty;
