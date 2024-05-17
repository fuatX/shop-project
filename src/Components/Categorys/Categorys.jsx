import React from "react";
import { Link } from "react-router-dom";

export default function Categorys({ item, imageUrl }) {
  // console.log(item);
  return (
    <div className="flex-box">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <Link
            className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            style={{
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            to={`/category-page/${item}`}
          >
            {item}
          </Link>
        </div>
      </div>
    </div>
  );
}

{
  /* <li className="list-group-item">
      <Link to={`/category-page/${item}`}>{item}</Link>
    </li> */
}
