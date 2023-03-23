import ProductCard from '../product-card/product-card.component.jsx';
import { CardListContainer } from './card-list.styles.jsx';

const  CardList = ({ products }) => {

    return (
        <CardListContainer>
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>            
            ))}
        </CardListContainer>
    );
}

export default CardList;