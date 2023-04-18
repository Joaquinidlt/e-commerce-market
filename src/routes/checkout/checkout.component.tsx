import { useSelector } from 'react-redux';

import CheckoutItem from '../../Components/checkout-item/checkout-item-component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import PaymentForm from '../../Components/payment-form/payment-form.component';
import { CheckoutContainer, CheckoutHeader, CheckoutBlock, BoxPlay, Total } from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutBlock>
          <span>Product</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Description</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Quantity</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Price</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Remove</span>
        </CheckoutBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <BoxPlay>
        <Total>TOTAL: ${cartTotal}</Total>
        <PaymentForm/>
      </BoxPlay>
    </CheckoutContainer>
  );
};

export default Checkout;