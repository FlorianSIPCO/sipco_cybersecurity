import './engagements.css'
import { useState } from 'react'
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
                transform: `rotate(${angle}deg) translate(15rem) rotate(-${angle}deg)`,
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
