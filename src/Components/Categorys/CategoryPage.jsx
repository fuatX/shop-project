import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryPage = ({ match }) => {
  const [products, setProducts] = useState([]);
  const category = match.params.categoryName;
  //   const params = useParams();
  //   console.log(params);
  //   const categoryName = params.categoryName;
  //   console.log(categoryName);
  //   console.log(category);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Products not found", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="card-body">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
