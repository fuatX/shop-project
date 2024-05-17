import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const [products, setProducts] = useState({});
  //   const category = match.params.categoryName;
  const params = useParams();
  console.log(params);
  const categoryName = params.id;
  //   console.log(categoryName);
  //   console.log(category);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${categoryName}`
        );

        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.error("Products not found", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return <img src={products.image} alt="" />;
};

export default SingleProductPage;

///https://youtu.be/UONfFT-4aC4
