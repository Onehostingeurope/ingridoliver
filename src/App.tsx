import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MobileBottomBar from './components/layout/MobileBottomBar'
import Accueil from './pages/Accueil'
import LeCabinet from './pages/LeCabinet'
import Expertises from './pages/Expertises'
import DroitFamille from './pages/expertises/DroitFamille'
import DroitEnfants from './pages/expertises/DroitEnfants'
import DroitTravail from './pages/expertises/DroitTravail'
import DroitPenal from './pages/expertises/DroitPenal'
import DroitCivil from './pages/expertises/DroitCivil'
import DroitCommercial from './pages/expertises/DroitCommercial'
import PrejudiceCorporel from './pages/expertises/PrejudiceCorporel'
import Mediation from './pages/Mediation'
import PrendreRendezVous from './pages/PrendreRendezVous'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import PolitiqueCookies from './pages/PolitiqueCookies'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/le-cabinet" element={<LeCabinet />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/expertises/droit-de-la-famille" element={<DroitFamille />} />
          <Route path="/expertises/droit-des-enfants" element={<DroitEnfants />} />
          <Route path="/expertises/droit-du-travail" element={<DroitTravail />} />
          <Route path="/expertises/droit-penal" element={<DroitPenal />} />
          <Route path="/expertises/droit-civil" element={<DroitCivil />} />
          <Route path="/expertises/droit-commercial" element={<DroitCommercial />} />
          <Route path="/expertises/prejudice-corporel" element={<PrejudiceCorporel />} />
          <Route path="/mediation" element={<Mediation />} />
          <Route path="/prendre-rendez-vous" element={<PrendreRendezVous />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/politique-de-cookies" element={<PolitiqueCookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
