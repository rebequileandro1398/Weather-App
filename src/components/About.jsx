import React from "react";
import styles from './About.module.css'
export default function About () {
    return (
        <div className={styles.about}>
            <p>Esta página fue creada por Leandro Rebequi al cursar el bootcamp de Soy Henry, en el modulo M2, para la elaboración de la misma se utilizó la librería de React y la API del clima OpenWeather.</p>
        </div>
    )
}