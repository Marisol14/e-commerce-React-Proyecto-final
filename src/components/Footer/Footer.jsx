// Footer.jsx
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Sección Izquierda: Derechos, Contacto */}
        <div className="footer__left">
          <p>© {new Date().getFullYear()} Bamboo Closet. Todos los derechos reservados.</p>
          <p>Contacto: <a href="mailto:info@bamboocloset.com">info@bamboocloset.com</a></p>
        </div>

        {/* Sección Derecha: Redes Sociales */}
        <div className="footer__right">
          <span>Síguenos:</span>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
