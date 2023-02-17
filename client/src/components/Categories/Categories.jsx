import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress@cs=tinysrgb&w=600"
            alt="01"
          />
          <Link className="link" to="/products/1">
            <button>T-Shirts</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress@cs=tinysrgb&w=600"
            alt="02"
          />
          <Link className="link" to="/products/1">
            <button>Femmes</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/4462781/pexels-photo-4462781.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="03"
          />
          <Link className="link" to="/products/3">
            <button>Sneakers</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress@cs=tinysrgb&w=600"
                alt="04"
              />
              <Link className="link" to="/products/2">
                <button>Hommes</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/3021554/pexels-photo-3021554.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="04"
              />
              <Link className="link" to="/products/4">
                <button>Chapeaux</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/14506978/pexels-photo-14506978.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="06"
          />
          <Link className="link" to="/products/3">
            <button>Chaussures</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
