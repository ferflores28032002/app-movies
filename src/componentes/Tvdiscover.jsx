import React, { useState, useEffect } from "react";
import { SwipersThumdnails } from "./SwipersThumdnails";
import Loading from "./Loading";
const A_KEY = process.env.REACT_APP_API_SEARCH;
const API = process.env.REACT_APP_URL_BASE;

const Tvdiscover = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloadin] = useState(true);

  useEffect(() => {
    setIsloadin(true);
    fetch(`${API}/discover/tv${A_KEY}`)
      .then((result) => result.json())
      .then((data) => {
        setMovies(data.results);
        setIsloadin(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <SwipersThumdnails movies={movies} ruta="tv" />;
};
export default Tvdiscover;
