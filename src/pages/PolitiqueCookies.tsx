import SEOHead from '../components/seo/SEOHead'
import PageHero from '../components/shared/PageHero'
import './LegalPage.css'

export default function PolitiqueCookies() {
  return (
    <>
      <SEOHead
        title="Politique de cookies — Cabinet Ingrid Oliver Avocat"
        description="Politique de gestion des cookies du site cabinet Ingrid Oliver-D'Ollonne, avocat à Mandelieu-la-Napoule."
      />
      <PageHero
        eyebrow="Cookies"
        title="Politique de cookies"
      />

      <section className="section legal-page" id="politique-cookies">
        <div className="container legal-page__content">
          <div className="legal-section">
            <h2>Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur un site web. Il permet de mémoriser certaines informations sur votre navigation.</p>
          </div>

          <div className="legal-section">
            <h2>Cookies utilisés sur ce site</h2>
            <h3>Cookies strictement nécessaires</h3>
            <p>Ces cookies sont indispensables au bon fonctionnement du site. Ils ne collectent aucune information à des fins publicitaires et ne peuvent pas être désactivés.</p>

            <h3>Cookies de mesure d'audience</h3>
            <p>[TODO — Préciser si des outils d'analyse (Google Analytics, Matomo, etc.) sont utilisés et leur politique de confidentialité correspondante]</p>

            <h3>Cookies tiers</h3>
            <p>Ce site intègre une carte Google Maps qui peut déposer des cookies de tiers. Vous pouvez consulter la politique de confidentialité de Google à l'adresse : policies.google.com/privacy</p>
          </div>

          <div className="legal-section">
            <h2>Durée de conservation des cookies</h2>
            <p>Les cookies ont une durée de vie limitée. Les cookies de session expirent à la fermeture de votre navigateur. Les cookies persistants ont une durée maximale de 13 mois conformément aux recommandations de la CNIL.</p>
          </div>

          <div className="legal-section">
            <h2>Gestion de vos préférences</h2>
            <p>Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres de votre navigateur. La désactivation de certains cookies peut affecter certaines fonctionnalités du site.</p>
            <p>Instructions pour les principaux navigateurs :</p>
            <ul>
              <li>Google Chrome : Paramètres → Confidentialité et sécurité → Cookies</li>
              <li>Mozilla Firefox : Options → Vie privée et sécurité</li>
              <li>Safari : Préférences → Confidentialité</li>
              <li>Microsoft Edge : Paramètres → Confidentialité, recherche et services</li>
            </ul>
            <p>Pour en savoir plus sur les cookies et la manière de les gérer, consultez le site de la CNIL : <strong>www.cnil.fr</strong></p>
          </div>

          <div className="legal-section">
            <h2>Contact</h2>
            <p>Pour toute question relative à notre politique de cookies, contactez le cabinet : contact@ingridoliver.com</p>
          </div>
        </div>
      </section>
    </>
  )
}
