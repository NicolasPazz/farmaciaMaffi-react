import {
    Img,
    CardDetail,
    CardImage,
    ContCard,
    DetailCont,
    Title,
    Description,
    Price,
    ContFooterDetail,
    ContStock,
    BtnToCart,
    MainDetail,
} from "../styles/components/ItemDetailContainer.Elements";
import ItemCount from "./ItemCount.jsx";
import { useState, useContext } from "react";
import Loader from "./Loader.jsx";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { CartContext } from "./CartContext.jsx";

const ItemDetail = ({ items }) => {
    const [itemCount, setItemCount] = useState(0);

    const { addToCart } = useContext(CartContext);

    const notifyAdd = (qty) => {
        toast.success(
            qty === 1
                ? "Se ha agregado 1 producto"
                : `Se ha agregado ${qty} productos`,
            {
                style: {
                    border: "1px solid #713200",
                    padding: "16px",
                    color: "#713200",
                },
                iconTheme: {
                    primary: "#713200",
                    secondary: "#FFFAEE",
                },
                duration: 1000,
            }
        );
    };

    const onAdd = (qty) => {
        notifyAdd(qty);
        setItemCount(qty);
        addToCart(items, qty);
    };

    return (
        <MainDetail>
            {items && items.image ? (
                <>
                    <DetailCont>
                        <ContCard>
                            <CardImage>
                                <Img src={items.image} />
                            </CardImage>

                            <CardDetail>
                                <Title>{items.name}</Title>
                                <Description>{items.description}</Description>
                                <ContStock>Stock: {items.stock}</ContStock>
                                <ContFooterDetail>
                                    <Price>${items.price}</Price>
                                    {itemCount === 0 ? (
                                        <ItemCount
                                            initial={itemCount}
                                            stock={items.stock}
                                            onAdd={onAdd}
                                        />
                                    ) : (
                                        <Link to="/cart">
                                            <BtnToCart>Ir al carrito</BtnToCart>
                                        </Link>
                                    )}
                                </ContFooterDetail>
                            </CardDetail>
                        </ContCard>
                    </DetailCont>
                </>
            ) : (
                <Loader />
            )}
        </MainDetail>
    );
};
export default ItemDetail;
