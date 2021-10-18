import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png'

function Nav({onSearch}) {
  return (
    <nav className= 'nav'>
      <Link to='/'>
        <span className="navbar-brand">
         <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span className='aboutme'>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
