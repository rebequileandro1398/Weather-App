import React from "react";
import styles from './Ciudad.module.css'

export default function Ciudad({city}) {
    if (city) {
        return (
            <div className={styles.ciudad}>
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                </div>
            </div>
       )
    }else {
        return (
            <div className={styles.er}>
            <h2>inténtalo de nuevo...</h2>
            </div>
        )
    }
}