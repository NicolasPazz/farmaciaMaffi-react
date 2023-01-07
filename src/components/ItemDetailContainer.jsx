import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { fetchOneFromFirebase } from "../utils/fetchFromFirebase";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        document.title = "Farmacia Maffi | Descripción";
    }, []);

    useEffect(() => {
        fetchOneFromFirebase(idItem)
            .then((result) => setDato(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <ItemDetail items={dato} />
        </>
    );
};

export default ItemDetailContainer;
