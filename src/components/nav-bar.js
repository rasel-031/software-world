import firebase from "../database/firebase";
import { useEffect, useState } from "react";
import React from "react";
import "./nav-bar.css";
import "./home.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [items, setItems] = useState({});
  useEffect(() => {
    const myItems = firebase.database().ref("images");
    myItems.on("value", (snapshot) => {
      const dataItems = snapshot.val();
      setItems(dataItems.id1);
    });
  }, []);

  return (
    <>
      <div className="nav-bar-container">
        <div className="nav-bar-title">
          <img src={items.url} alt={items.name} />
          <h2>&nbsp;Soft World</h2>
        </div>
        <div className="nav-bar-links">
          <NavLink to="/" className="nav-link-item">
            Home
          </NavLink>
          <NavLink to="/apps" className="nav-link-item">
            Apps
          </NavLink>
          <NavLink to="/games" className="nav-link-item">
            Games
          </NavLink>
          <NavLink to="/articles" className="nav-link-item">
            Articles
          </NavLink>
          <NavLink to="/bestproducts" className="nav-link-item">
            Best Products
          </NavLink>
        </div>
        <div className="nav-bar-search">
          <form action="">
            <input type="text" />
            <input type="button" value="Search" />
          </form>
        </div>

        {/* mobile menu for responsive */}
        <div className="mobile-menu-bar">
          <button
            className="responsive-btn"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <FontAwesomeIcon icon={faBars} style={{ fontSize: "17px" }} />
          </button>
        </div>
      </div>
      <div className={mobileMenu ? "mobile-menu" : "display:none"}>
        <div className="mobile-menu-links">
          <NavLink to="/" className="nav-link-item">
            Home
          </NavLink>
          <NavLink to="/apps" className="nav-link-item">
            Apps
          </NavLink>
          <NavLink to="/games" className="nav-link-item">
            Games
          </NavLink>
          <NavLink to="/articles" className="nav-link-item">
            Articles
          </NavLink>
          <NavLink to="/bestproducts" className="nav-link-item">
            Best Products
          </NavLink>
        </div>
        <div className="mobile-menu-search">
          <form action="">
            <input type="text" />
            <input type="button" value="Search" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Navbar;
