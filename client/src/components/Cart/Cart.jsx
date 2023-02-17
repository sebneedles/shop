import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      <h1>Produit(s) dans votre panier</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <Link to={`/product/${item.id}`}>
            <img
              src={process.env.REACT_APP_UPLOAD_URL + item.img}
              alt="item img"
            />
          </Link>
          <div className="details">
            <h3>{item.title}</h3>
            <p>{item.desc?.substring(0, 10) + '...'}</p>
            <div className="price">
              {item.quantity} x {item.price} €
            </div>
          </div>
          <DeleteOutlinedIcon
            titleAccess="Supprimer l'article"
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <hr />
      <div className="total">
        <span>TOTAL :</span> <span> {totalPrice()} €</span>
      </div>
      <button>Passer à la caisse</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Réinitialiser le panier
      </span>
    </div>
  );
};

export default Cart;
