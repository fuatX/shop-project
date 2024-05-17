import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../Categorys/CategoryPage.css";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  //   const category = match.params.categoryName;
  const params = useParams();
  console.log(params);
  const categoryName = params.categoryName;
  //   console.log(categoryName);
  //   console.log(category);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Products not found", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-capitalize">{categoryName}</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 position-relative">
              <Link to={`/product/${product.id}`} className="card-link">
                <div className="card-img-wrapper">
                  <img
                    src={product.image}
                    className="product-image"
                    alt={product.title}
                  />
                </div>
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <br />
                <br />
                {/* <p className="card-text">
                  {product.description.split(".").slice(0, 0).join(".")}...
                </p> */}
              </div>
              <button className="btn btn-primary position-absolute bottom-0 start-0 mb-3 ms-3">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
