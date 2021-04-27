import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

import CartDropdown from '../../components/CartDropdown/CartDropdown';

import './Navigation.css';

const Navigation = () => {

  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const toggleVisibility = () => {
    setDropdownVisibility((prevValue) => !prevValue);
  }

  const cartDropdownComponent = dropdownVisibility ? <CartDropdown callback={toggleVisibility}/> : null;

  return (
    <nav className='navbar'>
        <div className="navbar__left">
          <div className="navbar__logo-wrapper">
            <Link to='/' className='navbar__logo'>Item<span>Shop</span></Link>
          </div>
          <div className="navbar__text-wrapper">
            <p className='navbar__text'>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="navbar__right">
          <div className='navbar__cart' onClick={toggleVisibility}>
            <p className='navbar__cart-items-number'>0</p>
            <i className="fas fa-shopping-cart"></i>
          </div>
          {cartDropdownComponent}
        </div>
    </nav>
  );
}

export default Navigation;