import React from 'react';
import CartWidget from './cartWidget';
import tolFondo from '../images/TOL fondo.jpg';
const Navbar = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
        
          <a className="navbar-item" href="/"> 
          <img src={tolFondo} alt="Logo de la tienda" width="60" height="60" />
          </a>
          <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Inicio
            </a>
            <a className="navbar-item" href="/categorias">
              Registrarse
            </a>
            <a className="navbar-item" href="/categorias">
              Visitá la carta!
            </a>
            <a className="navbar-item" href="/categorias">
              Productos
            </a>
            <a className="navbar-item" href="/contacto">
              Contacto
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
            <CartWidget />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
