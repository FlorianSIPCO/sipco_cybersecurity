import { Link } from 'react-router-dom';
import './legale.css'
import { IoMdHome } from "react-icons/io";

export default function MentionsLegalesPage() {
    return (
      <>
        <div className="background"></div>
          <main className="legal__main">
          <div className="legal__container">
            <Link to='/' className='back-home'><IoMdHome /></Link>
            <h1 className="legal__title">Mentions légales</h1>
            <p className="legal__update">Dernière mise à jour : 05-2025</p>
            <section className="legal__section">
              <h2 className="legal__subtitle">Editeur</h2>
              <ul>
                <li>Le site est édité par <strong>SIPCO</strong>,</li>
                <li>dont le siège social est situé au <strong>12 rue des artisans, 35500 Vitré</strong></li>
                <li>N° SIRET : <strong>32409458000051</strong>, N° TVA INTRACOMMUNAUTAIRE : <strong>FR81324094580</strong></li>
                <li>Tél. : <strong>02 99 76 16 16</strong></li>
                <li>Email : <strong>contact@sipco.fr</strong></li>
              </ul>

              <h2 className="legal__subtitle">Conception / Réalisation / Hébergement</h2>
              <ul>
                <li>Réalisé par <strong>SIPCO</strong>,</li>
                <li>Hébergé par <strong>SIPCO</strong>,</li>
                <li>Siège social : <strong>12 rue des artisans, 35500 Vitré</strong></li>
              </ul>

              <h2 className="legal__subtitle">Propriété intellectuelle</h2>
              <p className="legal__text">
                La structure générale du site, ainsi que les textes, graphiques, images, sons et vidéos la
                composant, sont la propriété de SIPCO.<br />
                Toute représentation et/ou reproduction et/ou
                exploitation partielle ou totale de ce site, par quelque procédé que ce soit, sans l'autorisation
                préalable et par écrit de SIPCO est strictement interdite et serait susceptible de constituer une
                contrefaçon au sens des articles L 335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </section>
          </div>
        </main>
      </>
    );
  }
  