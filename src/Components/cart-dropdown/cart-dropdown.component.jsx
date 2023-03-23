import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartList, CartListBox, EmptyMessage } from "./cart-dropdown.styles";
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";


const CartDropDownList = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
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