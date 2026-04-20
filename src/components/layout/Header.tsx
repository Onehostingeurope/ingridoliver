import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'
import './Header.css'

const expertises = [
  { label: 'Droit de la famille', path: '/expertises/droit-de-la-famille' },
  { label: 'Droit des enfants', path: '/expertises/droit-des-enfants' },
  { label: 'Droit du travail', path: '/expertises/droit-du-travail' },
  { label: 'Droit pénal', path: '/expertises/droit-penal' },
  { label: 'Droit civil', path: '/expertises/droit-civil' },
  { label: 'Droit commercial', path: '/expertises/droit-commercial' },
  { label: 'Préjudice corporel', path: '/expertises/prejudice-corporel' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [expertisesOpen, setExpertisesOpen] = useState(false)
  const [mobileExpertisesOpen, setMobileExpertisesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileExpertisesOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="site-header">
      <div className="header__inner container">
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="Accueil — Cabinet Ingrid Oliver">
          <span className="header__logo-name">Ingrid Oliver</span>
          <span className="header__logo-sub">Avocat</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav hide-mobile" aria-label="Navigation principale">
          <NavLink to="/" className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`} end>
            Accueil
          </NavLink>
          <NavLink to="/le-cabinet" className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}>
            Le Cabinet
          </NavLink>

          {/* Expertises dropdown */}
          <div
            className="header__dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setExpertisesOpen(true)}
            onMouseLeave={() => setExpertisesOpen(false)}
          >
            <NavLink
              to="/expertises"
              className={({ isActive }) => `header__link header__link--dropdown ${isActive ? 'header__link--active' : ''}`}
              aria-expanded={expertisesOpen}
              aria-haspopup="true"
            >
              Expertises
              <ChevronDown size={14} className={`header__chevron ${expertisesOpen ? 'header__chevron--open' : ''}`} />
            </NavLink>
            <div className={`header__dropdown-menu ${expertisesOpen ? 'header__dropdown-menu--open' : ''}`} role="menu">
              {expertises.map(e => (
                <Link key={e.path} to={e.path} className="header__dropdown-item" role="menuitem">
                  {e.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/mediation" className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}>
            Médiation
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="header__actions hide-mobile">
          <a href="tel:+33422460002" className="header__phone" aria-label="Appeler le cabinet">
            <Phone size={14} />
            <span>04 22 46 00 02</span>
          </a>
          <Link to="/prendre-rendez-vous" className={`btn btn--sm ${scrolled ? 'btn--primary' : 'btn--gold'}`}>
            Prendre rendez-vous
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="header__burger hide-desktop"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`header__drawer hide-desktop ${menuOpen ? 'header__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="header__drawer-nav">
          <NavLink to="/" className="header__drawer-link" end>Accueil</NavLink>
          <NavLink to="/le-cabinet" className="header__drawer-link">Le Cabinet</NavLink>

          <button
            className="header__drawer-link header__drawer-link--accordion"
            onClick={() => setMobileExpertisesOpen(!mobileExpertisesOpen)}
            aria-expanded={mobileExpertisesOpen}
          >
            Expertises
            <ChevronDown size={16} className={mobileExpertisesOpen ? 'rotate-180' : ''} />
          </button>
          {mobileExpertisesOpen && (
            <div className="header__drawer-sub">
              {expertises.map(e => (
                <Link key={e.path} to={e.path} className="header__drawer-sublink">{e.label}</Link>
              ))}
            </div>
          )}

          <NavLink to="/mediation" className="header__drawer-link">Médiation</NavLink>
          <NavLink to="/contact" className="header__drawer-link">Contact</NavLink>
          <NavLink to="/faq" className="header__drawer-link">FAQ</NavLink>
        </nav>

        <div className="header__drawer-cta">
          <a href="tel:+33422460002" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>
            <Phone size={16} />
            Appeler le cabinet
          </a>
          <Link to="/prendre-rendez-vous" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
            Prendre rendez-vous
          </Link>
        </div>

        <div className="header__drawer-info">
          <p>369 avenue de Cannes, Résidence Les Cyclamens<br />06210 Mandelieu-la-Napoule</p>
          <p>Lundi – Vendredi : 9h00 – 18h00</p>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="header__overlay hide-desktop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </header>
  )
}
