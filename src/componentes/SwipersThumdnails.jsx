import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade, Autoplay } from "swiper";
import "swiper/css/bundle";
import "../componentes-css/SwipersThumdnails.css";

export const SwipersThumdnails = ({ movies }) => {
  const [movimiento, setMovimiento] = useState();

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
          <SwiperSlide key={peliculas.id}>
            <div
              className="caja-slider"
              style={{
                backgroundImage: `url(${
                  imagenOriginal + peliculas.backdrop_path
                })`,
              }}
            >
              <h1>
                <Link to={"/movies/" + peliculas.id}>{peliculas.title}</Link>
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="contenedor-22"
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
            slidesPerView: 8,
          },
        }}
      >
        {movies.map((peliculas) => (
          <SwiperSlide key={peliculas.id}>
            <img
              src={url + peliculas.poster_path}
              alt={peliculas.title}
              className="img-sliders"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
