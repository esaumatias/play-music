import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const { n } = props;
  return (
    <header className="containerNav">
      <Link to='/search' className='navLink' style={{ background: n === '1' ? '#928f8f': null}}>
        <div>Pesquisa</div>
      </Link>

      <Link to='/favorites'  className='navLink' style={{ background: n === '2' ? '#928f8f': null}}>
        <div>Favoritas</div>
      </Link>

      <Link to='/profile' className='navLink' style={{ background: n === '3' ? '#928f8f': null}}>
        <div>Perfil</div>
      </Link>
    </header>
  );
}

export default Header;
