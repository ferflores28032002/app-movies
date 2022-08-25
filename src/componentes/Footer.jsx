import React from 'react';
import styles from '../componentes-css/Footer.module.css';
import fondo from '../imagenes-logo/fondo.jpg';

const Footer = () => {
  return (
    <div style={{backgroundImage: `url(${fondo})`}}  className={styles.container}>
        <div className={styles.contenedor}>
            <div className={styles.cajainfo}>
                <div className={styles.contactanos}>
                    <h4>¿Preguntas? Llama al WhatsApp +505 8825-0074 (NIC)</h4>
                </div>
                <div className={styles.cajaul}>
                    <ul>
                        <li>Preguntas frecuentes</li>
                        <li>Relaciones con inversionistas</li>
                        <li>Privacidad</li>
                        <li>Pruebas de Velocidad</li>
                    </ul>
                    <ul>
                        <li>Centro de ayuda</li>
                        <li>Empleo</li>
                        <li>Preferencias de Cookies</li>
                        <li>Avisos legales</li>
                    </ul>
                    <ul>
                        <li>Cuentas</li>
                        <li>Formas de ver</li>
                        <li>Información Corporativa</li>
                        <li>Solo en MovieDB</li>
                    </ul>
                    <ul>
                        <li>Prensa</li>
                        <li>Términos de uso</li>
                        <li>Contactanos</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )

}


export default Footer;
