import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt, FaPhoneAlt,FaArrowAltCircleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container contact__container'>
        <div className="contact__title">
          <h1>Contact</h1>
          <h2>Une question, une demande ? Contactez-nous !</h2>

          <h3>Vous souhaitez en savoir plus sur nos activités ?</h3>
          <a href='https://sipco.fr' target='_blank'>Visitez SIPCO <FaArrowAltCircleRight className='icon'/></a>
        </div>
        <div className="contact__links">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=12+rue+des+artisans,+35500+Vitré"
            className='contact__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaMapMarkerAlt className='icon' />
            12 rue des artisans, 35500 Vitré
          </a>
          <a href="mailto:contact@sipco.fr" className='contact__link'>
            <MdEmail className='icon' />
            Envoyer un email
          </a>
          <a href="tel:+33299999999" className='contact__link'>
            <FaPhoneAlt className='icon' />
            Nous appeler
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact