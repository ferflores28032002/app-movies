import React, { useState } from "react";
import styles from "../componentes-css/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  window.addEventListener("scroll", () => {
    const search = document.querySelector("#contenedor-principal");
    search.classList.toggle("active", window.scrollY > 0);
  });

  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.contenedor} id="contenedor-principal">
      <div className={styles.contenedor_logo}>
        <Link to={"/"}>
          <h5>
            <i className="fa-solid fa-video"></i> MovieDB
          </h5>
        </Link>
      </div>
      <ul className={toggle ? styles.contenedor_menus : styles.responsive}>
        <li className={styles.btn} onClick={toggleMenu}>
          {toggle ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </li>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/list"}>
          <li>Tv List</li>
        </Link>
        <Link to={"/"}>
          <li>Others</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
