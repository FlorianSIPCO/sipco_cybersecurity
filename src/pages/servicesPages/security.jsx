import React from 'react'
import ServiceDetailLayout from './ServiceDetailLayout'
import useScrollToContact from "../../utils/useScrollToContact";

export default function SecurityPage() {
  const handleScrollToContact = useScrollToContact();

  return (
    <ServiceDetailLayout title="Sécurisation des infrastructures & données" current="/services/security" >
        <p>
        Protéger les ressources critiques de votre entreprise est notre priorité. Nous concevons des architectures résilientes intégrant des solutions de protection éprouvées contre les menaces actuelles : malwares, ransomware, attaques par rebond ou APT.
        </p>

        <h2>Nos axes d’intervention</h2>
        <ul>
          <li>Durcissement des systèmes (serveurs, endpoints, cloud)</li>
          <li>Déploiement de pare-feux, antivirus, EDR, proxy, antispam</li>
          <li>Chiffrement des données (TLS, VPN, disques, bases de données)</li>
          <li>Segmentation réseau et cloisonnement</li>
        </ul>

        <h2>Points forts de notre approche</h2>
        <ul>
          <li>Solutions certifiées ANSSI ou équivalentes</li>
          <li>Politique de moindre privilège appliquée</li>
          <li>Recommandations de durcissement CIS Benchmarks</li>
        </ul>

        <h2>Résultats pour votre organisation</h2>
        <ul>
          <li>Réduction significative de la surface d’attaque</li>
          <li>Protection proactive contre les ransomwares</li>
          <li>Traçabilité complète des accès et événements</li>
        </ul>

        <a href="/contact" className="cta" onClick={handleScrollToContact}>Renforcer votre infrastructure</a>
    </ServiceDetailLayout>
  )
}
