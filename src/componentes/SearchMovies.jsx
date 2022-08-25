import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import style from "../componentes-css/SearchMoviesEstilos.module.css";
import Loading from "./Loading";
import placeholder from '../imagenes-logo/placeholder.jpg';

export const SearchMovies = () => {
  const history = useNavigate();
  const [Loadings, setLoadings] = useState(true);
  const [movies, setMovies] = useState([]);
  const [input, setinput] = useState("");
  const imagenOriginal = "https://image.tmdb.org/t/p/original/";
  const A_key = process.env.REACT_APP_API_KEY;
  const A_key2 = process.env.REACT_APP_API_SEARCH;

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const busqueda = query.get("search");

  const peticion = busqueda ? `https://api.themoviedb.org/3/search/movie?query=${busqueda}${A_key}` : `https://api.themoviedb.org/3/discover/movie${A_key2}&page=2`;

  useEffect(() => {
    setLoadings(true);
    fetch(peticion)
      .then((results) => results.json())
      .then((data) => {
        setMovies(data.results);
      });
    setLoadings(false);
  }, [peticion]);

  if (Loadings) {
    return <Loading />;
  }

  const controlar = (e) => {
    e.preventDefault();
    history("/types/?search=" + input);
  };

  return (
    <div className={style.caja}>
      <form onSubmit={controlar}>
        <div>
          <input
            autoFocus
            value={input}
            placeholder="Search..."
            type="search"
            onChange={(e) => setinput(e.target.value)}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>

      <ul className={style.peliculas}>
        {movies.map((movie) => (
            <li key={movie.id}>
              <img src={ movie.poster_path ? imagenOriginal + movie.poster_path : placeholder} alt={movie.title} />
              <h4>{movie.title}</h4>
              <Link to={"/movies/" + movie.id}>
                <span>
                  <i className="fa-solid fa-circle-play"></i>
                </span>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
