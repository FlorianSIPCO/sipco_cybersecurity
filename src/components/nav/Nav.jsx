import React, { useState} from 'react'
import './nav.css'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUserAlt, FaTools, FaTags, FaEnvelope, FaArrowUp  } from 'react-icons/fa'
import useHideNavOnFooter from '../../utils/useHideNavOnFooter'


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

   // Gestion de l'affichage de la nav si on est sur le footer
   const hideNav = useHideNavOnFooter()

   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: 'smooth' })
   }
 
   if (hideNav) {
     return (
       <button className="scroll-to-top" onClick={scrollToTop}>
         <FaArrowUp />
       </button>
     )
   }  

  return (
    <nav>
      <Link to='/#header' 
         onClick={() => handleNavClick('#header')} 
         className={activeNav === '#' ? 'active' : ''}>
            <i className='nav__icons'><FaHome /></i>
            <p className='nav__label'>Accueil</p>
      </Link >
      
      <Link to='/#about'
         onClick={() => handleNavClick('#about')}
         className={activeNav === '#about' ? 'active' : ''}>
            <i className='nav__icons'><FaUserAlt /></i>
            <p className='nav__label'>A propos</p>
      </Link>

      <Link to='/#services'
         onClick={() => handleNavClick('#services')}
         className={activeNav === '#services' ? 'active' : ''}>
            <i className='nav__icons'><FaTools /></i>
            <p className='nav__label'>Services</p>
      </Link>

      <Link to='/#tarifs'
         onClick={() => handleNavClick('#tarifs')}
         className={activeNav === '#tarifs' ? 'active' : ''}>
            <i className='nav__icons'><FaTags /></i>
            <p className='nav__label'>Offres & Tarifs</p>
      </Link>

      <Link to='/#contact' 
         onClick={() => handleNavClick('#contact')} 
         className={activeNav === '#contact' ? 'active' : ''}>
            <i className='nav__icons'><FaEnvelope /></i>
            <p className='nav__label'>Contact & Support</p>
      </Link>
    </nav>
  )
}

export default Nav