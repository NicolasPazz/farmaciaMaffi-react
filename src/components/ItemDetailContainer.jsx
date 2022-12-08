import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { products } from '../utils/products';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idProduct)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idProduct]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;