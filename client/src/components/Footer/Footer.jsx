import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import PayMethod from '../../img/payment.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="top">
          <div className="item">
            <h3>Catégories</h3>
            <span>
              <Link>Femmes</Link>
            </span>
            <span>
              <Link>Hommes</Link>
            </span>
            <span>
              <Link>Chaussures</Link>
            </span>
            <span>
              <Link>Accessoires</Link>
            </span>
            <span>
              <Link>Nouvelle Saison</Link>
            </span>
          </div>
          <div className="item">
            <h3>Liens</h3>
            <span>
              <Link>FAQ</Link>
            </span>
            <span>
              <Link>Pages</Link>
            </span>
            <span>
              <Link>Nos Magasins</Link>
            </span>
            <span>
              <Link>Comparatif</Link>
            </span>
            <span>
              <Link>Cookies</Link>
            </span>
          </div>
          <div className="item">
            <h3>A propos</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quasi, libero ratione fugiat exercitationem sapiente laboriosam
              molestias accusantium voluptatibus qui. A nisi itaque autem, ab
              excepturi minima nihil quos corrupti!
            </span>
          </div>
          <div className="item">
            <h3>Contact</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rem
              sunt illum expedita quasi magnam ipsa harum iste nam officia
              aliquid.
            </span>
          </div>
        </div>
        <div className="bottom">
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

            <span className="copyright">© 2023. Tous droits réservés.</span>
          </div>
          <div className="right">
            <img src={PayMethod} alt="Méthodes de paiement" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
