import { useState } from 'react';
import './product-card.styles.scss';
import { BsShop, BsChevronDown, BsChevronUp, BsHeartFill, BsHeart } from 'react-icons/bs'
import { MdAddShoppingCart, MdInfo } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action.js';
import { addItemToSaved, clearItemFromSaved } from '../../store/saved/saved.reducer';
import { selectSavedItems } from '../../store/saved/saved.selector';
import { selectCartItems } from '../../store/cart/cart.selector';

const  ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const [ infoExtend, setInfoExtend ] = useState(false);

  const cartItems = useSelector(selectCartItems);
  const savedItems = useSelector(selectSavedItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  const addProductToSaved = () => dispatch(addItemToSaved(product));
  const clearProductFromSaved = () => dispatch(clearItemFromSaved(product));

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