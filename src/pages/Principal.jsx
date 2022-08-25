import Header from "../componentes/Header";
import HeaderSlider from "../componentes/HeaderSlider";
import { MoviesEstreno } from "../componentes/MoviesEstreno";
import { SliderCines } from "../componentes/SliderCines";
import { SliderMovies } from "../componentes/SliderMovies";
import ThumdnailsMovies from "../componentes/ThumdnailsMovies";
import ThumdnailsSeries from "../componentes/ThumdnailsSeries";
import ThumdnailsAction from "../componentes/ThumdnailsAction";
import Footer from "../componentes/Footer";

const Principal = () => {
  return (
    <>
      <Header />
      <HeaderSlider />
      <SliderCines />
      <ThumdnailsSeries />
      <MoviesEstreno />
      <ThumdnailsAction />
      <SliderMovies />
      <ThumdnailsMovies />
      {/* <Footer/> */}
    </>
  );
};

export default Principal;
