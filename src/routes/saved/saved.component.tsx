import ProductCardSaved from '../../Components/product-card-saved/product-card-saved.component';
import { useSelector } from 'react-redux';
import { selectSavedItems } from '../../store/saved/saved.selector';
import { SavedContainer } from './saved.styles';

const Saved = () => {
  const savedItems = useSelector(selectSavedItems);

  return (
    <SavedContainer>
      {savedItems.length ? 
        savedItems.map((savedItem) => (
          <ProductCardSaved key={savedItem.id} product={savedItem}/>
        ))
      :
        <div>
          No products in stock
        </div>
      }
    </SavedContainer>
  );
};

export default Saved;