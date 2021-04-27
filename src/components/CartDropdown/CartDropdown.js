import React from 'react';
import { useHistory } from 'react-router';
import './CartDropdown.css';

const CartDropdown = ({callback}) => {
  const history = useHistory();

  const handleClick = () => {
    callback();
    history.push('/shop/checkout/checkorders');
  }

  return (
    <div className="cartDropdown">
      <p className='cartDropdown__total'>Total: <span>0</span> X <span>0$</span></p>
      <button className='cartDropdown__checkout-btn' onClick={handleClick}>Checkout</button>
    </div>
  );
}

export default CartDropdown;