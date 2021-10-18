import React, { useState } from 'react';
import styles from './Search.module.css'
export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState('')
  return (
    <form className={styles.bar}
      onSubmit={element =>{
        element.preventDefault();
        onSearch(city);
        setCity('')
      }} 
    >
      <input className={styles.iput} 
      type="text" 
      placeholder= 'City...' 
      value={city} 
      onChange={element => setCity(element.target.value)}
      />
      <input className={styles.btn}  type='submit' value='Search'/>
    </form>
    )
};