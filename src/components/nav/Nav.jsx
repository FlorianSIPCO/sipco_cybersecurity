import React, { useState} from 'react'
import './nav.css'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const location = useLocation();

  // Vérifie sur quelle page on se trouve puis renvoi à la section demandée
  const handleNavClick = (hash) => {
   if (location.pathname === '/') {
      const element = document.getElementById(hash.slice(1));
      if (element) {
         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setActiveNav(hash);
   } else {
      setActiveNav(hash);
   }
  }

  return (
    <nav>
      <Link to='/#header' 
         onClick={() => handleNavClick('#header')} 
         className={activeNav === '#' ? 'active' : ''}>
         Accueil
      </Link >
      
      <Link to='/#about'
         onClick={() => handleNavClick('#about')}
         className={activeNav === '#about' ? 'active' : ''}>
         A propos
      </Link>

      <Link to='/#services'
         onClick={() => handleNavClick('#services')}
         className={activeNav === '#services' ? 'active' : ''}>
         Services
      </Link>

      <Link to='/#tarifs'
         onClick={() => handleNavClick('#tarifs')}
         className={activeNav === '#tarifs' ? 'active' : ''}>
         Offres & Tarifs
      </Link>

      <Link to='/#contact' 
         onClick={() => handleNavClick('#contact')} 
         className={activeNav === '#contact' ? 'active' : ''}>
         Contact & Support
      </Link>
    </nav>
  )
}

export default Nav