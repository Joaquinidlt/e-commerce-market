import { useContext } from 'react';
import { SavedContext } from '../../contexts/saved.context';
import './saved.styles.scss';
import ProductCardSaved from '../../Components/product-card-saved/product-card-saved.component';


const Saved = () => {
  const { savedItems } = useContext(SavedContext);

  return (
    <div className='saved-container'>
      {savedItems.map((savedItem) => (
        <ProductCardSaved key={savedItem.id} product={savedItem}/>
      ))}
    </div>
  );
};

export default Saved;