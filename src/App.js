import React, { useState } from 'react';
import Cards from './components/Cards.jsx';
import styles from './App.module.css'; 
import Nav from './components/Nav.jsx'; 
import { Route } from 'react-router';
import About from './components/About'
import Ciudad from './components/Ciudad'

function App() {
  const [cities, setCities] = useState([]);
  const onSearch = ciudad => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=0d035883f56f482051d12126bf4c6aa8&units=metric`)
    .then(response => response.json())
    .then(recurso =>{
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
        
    })
  }
  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  const onFilter = (ciudadId) => {
    let ciudad = cities.find(c => c.id === parseInt(ciudadId))
    return ciudad
  }
  return (
    <div className= {styles.app}>

        <Route
            path='/'
            render={() => <Nav onSearch={onSearch} />}
          />

        <Route
            path='/about'
            component={About}
        />
      
      <div className={styles.city}>

        <Route
            exact path='/'
            render={() => <Cards onClose={onClose} cities={cities} />}
        />     
      </div>

       <Route
            exact
            path='/ciudad/:ciudadId'
            render={({match}) => <Ciudad
            city={onFilter(match.params.ciudadId)}/>}
         />
    </div>
  );
}

export default App;
