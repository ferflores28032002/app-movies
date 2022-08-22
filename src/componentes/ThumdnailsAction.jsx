import React, { useState, useEffect } from "react";
import Api from "./Api";
import { SwipersThumdnails } from "./SwipersThumdnails";

const ThumdnailsAction = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Api(
      "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2021-10-22&page=4"
    ).then((data) => {
      setMovies(data.results);
    });
  }, []);
  return <SwipersThumdnails movies={movies} />;
};
export default ThumdnailsAction;
