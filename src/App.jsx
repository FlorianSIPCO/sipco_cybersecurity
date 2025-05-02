import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import Nav from './components/nav/Nav'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Tarifs from './sections/tarifs/Tarifs'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import MentionsLegalesPage from './pages/mentions-legales'
import PolitiqueDeConfidentialitePage from './pages/politique-de-confidentialite'

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={
          <>
          <Nav />
            <Header />
            <About />
            <Services />
            <Tarifs />
            <Contact />
            <Footer />
          </>
        } />
        <Route path='/backup' />
        <Route path='/mentions-legales' element={<MentionsLegalesPage />}/>
        <Route path='/politique-de-confidentialite' element={<PolitiqueDeConfidentialitePage />}/>
      </Routes>
    </>
  )
}

export default App
