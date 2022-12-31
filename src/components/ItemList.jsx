import { Product } from "./Item";
import Loader from "./Loader";
import { ContMainCards } from "../styles/components/ItemListContainer.Elements";

export const ItemList = ({ items }) => {
    return (
        <ContMainCards>
            {items.length > 0 ? (
                items.map((item) => <Product key={item.id} {...item} />)
            ) : (
                <Loader />
            )}
        </ContMainCards>
    );
};
