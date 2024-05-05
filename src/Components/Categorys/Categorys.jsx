import { Link } from "react-router-dom";

export default function Categorys({ item }) {
  // console.log(item);
  return (
    <li className="list-group-item">
      <Link to={`/category-page/${item}`}>{item}</Link>
    </li>
  );
}
