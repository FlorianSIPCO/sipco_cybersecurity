import './About.css'
import { FaGavel, FaCity, FaIndustry } from 'react-icons/fa'
import { MdBusiness } from 'react-icons/md'
import SectorCard from '../../components/sectorCard/SectorCard'
import EngagementCircle from '../../components/engagements/Engagements'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="engagements__container">
          <div className='about__button'>
            <EngagementCircle />
          </div>
          <div className="about__title">
            <h1 className="section-title">À propos de <a href='https://sipco.fr' target='_blank'><span>SIPCO</span></a></h1>
            <p className="section-subtitle">
              Une expertise forgée par plus de 40 ans d'expérience en cybersécurité.
            </p>
          </div>
        </div>

        {/* Secteurs */}
        <div className="about__sectors">
          <h3>Nous travaillons avec des structures de toutes tailles et de tous secteurs :</h3>
          <div className="sectors__grid">
            <SectorCard
              icon={MdBusiness}
              title="PME / TPE"
              description="Cybersécurité accessible, simple et efficace."
            />
            <SectorCard
              icon={FaGavel}
              title="Professions réglementées"
              description="Santé, finance, droit Confidentialité maximale."
            />
            <SectorCard
              icon={FaCity}
              title="Collectivités & administrations"
              description="Continuité du service public face aux cyberattaques."
            />
            <SectorCard
              icon={FaIndustry}
              title="Industriels & BTP"
              description="Protection des outils connectés & données sensibles."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
