import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';

import './Checkout.css';

const COLUMNS = ['Image', 'Product', 'Price', 'Quantity'];

const Checkout = () => {
  const history = useHistory();
  const itemsInCart = useSelector((store) => store.cart.data);

  const handleClick = () => {
    const location = {
      pathname: '/shop'
    }
    history.push(location);
  };

  const tableHeaderTitles = COLUMNS.map((title, index) => <p key={index}>{title}</p>);
  const cartItemComponents = itemsInCart.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>);
  const tableContent = itemsInCart.length > 0 
  ? cartItemComponents 
  : (<p className='checkout__content-text-empty'>No items in the cart</p>);

  return (
    <section className="checkout">
      <div className="checkout__table-header">
        {tableHeaderTitles}
      </div>
      <div className="checkout__table-content">
        {tableContent}
      </div>
      <div className="checkout__table-footer">
        <p className='checkout__total-text'>Total: 2 x $19.20</p>
      </div>
      <div className="checkout__buttons">
        <div className="checkout__button-wrapper">
          <button onClick={handleClick} className='checkout__button-continue'>Continue Shopping</button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;