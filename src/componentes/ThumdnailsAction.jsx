import React, { useState, useEffect } from "react";
import Api from "./Api";
import { SwipersThumdnails } from "./SwipersThumdnails";
import Loading  from "./Loading";

const ThumdnailsAction = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloadin] = useState(true);

  useEffect(() => {
    setIsloadin(true);
    Api("/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2021-10-22&page=4")
      .then((data) => {
      setMovies(data.results);
      setIsloadin(false);
    });
  }, []);

  if(isLoading){
    return <Loading/>
  }

  return <SwipersThumdnails movies={movies} ruta='movies' />;
};
export default ThumdnailsAction;
