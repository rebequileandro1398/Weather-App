import React from 'react';
import styles from './Card.module.css'; 
import { Link } from 'react-router-dom';
export default function Card({name, min, max, img, id, onClose}) {
  // acá va tu código
  return (
    <div className={styles.card}>
      <button className={styles.btn} onClick={onClose}>X</button>
      <Link to={`/ciudad/${id}`} >
      <h2 id={styles.name}>{name}</h2> 
      </Link>
      <img className={styles.imag} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="clima" />
      <div>
        <h4>Min: {min} °C </h4>
        <h4>Max: {max} °C </h4>
      </div>
      <hr />
    </div>
      
      )
};