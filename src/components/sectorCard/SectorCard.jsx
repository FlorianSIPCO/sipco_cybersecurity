import './sectorCard.css'
import { useState } from 'react'
import { PiHandTapFill } from "react-icons/pi";

// eslint-disable-next-line no-unused-vars
const SectorCard = ({ icon: Icon, title, description }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={`sector-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="sector-card-inner">
        {/* Recto */}
        <div className="sector-card-face sector-card-front">
          <Icon className="icon" />
          <h2>{title}</h2>
          <p className="hint"><PiHandTapFill /></p>
        </div>

        {/* Verso */}
        <div className="sector-card-face sector-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default SectorCard
