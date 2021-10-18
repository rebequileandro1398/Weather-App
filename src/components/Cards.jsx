import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'
export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.cards}>
     {cities.map(ciudad =>(<Card 
            key={ciudad.id}
            max={ciudad.max}
            min={ciudad.min}
            name={ciudad.name}
            img={ciudad.img}
            id={ciudad.id}
            onClose={() => onClose(ciudad.id)} 
     />))}
    </div>
      )
};