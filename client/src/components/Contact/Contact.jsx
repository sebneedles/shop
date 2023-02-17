import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Restez en contact avec nous !</span>
        <div className="mail">
          <input type="text" placeholder="Entrez votre email" />
          <button>REJOIGNEZ-NOUS</button>
        </div>
        <div className="icons">
          <Link to="https://facebook.com/" target="_blank">
            <FacebookIcon titleAccess="Facebook" />
          </Link>
          <Link to="https://instagram.com/" target="_blank">
            <InstagramIcon titleAccess="Instagram" />
          </Link>
          <Link to="https://twitter.com/" target="_blank">
            <TwitterIcon titleAccess="Twitter" />
          </Link>
          <Link to="https://google.com/" target="_blank">
            <GoogleIcon titleAccess="Google" />
          </Link>
          <Link to="https://pinterest.com/" target="_blank">
            <PinterestIcon titleAccess="Pinterest" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
