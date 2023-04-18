import { FC } from 'react'
import { CategoryItem } from '../../store/categories/category.types.js';
import ProductCard from '../product-card/product-card.component.jsx';
import { CardListContainer } from './card-list.styles.jsx';

type CardListProps = {
    products: CategoryItem[]
}
const  CardList: FC<CardListProps> = ({ products }) => {

    return (
        <CardListContainer>
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>            
            ))}
        </CardListContainer>
    );
}

export default CardList;