import React, { useState, useEffect } from "react";
import estilos from "../componentes-css/TvList.module.css";
import Loading from "./Loading";
import fondo from "../imagenes-logo/fondo.jpg";
import styles from "../componentes-css/MoviesTypes.module.css";
import placeholder from "../imagenes-logo/placeholder.jpg";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_URL_BASE;
const A_KEY = process.env.REACT_APP_API_SEARCH;

export const TvList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloadin] = useState(true);
  const imagenOriginal = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    setIsloadin(true);
    fetch(`${API}/discover/tv${A_KEY}&page=2`)
      .then((result) => result.json())
      .then((data) => {
        setMovies(data.results);
        setIsloadin(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={estilos.contenedor}>
      <div
        style={{ backgroundImage: `url(${fondo})` }}
        className={styles.caja11}
      ></div>

      <h1 className={estilos.titulo}>
        <span>
          <i className="fa-solid fa-clapperboard"></i>
        </span>{" "}
        Most popular TV list of the moment
      </h1>
      <div className={estilos.tv}>
        {movies.map((movie) => (
          <div key={movie.id} className={estilos.peliculas}>
            <img
              src={
                movie.poster_path
                  ? imagenOriginal + movie.poster_path
                  : placeholder
              }
              alt={movie.name}
            />
            <p className={estilos.name}>{movie.name}</p>
            <Link to={"/tv/" + movie.id}>
              <div className={estilos.boton}>
                <i className="fa-solid fa-circle-play"></i>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
