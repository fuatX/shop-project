import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const [isMobileDropDown, setIsMobileDropDown] = useState(false);

  const handleNavBarDropDown = () => {
    setIsDropDownOpen(!isDropdownOpen);
  };

  const handleMobileDropDown = () => {
    setIsMobileDropDown(!isMobileDropDown);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark container px-0 sticky-top">
        <NavLink className="navbar-brand" to="/">
          <img
            style={{ borderRadius: "60%/60%", width: "5rem" }}
            src="/src/shop-website-icon.png"
            alt="Logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavBarDropDown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-around ${
            isDropdownOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/new-products">
                New Products
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={handleMobileDropDown}
              >
                Discount Products
              </NavLink>
              <div
                className={`dropdown-menu ${isMobileDropDown ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <NavLink className="dropdown-item" to="/best-selling">
                  Bestselling Discounted items
                </NavLink>
                <NavLink className="dropdown-item" to="/daily-discount">
                  Daily Discounted products
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/newly-discount">
                  Newly Discounted products
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <button
          className="btn btn-outline-light rounded-circle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Your Card
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">...</div>
      </div>
    </>
  );
}
