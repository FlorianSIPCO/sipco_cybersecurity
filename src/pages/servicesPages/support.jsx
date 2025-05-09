import ServiceDetailLayout from "./ServiceDetailLayout";
import useScrollToContact from "../../utils/useScrollToContact";

export default function SupportPage() {
    const handleScrollToContact = useScrollToContact();

    return (
        <ServiceDetailLayout title="Surveillance & réponse aux incidents" current="/services/support">
            <p>
                La sécurité ne s’arrête pas à la prévention. SIPCO vous accompagne dans la mise en œuvre d’un dispositif de détection et de réaction rapide aux attaques en cours, avec un SOC (Security Operations Center) sur mesure ou externalisé.
            </p>

            <h2>Notre dispositif de surveillance</h2>
            <ul>
                <li>Déploiement d’un système SIEM (analyse de logs en temps réel)</li>
                <li>Corrélation des événements et détection d’anomalies comportementales</li>
                <li>Alertes en temps réel et escalade sécurisée</li>
            </ul>

            <h2>Réponse aux incidents (CSIRT)</h2>
            <ul>
                <li>Procédures d’analyse, confinement, éradication et restauration</li>
                <li>Accompagnement durant les attaques (ransomware, fuite de données…)</li>
                <li>Rapport post-incident complet et plan de remédiation</li>
            </ul>

            <h2>Votre avantage SIPCO</h2>
            <ul>
                <li>Réactivité 24h/24</li>
                <li>Expertise certifiée (ISO 27035, réponse à incident)</li>
                <li>Préparation aux audits CNIL / RGPD après incident</li>
            </ul>

            <a href="/contact" className="cta" onClick={handleScrollToContact}>Mettre en place une surveillance</a>
        </ServiceDetailLayout>
    )
}