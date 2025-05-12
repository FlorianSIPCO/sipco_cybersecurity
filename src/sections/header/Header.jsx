import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import video from '../../assets/world.mp4'
import logo from '../../assets/logo.png'
import { GoArrowUpRight } from "react-icons/go";
import { IoMdCall } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <img src={logo} alt="Logo SIPCO" />
        <Link to="https://api.sipco.fr/auth/login.php" target='_blank' className='cta'>
            Se connecter 
            <GoArrowUpRight className='icon'/>
        </Link>
      </div>

    {/* Main container */}
    <header id='header'>
      <div className="container header__container">
        <h1><IoShieldCheckmarkSharp id='shield' />SIPCO  Cybersécurité</h1>
        <h2>Votre bouclier numérique face aux menaces informatiques</h2>
        <p>
          Chez <a href='https://sipco.fr' target='_blank'>SIPCO</a>, nous croyons que la sécurité informatiques ne doit jamais être une option.
          Nos solutions de cybersécurité sont conçues pour protéger les entreprises, collectivités et professionnels contre les cybermenaces toujours plus nombreuses et sophistiquées.
        </p>
        <h3>Notre mission : assurer la continuité, la confidentialité et l'intégrité de vos systèmes et de vos données</h3>
        
        {/* CTA */}
        <a href='#contact' className='cta desktop__cta'>Besoin d'un audit ou d'un conseil ? Contactez-nous<IoMdCall className='icon'/></a>
        <a href='#contact' className='cta mobile__cta'>Besoin d'un audit ou d'un conseil ?<IoMdCall className='icon'/></a>
      </div>

      {/* Video */}
      <div className="header__video-wrapper">
        <video
          className='header__video'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type='video/mp4'/>
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
    </header>
    </>
  )
}

export default Header