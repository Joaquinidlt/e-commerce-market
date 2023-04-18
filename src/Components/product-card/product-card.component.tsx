import { useState, FC } from 'react';
import { BsShop, BsChevronDown, BsChevronUp, BsHeartFill, BsHeart } from 'react-icons/bs'
import { MdAddShoppingCart, MdInfo } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { addItemToSaved, clearItemFromSaved } from '../../store/saved/saved.action';
import { selectSavedItems } from '../../store/saved/saved.selector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';
import { CardContainer, First, TopSection, Second, ThirdDiv, PriceCard, NameCard, CenterSection, DownSection, FirstDiv, Cart, Info, Discount, SecondDiv } from './product-card.styles';
import { CategoryItem } from '../../store/categories/category.types';

type ProductCardProps = {
  product: CategoryItem;
}

const  ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const [ infoExtend, setInfoExtend ] = useState(false);

  const cartItems = useSelector(selectCartItems);
  const savedItems = useSelector(selectSavedItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  const addProductToSaved = () => dispatch(addItemToSaved(savedItems, product));
  const clearProductFromSaved = () => dispatch(clearItemFromSaved(savedItems, product));

  const openMoreInfo = () => {
    setInfoExtend(!infoExtend)
  }
  return (
    <CardContainer>
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
            <ThirdDiv onClick={addProductToSaved}>
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
    </CardContainer>
  );
}

export default ProductCard;