import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page introuvable — Cabinet Ingrid Oliver Avocat"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
      />
      <section style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-hero)',
        padding: 'var(--space-8)',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <p style={{
            fontFamily: 'var(--font-label)',
            fontSize: 'var(--text-label-md)',
            letterSpacing: 'var(--ls-wider)',
            textTransform: 'uppercase',
            color: 'var(--color-tertiary-fixed-dim)',
            marginBottom: 'var(--space-4)',
          }}>
            Erreur 404
          </p>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-display-sm)',
            color: 'var(--color-on-primary)',
            marginBottom: 'var(--space-5)',
            letterSpacing: 'var(--ls-tight)',
          }}>
            Page introuvable
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            marginBottom: 'var(--space-8)',
            lineHeight: '1.7',
            maxWidth: 'none',
          }}>
            La page que vous recherchez n'existe pas ou a été déplacée. Revenez à l'accueil ou contactez le cabinet.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--gold" id="notfound-home-btn">
              Retour à l'accueil
            </Link>
            <Link to="/contact" className="btn btn--ghost" id="notfound-contact-btn">
              Contacter le cabinet
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
