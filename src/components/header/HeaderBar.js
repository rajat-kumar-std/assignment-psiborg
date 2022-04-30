import React from 'react';
import './header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../imges/logo.png';

const HeaderBar = () => {
  return (
    <div className="header-container">
      <GiHamburgerMenu className="hamburger-icon" />
      <h2 className="cart-title">Your Cart</h2>
      <img src={logo} alt="" className="logo-img" />
    </div>
  );
};

export default HeaderBar;
