import React, { useEffect, useState } from "react";
import Api from "./Api";
import { CompoSliders } from "./CompoSliders";

export const MoviesEstreno = () => {
  const [MovieEstrenos, setMovieEstrenos] = useState([]);

  useEffect(() => {
    Api('/discover/movie?with_genres=18&primary_release_year=2022')
    .then((data)=>{setMovieEstrenos(data.results)})
  }, []);

  return (
    <CompoSliders pelicula={MovieEstrenos} presentacion='Peliculas más populares del 2022' />
  );
};
