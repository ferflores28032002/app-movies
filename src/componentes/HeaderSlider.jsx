import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import styles from "../componentes-css/HeaderSlider.module.css";
import Api from "./Api";
import Loading from "./Loading";

function HeaderSlider() {
  const [movieSlide, setMovieSlide] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    Api("/discover/movie?sort_by=popularity.desc").then((data) => {
      setMovieSlide(data.results);
      setIsloading(false);
    });
  }, []);

  const imagen = "https://image.tmdb.org/t/p/original/";
  if (isloading) {
    return <Loading />;
  }

  return (
    <Swiper
      className={styles.contenedor_slide}
      loop
      modules={[Pagination, Autoplay, Navigation]}
      pagination={true}
      navigation
    >
      {movieSlide.map((slide) => (
        <div key={slide.id}>
          <SwiperSlide
            className={styles.sliders}
            style={{ backgroundImage: `url(${imagen + slide.backdrop_path})` }}
            key={slide.id}
          >
            <div className={styles.caja_informacion}>
              <h4>{slide.title}</h4>
              <p>{slide.overview}</p>
              <Link to={"/movies/" + slide.id}>
                <button className={styles.boton}>
                  <i className="fa-solid fa-play"></i><span>  Watch now</span>
                </button>
              </Link>
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}

export default HeaderSlider;
