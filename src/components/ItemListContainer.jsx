import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { Wrapper } from './styledComponents';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from '../utils/products';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { nameCategory } = useParams();

    useEffect(() => {
        customFetch(2000, products)
        .then(result =>{
            if(nameCategory){
                setDatos(result.filter((item)=> item.category.name == nameCategory))
            }else{
                setDatos(result)
            }
        } )
            .catch(err => console.log(err))
    }, [nameCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;