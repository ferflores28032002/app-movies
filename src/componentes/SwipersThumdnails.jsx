import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade, Autoplay } from "swiper";
import "swiper/css/bundle";
import estilos from "../componentes-css/SwipersThumdnails.module.css";
import placeholder from "../imagenes-logo/placeholder.jpg";

export const SwipersThumdnails = ({ movies, ruta }) => {
  const [movimiento, setMovimiento] = useState();

  const url = "https://image.tmdb.org/t/p/w300";
  const imagenOriginal = "https://image.tmdb.org/t/p/original/";

  return (
    <div className={estilos.contenedor}>
      <Swiper
        className={estilos.slider1}
        loop={true}
        modules={[Navigation, Thumbs, EffectFade, Autoplay]}
        thumbs={{ swiper: movimiento }}
        // effect="fade"
        autoplay={{ delay: 1200 }}
      >
        {movies.map((peliculas) => (
          <SwiperSlide key={peliculas.id}>
            <div
              className={estilos.caja_slider}
              style={{
                backgroundImage: `url(${
                  imagenOriginal + peliculas.backdrop_path
                })`,
              }}
            >
              <h1>
                <Link to={`/${ruta}/` + peliculas.id}>{peliculas.title ? peliculas.title : peliculas.name}</Link>
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className={estilos.contenedor_22}
        loop={true}
        onSwiper={setMovimiento}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          480: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          768: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          1024: {
            spaceBetween: 10,
            slidesPerView: 5,
          },
          1280: {
            spaceBetween: 10,
            slidesPerView: 7,
          },
        }}
      >
        {movies.map((peliculas) => (
          <SwiperSlide key={peliculas.id}>
            <img
              loading='lazy'
              src={
                peliculas.poster_path
                  ? url + peliculas.poster_path
                  : placeholder
              }
              alt={peliculas.title ? peliculas.title : peliculas.name}
              className={estilos.img_sliders}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
