// @ts-nocheck
import React, { useRef } from 'react';
import './Navigation.css';
import { FaCartPlus, FaLock, FaCamera, FaBars, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Navigation = ({ SignIn, Favourites, Cart, type, ...props }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <nav className="example">
      <div className="navheader">
        <h1>simply spices</h1>
        <a href="/">
          {' '}
          <FaCamera />
          Sign In
        </a>
        <h4>
          <FaLock />
          Favourites
        </h4>
        <h4>
          <FaCartPlus />
          Cart
        </h4>
        <button type="button" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>

      <div className="navbar" ref={navRef}>
        <a href="/spices">Spices</a>
        <a href="/about">AboutUs</a>
        <a href="/contact">Contact</a>
        <button type="button" onClick={showNavbar}>
          <FaTimes />
        </button>

        <div className="search_input_box">
          <input
            className="search_input"
            type="text"
            placeholder="search for  product..."
          />
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  SignIn: PropTypes.string,
  Favourites: PropTypes.string,
  Cart: PropTypes.string,
  type: PropTypes.string,
};
Navigation.defaultProps = {
  SignIn: '',
  Favourites: '',
  Cart: '',
  type: '',
};
