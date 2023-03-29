import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component'
import Button from "../button/button.component";

import { CartList, CartListBox, EmptyMessage } from "./cart-dropdown.styles";

const CartDropDownList = () => {
    const { cartItems, setIsCartOpen } = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
      setIsCartOpen(false);
      navigate('/checkout');
    };
    return (
        <CartListBox>
            <CartList>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                      <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                  ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                  )}
            </CartList>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartListBox>
    );
};

export default CartDropDownList;