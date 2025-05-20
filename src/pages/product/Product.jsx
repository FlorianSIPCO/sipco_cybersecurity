import React, { useState } from 'react'
import './product.css'
import snapshotData from '../../constants/snapshots.json'
import backupsData from '../../constants/backups.json'
import arrow from '../../assets/arrow_black.png'
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom'
import Footer from '../../sections/footer/Footer'

export default function Product() {
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  // Filtrage par mot-clé (insensible à la casse)
  const filteredData = snapshotData.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  // Logique de pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredData.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <>
        <div className="container product__container">
            <Link to='/' className='back-home'><IoMdHome /></Link>
            <h1>Découvrez notre produit <span>SIPCO Backup</span></h1>
            <div className="main__productContainer">
                <div className="demo__container">
                    <h1>SNAPSHOTS</h1>

                    <div className="product__actions">
                    <button>Copier</button>
                    <button>CSV</button>
                    <button>Excel</button>
                    <button>PDF</button>
                    <button>Imprimer</button>
                    </div>
                    <div className='arrow__infos'>
                    <img src={arrow} alt="Flèche" />
                    <p>Sauvegarde quotidienne des données</p>
                    </div>

                    <div className="search">
                    <label>Search :</label>
                    <input
                        type="text"
                        className="search__input"
                        value={searchTerm}
                        onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setCurrentPage(1) // reset to page 1 on search
                        }}
                        placeholder="Rechercher..."
                    />
                    </div>

                    <table className="product__table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                        <th>DESCRIPTION</th>
                        <th>TAILLE DISQUE</th>
                        <th>CRÉÉ LE :</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.type}</td>
                            <td>{item.status}</td>
                            <td>{item.description}</td>
                            <td>{item.size}</td>
                            <td>{item.created}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>


                    <div className="pagination">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>{'«'}</button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                        >
                        {index + 1}
                        </button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>{'»'}</button>
                    </div>

                    <h1 id='backup'>Sauvegardes incrémentielles</h1>
                    {/* Flèche info */}
                    <div className='arrow__infos reverse'>
                    <img src={arrow} alt="Flèche" />
                    <p>Détection automatique des erreurs de sauvegardes</p>
                    </div>
                    
                    <table className="backup__table">
                    <thead>
                        <tr>
                        <th>NOM DE L'ARCHIVE</th>
                        <th>DATE DE DEBUT</th>
                        <th>DATE DE FIN</th>
                        <th>NOMBRE DE FICHIERS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {backupsData.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.start}</td>
                            <td>{item.end}</td>
                            <td>{item.files}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>

                <div className="title__product">
                    <h1>Vous souhaitez en savoir plus sur notre produit ?</h1>
                    <a href='https://outlook.office365.com/book/RendezvousprisedinformationsSIPCO@sipco.fr/' target='_blank' className='cta'>Prendre rendez-vous</a>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
