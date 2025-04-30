import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import Nav from './components/nav/Nav'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Tarifs from './sections/tarifs/Tarifs'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'

function App() {
  return (
    <>
    <Nav />
    <ScrollToTop />
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <About />
            <Services />
            <Tarifs />
            <Contact />
            <Footer />
          </>
        } />
        <Route path='/backup' />
      </Routes>
    </>
  )
}

export default App
