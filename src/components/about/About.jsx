import './About.css'
import { FaShieldAlt, FaBolt, FaMapMarkerAlt, FaClipboardCheck, FaSmile } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <h2 className="section-title">À propos de <span>SIPCO</span></h2>
        <p className="section-subtitle">
          Une expertise forgée par plus de 40 ans d'expérience en cybersécurité.
        </p>

        {/* Engagements */}
        <div className="about__engagements">
          <div className="engagement">
            <FaShieldAlt className="icon" />
            <h2>Expertise</h2>
            <p>Plus de 40 ans d'expérience dans la sécurité des systèmes d'information.</p>
          </div>
          <div className="engagement">
            <FaBolt className="icon" />
            <h2>Réactivité</h2>
            <p>Intervention rapide en cas de suspicion d'incident.</p>
          </div>
          <div className="engagement">
            <FaMapMarkerAlt className="icon" />
            <h2>Proximité</h2>
            <p>Une équipe disponible à Vitré, au cœur de la Bretagne.</p>
          </div>
          <div className="engagement">
            <FaClipboardCheck className="icon" />
            <h2>Transparence</h2>
            <p>Des audits clairs, des solutions adaptées, des résultats mesurables.</p>
          </div>
          <div className="engagement">
            <FaSmile className="icon" />
            <h2>Sérénité</h2>
            <p>Vous êtes accompagnés avant, pendant et après.</p>
          </div>
        </div>

        {/* Secteurs */}
        <div className="about__clients">
          <h3>Nous travaillons avec des structures de toutes tailles et de tous secteurs d'activité :</h3>
          <ul>
            <li><strong>PME / TPE</strong> : cybersécurité accessible, simple et efficace</li>
            <li><strong>Professions réglementées</strong> : santé, finance, droit — confidentialité maximale</li>
            <li><strong>Collectivités & administrations</strong> : continuité du service public face aux cyberattaques</li>
            <li><strong>Industriels & BTP</strong> : protection des outils connectés & données sensibles</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
