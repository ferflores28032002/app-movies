import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../componentes-css/MoviesTypes.module.css";
import Api from "./Api";
import Loading from './Loading';
import fondo from '../imagenes-logo/fondo.jpg';

const MoviesTypes = () => {
  const url = '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2021-10-22';
  const opciones = ["Animes", "Terror", "Acción", "Aventuras"];
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [peticion, setPeticion] = useState(url+ '&page=7');
  const imagenOriginal = "https://image.tmdb.org/t/p/original/";

  const hacer = (e) => {
    console.log(e.target.value);
    if(e.target.value === 'Terror'){
      setPeticion(url + '&page=8')
    }else if(e.target.value === 'Acción'){
      setPeticion(url + '&page=19')
    }else if(e.target.value === 'Aventuras'){
      setPeticion(url + '&page=11');
    }else {
      setPeticion(url);
    }

  };

  useEffect(()=>{
    setIsLoading(true);
    Api(peticion)
    .then((data)=>{setMovies(data.results)})
    setIsLoading(false);
  }, [peticion])

  if(loading){
    return <Loading/>
  }

  return (
    <div className={styles.contenedor}>
      <div  style={{backgroundImage: `url(${fondo})`,
              }} className={styles.caja11}>

      </div>
      <div className={styles.caja22}>
        <form>
          <div>
            <input placeholder="Search..." type="search" name="" id="" />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <div>
          <select className="form-select" onClick={hacer}>
            {opciones.map((opcion, i) => (
              <option key={i} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul className={styles.peliculas}>
        {
            movies.map(movie => (
                <li key={movie.id}>
                    <img src={imagenOriginal + movie.poster_path} alt={movie.title} />
                    <h4>{movie.title}</h4>
                    <Link to={'/movies/' + movie.id}>
                      <span>
                       <i className="fa-solid fa-circle-play"></i>
                      </span>
                    </Link>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default MoviesTypes;
