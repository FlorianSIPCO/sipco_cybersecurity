import './header.css'
import video from '../../assets/world.mp4'
import logo from '../../assets/logo.png'
import { FaArrowRight } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <img src={logo} alt="Logo SIPCO" />
        <a href="#contact" className='cta'>
            Nous contacter 
            <IoMdCall className='icon'/>
        </a>
      </div>

    {/* Main container */}
    <header id='header'>
      <div className="container header__container">
        <h1><IoShieldCheckmarkSharp id='shield' />SIPCO  Cybersécurité</h1>
        <h2>Votre bouclier numérique face aux menaces informatiques</h2>
        <p>
          Chez <a href='https://sipco.fr' target='_blank'>SIPCO</a>, nous pensons que la sécurité informatiques n'est pas une option.
          Nos solutions de cybersécurité sont conçues pour protéger les entreprises, collectivités et professionnels contre les cybermenaces toujours plus nombreuses et sophistiquées.
        </p>
        <h3>Notre mission : assurer la continuité, la confidentialité et l'intégrité de vos systèmes et de vos données</h3>
        
        {/* CTA */}
        <Link to='/product' className='cta header__cta'>Découvrez notre solution<FaArrowRight className='icon'/></Link>
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