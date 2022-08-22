import React, { useState, useEffect } from "react";
import Api from "./Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade, Autoplay } from "swiper";
import "swiper/css/bundle";
import "../componentes-css/SwipersThumdnails.css";

export const SwipersThumdnails = () => {
  const [movies, setMovies] = useState([]);
  const [movimiento, setMovimiento] = useState();

  useEffect(() => {
    Api(
      "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
    ).then((data) => {
      setMovies(data.results);
    });
  }, []);

  const url = "https://image.tmdb.org/t/p/w300";
  const imagenOriginal = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="contenedor">
      <Swiper
        className="slider1"
        loop={true}
        modules={[Navigation, Thumbs, EffectFade, Autoplay]}
        thumbs={{ swiper: movimiento }}
        effect="fade"
        autoplay={{ delay: 1200 }}
      >
        {movies.map((peliculas) => (
          <SwiperSlide key={peliculas.id} >
             <div className="caja-slider" style={{ backgroundImage: `url(${imagenOriginal + peliculas.backdrop_path})` }}>
                  <h1>{peliculas.title}</h1>
             </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="contenedor-22"
        loop={true}
        spaceBetween={8}
        slidesPerView={9}
        onSwiper={setMovimiento}
      >
        {movies.map((peliculas) => (
          <SwiperSlide key={peliculas.id} >
            <img src={url + peliculas.poster_path} alt={peliculas.title} className='img-sliders' />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};
