import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* MENU FILTER */}
        <div className="left">
          <div className="logo">
            <div className="flag">
              <div className="box1"> </div>
              <div className="box2"> </div>
              <div className="box3"> </div>
            </div>
            <Link to="/">
              TheFrenchStore<sup>®</sup>
            </Link>
            <span></span>
          </div>
        </div>

        {/* LOGO */}
        <div className="center">
          {/* <div className="item">
            <Link className="link" to="/products/1">
              Femmes
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Hommes
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Chaussures
            </Link>
          </div> */}
        </div>

        {/* NAVIGATION */}
        <div className="right">
          <div className="item">
            <Link className="link" to="/products/1">
              Femmes
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Hommes
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Chaussures
            </Link>
          </div>
          {/* <div className="item">
            <Link className="link" to="/products/4">
              Accessoires
            </Link>
          </div> */}
          <div className="icons">
            {/* <SearchIcon titleAccess="Rechercher" /> */}
            <PersonOutlineIcon titleAccess="Mon compte" />
            <FavoriteBorderIcon titleAccess="Mes favoris" />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <AddShoppingCartIcon titleAccess="Mon panier" />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
