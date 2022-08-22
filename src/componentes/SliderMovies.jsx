import React, { useEffect, useState } from "react";
import Api from "./Api";
import { CompoSliders } from "./CompoSliders";

export const SliderMovies = () => {
  const [SliderMovie, setSliderMovie] = useState([]);

  useEffect(() => {
    Api('/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc')
    .then((data)=>{setSliderMovie(data.results)})
  }, []);

  return (
    <CompoSliders pelicula={SliderMovie} presentacion='Peliculas Populares de Anime' />
  );
};
