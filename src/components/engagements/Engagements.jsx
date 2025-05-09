import './engagements.css'
import { useState, useEffect } from 'react'
import { FaShieldAlt, FaBolt, FaMapMarkerAlt, FaClipboardCheck, FaSmile } from 'react-icons/fa'
import { PiHandTapFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const engagements = [
  { icon: FaShieldAlt, title: 'Expertise', desc: "Plus de 40 ans d'expérience..." },
  { icon: FaBolt, title: 'Réactivité', desc: "Intervention rapide en cas de suspicion..." },
  { icon: FaMapMarkerAlt, title: 'Proximité', desc: "Disponible à Vitré, au cœur de la Bretagne." },
  { icon: FaClipboardCheck, title: 'Transparence', desc: "Des audits clairs, des solutions adaptées." },
  { icon: FaSmile, title: 'Sérénité', desc: "Accompagnement avant, pendant et après." },
]

export default function EngagementCircle() {
  const [open, setOpen] = useState(false)
  const [animateClose, setAnimateClose] = useState(false)
  const [radius, setRadius] = useState('15rem')

  // Adapte le radius en fonction de l'écran
  // const isMobile = window.innerWidth < 768
  // const radius = isMobile ? "8rem" : "15rem"

  // Détecte la largeur et adapte le rayon
  const updateRadius = () => {
    const width = window.innerWidth
    if (width < 768) {
      setRadius('8rem')          // Mobile
    } else if (width < 980) {
      setRadius('10rem')         // Tablette portrait
    } else if (width < 1024) {
      setRadius('12rem')         // Tablette paysage
    } else {
      setRadius('15rem')         // Desktop
    }
  }

  useEffect(() => {
    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  const handleToggle = () => {
    if (open) {
        setAnimateClose(true)
        setTimeout(() => {
            setOpen(false)
            setAnimateClose(false)
        }, 200)
    } else {
        setOpen(true)
    }
  }

  return (
    <div className="engagement-circle-wrapper">
      <button className="engagement-toggle" onClick={handleToggle}>
        {open ? (
            <RxCross2 className={`icon ${animateClose ? 'rotate' : ''}`}/> ) : (
            <p>Nos engagements <PiHandTapFill className='hint' /> </p>
        )}
      </button>

      <div className={`engagement-circle ${open ? 'active' : ''}`}>
        {engagements.map((e, i) => {
          const Icon = e.icon
          const angle = (360 / engagements.length) * i
          return (
            <div
              key={i}
              className="circle-item"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`,
                transitionDelay: `${i * 0.2}s`
              }}
            >
              <Icon className="icon" />
              <h2>{e.title}</h2>
              <p>{e.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
