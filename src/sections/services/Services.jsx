import React from 'react'
import './services.css'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section id='services'>
      <div className="container services__container">
        <div className="services__title">
          <h1>Nos services</h1> 
          <h2>Assurer la continuité, la confidentialité et l'intégrité de vos systèmes et de vos données</h2>  
        </div>
        <div className="services__links">
          <h3>[ <span>Les secteurs</span> ]</h3>
          <div className='links'>
            <Link to='/'>Audit & diagnostic de sécurité</Link>
            <Link to='/'>Sécurisation des infrastructures & données</Link>
            <Link to='/'>Surveillance & réponse aux incidents</Link>
            <Link to='/'>Sensibilisation & formation des utilisateurs</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services