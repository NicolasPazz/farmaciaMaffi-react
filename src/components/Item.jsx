import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';

const Item = ({ id, name, stock, price, image }) => {
    return (
        <ProductContainer>
            <Image src={image} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{ cursor: "pointer" }}>
                    <Link to={`/item/${id}`}><InfoOutlined />Descripción</Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;