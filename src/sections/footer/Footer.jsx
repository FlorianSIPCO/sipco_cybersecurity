import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='footer' className='footer__container'>
      <div className='main__container'>
        <div className='logo__copyright'>
          <a href="https://sipco.fr" target='_blank'>
            <img src={logo} alt="Logo de SIPCO" />
            </a>
          <p className="copyright">
            © {new Date().getFullYear()} SIPCO Cybersécurité. Tous droits réservés.
          </p>
        </div>
        <div className="footer__links">
            <Link to="/mentions-legales" className="footer__link">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="fooer__link">Politique de confidentialité</Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer