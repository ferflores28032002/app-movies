import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import styles from "../componentes-css/CompoSliders.module.css";
import placeholder from "../imagenes-logo/placeholder.jpg";

export const CompoSliders = ({ pelicula, presentacion }) => {
  const url = "https://image.tmdb.org/t/p/w300";

  return (
    <div className={styles.contenedor}>
      <h4 className={styles.presentacion}>{presentacion}</h4>
      <Swiper
        loop={true}
        className={styles.slider}
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
        {pelicula.map((pelicula) => (
          <SwiperSlide key={pelicula.id}>
            <Link to={"/movies/" + pelicula.id}>
              <img
                  loading="lazy"
                className={styles.imagen}
                src={
                  pelicula.poster_path
                    ? url + pelicula.poster_path
                    : placeholder
                }
                alt={pelicula.title}
              />
              <p>{pelicula.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
