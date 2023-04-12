import './saved.styles.scss';
import ProductCardSaved from '../../Components/product-card-saved/product-card-saved.component';
import { useSelector } from 'react-redux';
import { selectSavedItems } from '../../store/saved/saved.selector';

const Saved = () => {
  const savedItems = useSelector(selectSavedItems);

  return (
    <div className='saved-container'>
      {savedItems.length ? 
        savedItems.map((savedItem) => (
          <ProductCardSaved key={savedItem.id} product={savedItem}/>
        ))
      :
        <div>
          No products in stock
        </div>
      }
    </div>
  );
};

export default Saved;