import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import cgvData from "../constants/politique-de-confidentialite.json";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import './legale.css'

export default function PolitiqueDeConfidentialitePage() {
    const [openItemId, setOpenItemId] = useState(null);

    const toggleItem = (id) => {
      setOpenItemId(openItemId === id ? null : id);
    };

    const isItemOpen = (id) => openItemId === id;
    return (
      <main className="legal__main">
        <div className="legal__container">
          <Link to='/' className="back-home"><IoMdHome /></Link>
          <h1 className="legal__title">Politique de confidentialité</h1>
          <p className="legal__update">Dernière mise à jour : 04-2025</p>

          <section className="legal__section">
            <p className="">
              La présente Politique a pour objet d'apporter les informations nécessaires à la compréhension des différents traitements que nous réalisons afin de mener à bien nos missions et de fournir les services qui vous sont les plus adaptés.
            </p>
            <p className="">
              Pour rappel, la réglementation européenne définit une donnée à caractère personnel (ci-après « données personnelles ») comme toute information relative à une personne physique identifiée ou qui peut être identifiée, directement ou indirectement, par référence à un numéro d'identification, ou à un ou plusieurs éléments qui lui sont propres. La mise en œuvre de traitements automatisés de données personnelles est notamment régie par le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016, entré en vigueur le 25 mai 2018, relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, ci-après désigné «RGPD».
            </p>
            <p className="">
              « Chers artisans, Nous souhaitons vous informer d'un changement dans le traitement de vos données personnelles dans le cadre de la gestion du répertoire des métiers. En effet, dans le cadre du décret n° 2020-946 et de la loi PACTE du 22 mai 2019 l'Institut National de la Propriété Industrielle (INPI) se voit attribué, à compter du 1er janvier 2023 la gestion du « Guichet unique », ce dernier permet aux créateurs d'entreprise et aux entreprises d'accomplir par voie électronique, toutes les formalités liées à la vie de leur entreprise. Pour plus d'information sur le traitement réalisé par l'INPI avec vos données à caractère personnel, nous vous invitons à contacter le Délégué à la Protection des Données de l'INPI. »
            </p>
          </section>

          <section className="legal__section">
            {cgvData.map((item) => (
              <div
                key={item.id}
                className="legal__accordion"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`legal__accordion-title ${isItemOpen(item.id) ? 'active' : ''}`}
                >
                  <span>{item.title}</span>
                  <FaChevronDown className={`chevron ${isItemOpen(item.id) ? 'rotate' : ''}`} />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isItemOpen(item.id) ? "max-h-[999px] opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`legal__accordion-content ${isItemOpen(item.id) ? 'open' : ''}`}>
                    {item.content.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    );
  }
  