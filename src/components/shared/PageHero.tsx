import { Link } from 'react-router-dom'
import './PageHero.css'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  cta?: {
    label: string
    to: string
  }
}

export default function PageHero({ eyebrow, title, subtitle, cta }: PageHeroProps) {
  return (
    <section className="page-hero" aria-label={`En-tête — ${title}`}>
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="container">
        <div className="page-hero__inner">
          {eyebrow && (
            <span className="section-label page-hero__eyebrow">{eyebrow}</span>
          )}
          <h1 className="page-hero__title">{title}</h1>
          {subtitle && (
            <p className="page-hero__sub">{subtitle}</p>
          )}
          {cta && (
            <Link to={cta.to} className="btn btn--gold page-hero__cta">
              {cta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
