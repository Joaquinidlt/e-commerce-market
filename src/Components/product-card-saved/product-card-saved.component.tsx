import { useState, FC } from 'react';
import { BsShop, BsChevronDown, BsChevronUp, BsHeartFill, BsHeart } from 'react-icons/bs'
import { MdAddShoppingCart, MdInfo } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { selectSavedItems } from '../../store/saved/saved.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { clearItemFromSaved } from '../../store/saved/saved.action';
import { CategoryItem } from '../../store/categories/category.types';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CardSavedContainer, TopSection, First, Second, NameCard, PriceCard, ThirdDiv, CenterSection, DownSection, FirstDiv, Cart, Info, Discount, SecondDiv } from './product-card-saved.styles';

type ProductCardProps = {
  product: CategoryItem;
}

const  ProductCardSaved: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const savedItems = useSelector(selectSavedItems);
  
  const [ infoExtend, setInfoExtend ] = useState(false);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  const clearProductFromSaved = () => dispatch(clearItemFromSaved(savedItems, product));
  
  const openMoreInfo = () => {
    setInfoExtend(!infoExtend)
  }
  return (
    <CardSavedContainer>
      <TopSection>
        <First>
          <BsShop size={18} color='white'/>
        </First>
        <Second>
          <NameCard>{name}</NameCard>
          <PriceCard>${price}</PriceCard>        
        </Second>
        {savedItems.find((el) => el.name === name) ? 
          <ThirdDiv onClick={clearProductFromSaved}>
            <BsHeartFill size={23} color='#a81d35'/>
          </ThirdDiv>
        :
          <ThirdDiv>
            <BsHeart size={23} color='#a81d35'/>
          </ThirdDiv>          
        }
      </TopSection>
      
      <CenterSection>
        <img alt={`${name}`} src={imageUrl}/>      
      </CenterSection>

      <DownSection>
        <FirstDiv>
          <Cart onClick={addProductToCart}>
            <MdAddShoppingCart size={23} />
          </Cart>
          <Info>
            <MdInfo size={23} />          
          </Info>
          <Discount>
            40%
          </Discount>        
        </FirstDiv>
        {infoExtend ? 
          <SecondDiv onClick={openMoreInfo}>
            <BsChevronUp size={23} />
          </SecondDiv>
        :
          <SecondDiv onClick={openMoreInfo}>
            <BsChevronDown size={23} />
          </SecondDiv>
        }
      </DownSection>
    </CardSavedContainer>
  );
}

export default ProductCardSaved;