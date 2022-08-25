import React from "react";
import styles from "../componentes-css/Footer.module.css";
import fondo from "../imagenes-logo/fondo.jpg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={fondo} alt="fondo" />
      <div className={styles.caja}>
        <h4>¿Preguntas? Llama al WhatsApp +505 8825-0074 (NIC)</h4>
      </div>

      <div className={styles.informacion}>
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>Term of services</li>
          <li>About us</li>
        </ul>
        <ul>
          <li>Live</li>
          <li>FAQ</li>
          <li>Premiun</li>
          <li>Privacy polity</li>
        </ul>
        <ul>
          <li>Must Watch</li>
          <li>Recent release</li>
          <li>Api TMDB</li>
        </ul>
      </div>
      <h5>
        <i className="fa-solid fa-video"></i>
        <span> MovieDB</span>
      </h5>
    </div>
  );
};

export default Footer;
