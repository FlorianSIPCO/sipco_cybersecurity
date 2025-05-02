import React from 'react'
import './tarifs.css'
import { IoShieldCheckmark } from "react-icons/io5";

const Tarifs = () => {
  return (
    <section id='tarifs'>
      <div className='container tarifs__container'>
        <h1>Nos Offres & Tarifs</h1>
          <div className="tarifs__grid">
            <div className="tarif__card">
              <h2>Offre Essentielle</h2>
              <p className="price">À partir de 26€ HT/mois</p>
              <ul>
                <li><IoShieldCheckmark className="check" />Audit de sécurité simplifié</li>
                <li><IoShieldCheckmark className="check" />Mise en place de protections de base</li>
                <li><IoShieldCheckmark className="check" />Conseils personnalisés</li>
                <li><IoShieldCheckmark className="check" />Rapport PDF synthétique</li>
              </ul>
              <a href="#contact" className="cta">Demander un devis</a>
            </div>

            <div className="tarif__card premium">
              <h2>Offre Avancée</h2>
              <p className="price">Sur devis</p>
              <ul>
                <li><IoShieldCheckmark className="check" />Audit complet technique & organisationnel</li>
                <li><IoShieldCheckmark className="check" />Surveillance continue (SOC)</li>
                <li><IoShieldCheckmark className="check" />Réponse aux incidents (PRA/PCA)</li>
                <li><IoShieldCheckmark className="check" />Sessions de sensibilisation incluses</li>
              </ul>
              <a href="#contact" className="cta">Contacter un expert</a>
            </div>

          </div>
      </div>
    </section>
  )
}

export default Tarifs