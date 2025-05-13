import { Link } from 'react-router-dom'
import './service-layout.css'
import { IoMdHome } from "react-icons/io";

const serviceLinks = [
  { path: '/services/audit', label: 'Audit & Diagnostic' },
  { path: '/services/security', label: 'Sécurisation' },
  { path: '/services/support', label: 'Surveillance & Incidents' },
  { path: '/services/learning', label: 'Sensibilisation & Formation' }
]

export default function ServiceDetailLayout({ title, children, current }) {

    return (
        <section className="service__detail">
            <Link to='/' className='back-home'><IoMdHome /></Link>
            <div className="container service__overlay">
                <h1 className="service__title">{title}</h1>
                <div className="service__content">{children}</div>

                <div className="service__nav">
                <h3>Découvrir nos autres services :</h3>
                <ul>
                    {serviceLinks
                    .filter(link => link.path !== current)
                    .map(link => (
                        <li key={link.path}>
                        <Link to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </section>
  );
}
