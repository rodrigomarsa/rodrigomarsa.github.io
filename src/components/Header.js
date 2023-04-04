/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import AppContext from '../context/AppContext';

function Header() {
  const { dark, setDark } = useContext(AppContext);

  return (
    <header className="Header">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#repos">Repositórios</a></li>
        <li className="dropdown">
          <a className="dropbtn">Projetos</a>
          <div className="dropdown-content">
            <a href="#front">Front-end</a>
            <a href="#back">Back-end</a>
          </div>
        </li>
      </ul>
      <div
        className="theme"
        onClick={ () => setDark(!dark) }
        role="presentation"
      >
        {dark && <BsSunFill style={ { color: 'yellow', fontSize: 25 } } />}
        {!dark && <BsMoonFill style={ { color: 'white', fontSize: 25 } } />}
      </div>
    </header>
  );
}

export default Header;
