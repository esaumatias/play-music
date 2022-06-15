import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const { n } = props;
  const { user } = useContext(AppContext);
  return (
    <header>
      <div className="containerTop">
        <h3>Play Music</h3>
        <div>
          <div><img alt="user" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/undefined/external-User-essential-collection-bearicons-glyph-bearicons.png"/></div>
          <div>{user}</div>
        </div>
      </div>

      <div className="containerNav">
        <Link to='/search' className='navLink' style={{ background: n === '1' ? '#928f8f': null}}>
          <div>Pesquisa</div>
        </Link>

        <Link to='/favorites'  className='navLink' style={{ background: n === '2' ? '#928f8f': null}}>
          <div>Favoritas</div>
        </Link>

        <Link to='/profile' className='navLink' style={{ background: n === '3' ? '#928f8f': null}}>
          <div>Perfil</div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
