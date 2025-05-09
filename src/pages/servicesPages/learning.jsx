import ServiceDetailLayout from "./ServiceDetailLayout";
import useScrollToContact from "../../utils/useScrollToContact";

export default function LearningPage() {
    const handleScrollToContact = useScrollToContact();

    return (
        <ServiceDetailLayout title="Sensibilisation & formation des utilisateurs" current="/services/learning">
            <p>
                L’humain reste le premier vecteur de compromission. SIPCO propose des sessions de formation pratiques et adaptées à vos équipes pour transformer chaque collaborateur en maillon fort de votre cybersécurité.
            </p>

            <h2>Nos formats</h2>
            <ul>
                <li>Sessions présentielles ou en visioconférence</li>
                <li>Contenu adapté à chaque métier</li>
                <li>Ateliers pratiques & cas concrets (phishing simulé, ransomware, MFA…)</li>
            </ul>

            <h2>Objectifs pédagogiques</h2>
            <ul>
                <li>Comprendre les menaces actuelles</li>
                <li>Adopter les bonnes pratiques (mot de passe, vigilance email, MFA)</li>
                <li>Réagir efficacement en cas d’incident</li>
            </ul>

            <h2>Preuves d’impact</h2>
            <ul>
                <li>Taux de réussite aux tests post-formation</li>
                <li>Diminution des incidents utilisateurs signalés</li>
                <li>Attestation de sensibilisation fournie</li>
            </ul>

            <a href="/contact" className="cta" onClick={handleScrollToContact}>Former vos collaborateurs</a>
        </ServiceDetailLayout>
    )
}