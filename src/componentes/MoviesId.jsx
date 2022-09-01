import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchMovieId from "./SearchMovieId";
import styles from '../componentes-css/MoviesId.module.css';
import Loading from './Loading';
import placeholder from '../imagenes-logo/placeholder.jpg';

const MoviesId = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [video, setVideo] = useState([]);

  useEffect(()=>{
    setIsloading(true);
    SearchMovieId('/movie/' + id)
    .then((data) => {setMovie(data)})
    setIsloading(false);
  },[id])

  useEffect(()=>{
    // setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a8bf047869d000586a3eb83df8fa3819&language=en-US`)
    .then((results) => results.json())
    .then((data) => {
      setVideo(data.results)
    })

    // setIsLoading(false);
  }, [id])
  const peliculas = video.slice(0,3);
  
  
  if(!movie){
    return null;
  }
  if(isloading){
    return <Loading />
  }


  const imgs = "https://image.tmdb.org/t/p/w300";
  const imagenOriginal = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <div className={styles.contenedor} style={{backgroundImage: `url(${imagenOriginal + movie.backdrop_path})`}}>

        <div className={styles.caja}>
          <div className={styles.logo}>
            <img loading='lazy' src={movie.poster_path ? imgs + movie.poster_path : placeholder} alt={movie.title} />
          </div>
          <div className={styles.informacion}>
            <h1>{movie.title}</h1>
              <div className={styles.caja_genres}>
              {
                movie.genres.map(genre => (
                  <span className={styles.genres} key={genre.id}>{genre.name}</span>
                ))
              }
              </div>
            <p>{movie.overview}</p>
          </div>
        </div> 

      </div>

      <div className={styles.videos}>
        {
          peliculas.map((peli)=> (
            <iframe key={peli.id} src={`https://www.youtube.com/embed/${peli.key}`}
            width='400px'
            title='video'
            height={400}
          ></iframe>

          ))
        }

      </div>
    </div>
  );
};

export default MoviesId;
