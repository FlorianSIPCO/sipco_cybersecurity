import ServiceDetailLayout from "./ServiceDetailLayout";
import useScrollToContact from "../../utils/useScrollToContact";

export default function AuditPage() {
    const handleScrollToContact = useScrollToContact();

    return (
        <ServiceDetailLayout title="Audit & Diagnostic de sécurité" current="/services/audit">
            <p>
                L’audit de cybersécurité est l'étape essentielle dans la protection de votre système d’information. Chez SIPCO, nous réalisons une évaluation complète et rigoureuse de votre architecture numérique afin d’identifier les failles, vulnérabilités et risques potentiels. Notre méthodologie est conforme aux standards de l’ANSSI et intègre les dernières recommandations du secteur.
            </p>

            <h2>Objectifs de l’audit</h2>
                <ul>
                    <li>Évaluer le niveau de maturité cybersécurité de votre entreprise</li>
                    <li>Détecter les vulnérabilités techniques, organisationnelles et humaines</li>
                    <li>Analyser la conformité réglementaire (RGPD, ISO 27001, NIS2…)</li>
                    <li>Proposer un plan d’actions priorisé</li>
                </ul>

            <h2>Ce que comprend l'audit SIPCO</h2>
                <ul>
                    <li>Scan de vulnérabilités internes et externes</li>
                    <li>Audit de configuration des postes, serveurs, firewalls</li>
                    <li>Évaluation des politiques d’accès, mots de passe, gestion des droits</li>
                    <li>Entretiens avec les utilisateurs clés</li>
                    <li>Analyse documentaire (charte informatique, PRA/PCA…)</li>
                </ul>

            <h2>Pourquoi choisir SIPCO</h2>
            <p>
                Notre expertise repose sur plus de 40 ans d’expérience dans la sécurisation des systèmes d’information. En tant qu’acteur labellisé, nous assurons un audit neutre, indépendant et immédiatement exploitable par votre DSI ou prestataire IT. Nos intervenants sont diplômés et expérimentés (notre DSI est auditeur international en cybersécurité et certifié sécurité pentesting).
            </p>

            <a href="/contact" className="cta" onClick={handleScrollToContact}>Planifier un audit</a>
        </ServiceDetailLayout>
    )
}