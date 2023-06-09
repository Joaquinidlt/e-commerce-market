import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';

import ProductCard from '../../Components/product-card/product-card.component';
import Spinner from '../../Components/spinner/spinner.component';

import { CategoryContainer, CategoryTitle} from './category.styles';

type CategoryRouteParams = {
  category: string;
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const idLoading = useSelector(selectCategoriesIsLoading);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {idLoading ? (
        <Spinner/>
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>        
      )}

    </Fragment>
  );
};

export default Category;