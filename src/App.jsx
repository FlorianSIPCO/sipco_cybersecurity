import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Services from './components/services/Services'
import Tarifs from './components/tarifs/Tarifs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

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
