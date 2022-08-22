import React from "react";
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade,} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import styles from '../componentes-css/CompoSliders.module.css';

export const CompoSliders = ({pelicula}) => {

    const url = "https://image.tmdb.org/t/p/w300";

  return (
    <div className={styles.contenedor}>
        <Swiper
            loop={true}
            className={styles.slider}
            modules={[Navigation,Pagination,Scrollbar,A11y,Autoplay,EffectFade,]}
            navigation={true}
            pagination={true}
            // autoplay={{ delay: 500 }}
            // effect="fade"
            // scrollbar={{ draggable: true }}
            // Navigation
            breakpoints={{
            0: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            480: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            768: {
                spaceBetween: 10,
                slidesPerView: 3,
            },
            1024: {
                spaceBetween: 10,
                slidesPerView: 4,
            },
            1280: {
                spaceBetween: 10,
                slidesPerView: 7,
            },
            }}
            
            >

            {
                pelicula.map((pelicula)=>(
                    <SwiperSlide key={pelicula.id}>
                        <Link to={'/movies/' + pelicula.id}>
                            <img className={styles.imagen} src={url + pelicula.poster_path} alt={pelicula.title} />
                            <p className="text-light text-center pt-2">{pelicula.title}</p>
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>

  );
};
