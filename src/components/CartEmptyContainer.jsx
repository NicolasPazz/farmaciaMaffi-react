import {
    ContCarritoVacio,
    PmsjErr,
    StyledLink,
} from "../styles/components/Cart.Elements";

const CartEmpty = () => {
    return (
        <ContCarritoVacio>
            <PmsjErr>El carrito esta vacio.</PmsjErr>

            <StyledLink to="/">Ir a comprar</StyledLink>
        </ContCarritoVacio>
    );
};
export default CartEmpty;
