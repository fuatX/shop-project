import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const categoryName = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${categoryName}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Product not found", error);
      }
    };

    fetchProduct();
  }, [categoryName]);

  return (
    <div className="container mt-5">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>${product.price}</strong>
          </p>
          <a href="/" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
