import styles from "../componentes-css/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {

  window.addEventListener('scroll', ()=>{
    const search = document.querySelector('#contenedor-principal')
    search.classList.toggle('active', window.scrollY>0)
  })

  return (
    <div className={styles.contenedor} id='contenedor-principal'>
      <div className={styles.contenedor_logo}>
        <Link to={'/'}>
          <h5>
            <i className="fa-solid fa-video"></i> MovieDB
          </h5>
        </Link>
      </div>
      <ul className={styles.contenedor_menus}>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/list'}><li>Tv List</li></Link>
        {/* <li>Tv List</li> */}
        <li>Others</li>
      </ul>
    </div>
  );
};

export default Header;
