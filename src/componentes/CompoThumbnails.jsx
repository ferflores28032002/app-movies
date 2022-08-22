import React, { useState, useEffect } from "react";
import Api from "./Api";
import { SwipersThumdnails } from "./SwipersThumdnails";

const CompoThumbnails = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Api(
      "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
    ).then((data) => {
      setMovies(data.results);
    });
  }, []);

  return <SwipersThumdnails movies={movies} />;
};
export default CompoThumbnails;
