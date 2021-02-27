import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div className="Header">
  <img src={logo} />
  <nav>
    <a href="/shop">Shop</a>
    <a href="/review">Order Review</a>
    <a href="/manage">Manage Inventory here</a>
 </nav>
 <form>
   <input className="search-bar" type="text" placeholder="type to search here"/><FontAwesomeIcon className="input-cart" icon={faShoppingCart} />
 </form>
    </div>
  );
};

export default Header;