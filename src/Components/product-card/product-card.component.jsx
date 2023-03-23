import { useContext, useState } from 'react';
import './product-card.styles.scss';
import { BsShop, BsChevronDown, BsChevronUp, BsHeartFill, BsHeart } from 'react-icons/bs'
import { MdAddShoppingCart, MdInfo } from 'react-icons/md'
import { CartContext } from '../../contexts/cart.context';
import { SavedContext } from '../../contexts/saved.context';

const  ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const { savedItems, addItemToSaved, clearItemFromSaved } = useContext(SavedContext);
  
  const [ infoExtend, setInfoExtend ] = useState(false);

  const addProductToCart = () => addItemToCart(product);
  const addProductToSaved = () => addItemToSaved(product);
  const clearProductFromSaved = () => clearItemFromSaved(product);

  const openMoreInfo = () => {
    setInfoExtend(!infoExtend)
  }
  return (
    <div className='card-container'>
      <div className='top-section'>
        <div className='first-div'>
          <BsShop size={18} color='white'/>
        </div>
        <div className='second-div'>
          <div className='name-card'>{name}</div>
          <div className='price-card'>${price}</div>        
        </div>
        {savedItems.find((el) => el.name === name) ? 
          <div className='third-div' onClick={clearProductFromSaved}>
            <BsHeartFill size={23} color='#a81d35'/>
          </div>
        :
          <div className='third-div' onClick={addProductToSaved}>
            <BsHeart size={23} color='#a81d35'/>
          </div>
        }
      </div>
      
      <div className='center-section'>
        <img alt={`${name}`} src={imageUrl} className='image'/>      
      </div>

      <div className='down-section'>
        <div className='first-div'>
          <div className='cart' onClick={addProductToCart}>
            <MdAddShoppingCart size={23} />
          </div>
          <div className='info'>
            <MdInfo size={23} />          
          </div>
          <div className='discount'>
            40%
          </div>        
        </div>
        {infoExtend ? 
          <div className='second-div' onClick={openMoreInfo}>
            <BsChevronUp size={23} />
          </div>
        :
          <div className='second-div' onClick={openMoreInfo}>
            <BsChevronDown size={23} />
          </div>
        }

      </div>
    </div>
  );
}

export default ProductCard;