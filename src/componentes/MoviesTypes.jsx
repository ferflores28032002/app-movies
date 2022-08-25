import React from "react";
import styles from "../componentes-css/MoviesTypes.module.css";
import fondo from "../imagenes-logo/fondo.jpg";
import { SearchMovies } from "./SearchMovies";

const MoviesTypes = () => {

  return (
    <div className={styles.contenedor}>
      <div style={{ backgroundImage: `url(${fondo})` }} className={styles.caja11} ></div>

      <SearchMovies />
    </div>
  );
};

export default MoviesTypes;
