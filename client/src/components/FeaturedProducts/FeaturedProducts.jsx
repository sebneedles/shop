import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>Produits {type}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores
          distinctio quaerat commodi excepturi voluptatum doloribus, autem, a ut
          quisquam reiciendis corporis vero, vel praesentium nemo deleniti unde
          officia fuga nisi dignissimos explicabo. Id inventore molestiae dolor
          eaque nisi voluptatem?
        </p>
      </div>
      <div className="bottom">
        {error
          ? 'Données manquantes ...'
          : loading
          ? 'Chargement ...'
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
