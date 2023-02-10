import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
import axios from 'axios';

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + '/products?populate=*',
          {
            headers: {
              Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores
          distinctio quaerat commodi excepturi voluptatum doloribus, autem, a ut
          quisquam reiciendis corporis vero, vel praesentium nemo deleniti unde
          officia fuga nisi dignissimos explicabo. Id inventore molestiae dolor
          eaque nisi voluptatem?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
