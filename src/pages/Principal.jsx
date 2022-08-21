import Header from "../componentes/Header";
import HeaderSlider from "../componentes/HeaderSlider";
import { MoviesEstreno } from "../componentes/MoviesEstreno";
import { SliderCines } from "../componentes/SliderCines";
import { SliderMovies } from "../componentes/SliderMovies";

const Principal = () => {
    return (
        <>
            <Header/>
            <HeaderSlider/>
            <SliderCines/>
            <MoviesEstreno/>
            <SliderMovies/>
        </>
    );
};


export default Principal;