import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import './Footer.css'

const expertisesLinks = [
  { label: 'Droit de la famille', path: '/expertises/droit-de-la-famille' },
  { label: 'Droit des enfants', path: '/expertises/droit-des-enfants' },
  { label: 'Droit du travail', path: '/expertises/droit-du-travail' },
  { label: 'Droit pénal', path: '/expertises/droit-penal' },
  { label: 'Droit civil', path: '/expertises/droit-civil' },
  { label: 'Droit commercial', path: '/expertises/droit-commercial' },
  { label: 'Préjudice corporel', path: '/expertises/prejudice-corporel' },
]

const legalLinks = [
  { label: 'Mentions légales', path: '/mentions-legales' },
  { label: 'Politique de confidentialité', path: '/politique-de-confidentialite' },
  { label: 'Politique de cookies', path: '/politique-de-cookies' },
]

export default function Footer() {

  return (
    <footer className="footer" id="site-footer">
      {/* Top CTA band */}
      <div className="footer__band">
        <div className="container">
          <div className="footer__band-inner">
            <div>
              <h2 className="footer__band-title">Vous avez une question juridique ?</h2>
              <p className="footer__band-sub">Contactez le cabinet pour un premier échange confidentiel.</p>
            </div>
            <div className="footer__band-actions">
              <a href="tel:+33422460002" className="btn btn--ghost">
                <Phone size={16} />
                04 22 46 00 02
              </a>
              <Link to="/prendre-rendez-vous" className="btn btn--gold">
                Prendre rendez-vous
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand column */}
            <div className="footer__col footer__col--brand">
              <Link to="/" className="footer__logo">
                <span className="footer__logo-name">Ingrid Oliver</span>
                <span className="footer__logo-sub">Avocat</span>
              </Link>
              <p className="footer__tagline">
                Un accompagnement juridique précis, humain et stratégique sur la Côte d'Azur.
              </p>
              <div className="footer__contact-items">
                <a href="https://maps.google.com/?q=369+avenue+de+Cannes+06210+Mandelieu" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
                  <MapPin size={14} />
                  <span>369 avenue de Cannes, Résidence Les Cyclamens<br />06210 Mandelieu-la-Napoule</span>
                </a>
                <a href="tel:+33422460002" className="footer__contact-item">
                  <Phone size={14} />
                  <span>+33 4 22 46 00 02</span>
                </a>
                <a href="tel:+33620530897" className="footer__contact-item">
                  <Phone size={14} />
                  <span>+33 6 20 53 08 97</span>
                </a>
                <a href="mailto:contact@ingridoliver.com" className="footer__contact-item">
                  <Mail size={14} />
                  <span>contact@ingridoliver.com</span>
                </a>
                <div className="footer__contact-item">
                  <Clock size={14} />
                  <span>Lun. – Ven. : 9h00 – 18h00</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="footer__col">
              <h3 className="footer__col-title">Navigation</h3>
              <ul className="footer__links">
                <li><Link to="/" className="footer__link">Accueil</Link></li>
                <li><Link to="/le-cabinet" className="footer__link">Le Cabinet</Link></li>
                <li><Link to="/expertises" className="footer__link">Expertises</Link></li>
                <li><Link to="/mediation" className="footer__link">Médiation</Link></li>
                <li><Link to="/prendre-rendez-vous" className="footer__link">Prendre rendez-vous</Link></li>
                <li><Link to="/contact" className="footer__link">Contact</Link></li>
                <li><Link to="/faq" className="footer__link">FAQ</Link></li>
              </ul>
            </div>

            {/* Expertises */}
            <div className="footer__col">
              <h3 className="footer__col-title">Domaines d'intervention</h3>
              <ul className="footer__links">
                {expertisesLinks.map(e => (
                  <li key={e.path}><Link to={e.path} className="footer__link">{e.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Barreau info */}
            <div className="footer__col">
              <h3 className="footer__col-title">Le Cabinet</h3>
              <div className="footer__badges">
                <div className="footer__badge">
                  <span className="footer__badge-label">Barreau de Grasse</span>
                </div>
                <div className="footer__badge">
                  <span className="footer__badge-label">Prestation de serment 2009</span>
                </div>
                <div className="footer__badge">
                  <span className="footer__badge-label">Médiatrice agréée</span>
                </div>
                <div className="footer__badge">
                  <span className="footer__badge-label">Cabinet à taille humaine</span>
                </div>
              </div>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <h3 className="footer__col-title">Informations légales</h3>
                <ul className="footer__links">
                  {legalLinks.map(l => (
                    <li key={l.path}><Link to={l.path} className="footer__link">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              © 2026 Cabinet Ingrid Oliver-D'Ollonne. Tous droits réservés. Design <a href="https://onehostingeurope.com" target="_blank" rel="noopener noreferrer" className="footer__link" style={{display: 'inline', padding: 0}}>OneHostingEurope</a>
            </p>
            <p className="footer__legal-note">
              Avocate au Barreau de Grasse — Mandelieu-la-Napoule, Alpes-Maritimes
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
