import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../redux/itemsSlice";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <Link to="/">
        <h2>LikeMuClothes</h2>
      </Link>
      <ul className="navbar-ul">
        <Link
          to="/category/women"
          onClick={() => dispatch(filterByCategory("Kadın"))}
        >
          <li>Kadın</li>
        </Link>
        <Link
          to="/category/men"
          onClick={() => dispatch(filterByCategory("Erkek"))}
        >
          <li>Erkek</li>
        </Link>
        <Link
          to="/category/clothing"
          onClick={() => dispatch(filterByCategory("Giyim"))}
        >
          <li>Giyim</li>
        </Link>
        <Link
          to="/category/brands"
          onClick={() => dispatch(filterByCategory("Markalar"))}
        >
          <li>Markalar</li>
        </Link>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Siparişler</li>
        </Link>
        <button className="nav-btn">Merhaba, Namık</button>
      </ul>
    </div>
  );
};

export default Navbar;
