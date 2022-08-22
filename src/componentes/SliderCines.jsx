import React, { useEffect, useState } from "react";
import Api from "./Api";
import { CompoSliders } from "./CompoSliders";

export const SliderCines = () => {
  const [cines, setCines] = useState([]);

  useEffect(() => {
    Api('/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2022-10-22')
    .then((data)=>{setCines(data.results)})
  }, []);

  return (
    <CompoSliders pelicula={cines} presentacion='Mejores peliculas del 2021-2022'/>
  );
};
