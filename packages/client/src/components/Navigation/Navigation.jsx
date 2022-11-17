import React from 'react';
import './Navigation.css';
import { FaCartPlus, FaLock, FaCamera } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Navigation = ({ SignIn, Favourites, Cart, type, ...props }) => {
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
      </div>
      <div className="navbar">
        <a href="/spices">Spices</a>
        <a href="/about">AboutUs</a>
        <a href="/contact">Contact</a>
        <div className="search_input_box">
          <input
            className="search_input"
            type="text"
            placeholder="search for  product..."
            // value={searchProduct}
            // onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  SignIn: PropTypes.string,
  /**
   * What background color to use
   */
  Favourites: PropTypes.string,
  /**
   * How large should the button be?
   */
  Cart: PropTypes.string,
  /**
   * Button contents
   */
  type: PropTypes.string,
  /**
   * Optional click handler
   */
};
Navigation.defaultProps = {
  SignIn: '',
  Favourites: '',
  Cart: '',
  type: '',
};
