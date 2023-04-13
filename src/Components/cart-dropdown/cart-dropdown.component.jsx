import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import CartItem from '../cart-item/cart-item.component'
import Button from "../button/button.component";

import { CartList, CartListBox, EmptyMessage } from "./cart-dropdown.styles";

const CartDropDownList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector(selectCartItems);

    const goToCheckoutHandler = () => {
      dispatch(setIsCartOpen(false));
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