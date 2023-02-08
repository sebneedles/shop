import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quasi, libero ratione fugiat exercitationem sapiente laboriosam
            molestias accusantium voluptatibus qui. A nisi itaque autem, ab
            excepturi minima nihil quos corrupti!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rem sunt
            illum expedita quasi magnam ipsa harum iste nam officia aliquid.
            Quibusdam repellendus provident dicta deleniti quisquam earum vel
            ratione!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">MyStore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="./img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
