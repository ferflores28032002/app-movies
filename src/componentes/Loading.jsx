import React from "react";
import { FaSpinner } from "react-icons/fa";
import styles from '../componentes-css/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.caja_spinners}>
      <FaSpinner className={styles.spinners} />
      <h4>Cargando...</h4>
    </div>
  );
};


export default Loading;
