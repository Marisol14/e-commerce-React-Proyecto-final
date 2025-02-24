// NavBar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from '../../assets/Bamboo.png'  // Ajusta la ruta según tu proyecto

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        
        {/* LOGO */}
        <div className="navbar__logo">
          <Link to="/">
            <img 
              src={logo} 
              alt="Bamboo Closet Logo" 
              className="navbar__logo-image" 
            />
          </Link>
        </div>

        {/* ENLACES DE NAVEGACIÓN */}
        <nav className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/category/ropa">Ropa</Link>
          <Link to="/category/decoracion">Decoración</Link>
          <Link to="/category/electronica">Electrónica</Link>
          <Link to="/cart" className="navbar__cart">
            <CartWidget />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
