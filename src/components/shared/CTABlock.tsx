import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import './CTABlock.css'

interface CTABlockProps {
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function CTABlock({
  title = "Vous avez une situation juridique à examiner ?",
  subtitle = "Chaque échange avec le cabinet est confidentiel. Maître Ingrid Oliver-D'Ollonne vous répond avec clarté et sans détour.",
  dark = true
}: CTABlockProps) {
  return (
    <section className={`cta-block ${dark ? 'cta-block--dark' : 'cta-block--light'}`} aria-label="Prise de contact">
      <div className="container">
        <div className="cta-block__inner">
          <div className="cta-block__content">
            <span className="section-label">Prendre contact</span>
            <h2 className="cta-block__title">{title}</h2>
            <p className="cta-block__sub">{subtitle}</p>
          </div>
          <div className="cta-block__actions">
            <Link to="/prendre-rendez-vous" className="btn btn--gold" id="cta-rdv-link">
              Prendre rendez-vous
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+33422460002" className={`btn ${dark ? 'btn--ghost' : 'btn--secondary'}`} id="cta-phone-link">
              <Phone size={16} />
              04 22 46 00 02
            </a>
            <a href="mailto:contact@ingridoliver.com" className={`btn ${dark ? 'btn--ghost' : 'btn--secondary'}`} id="cta-email-link">
              <Mail size={16} />
              Écrire au cabinet
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
