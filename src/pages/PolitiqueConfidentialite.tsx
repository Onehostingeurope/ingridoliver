import SEOHead from '../components/seo/SEOHead'
import PageHero from '../components/shared/PageHero'
import './LegalPage.css'

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEOHead
        title="Politique de confidentialité — Cabinet Ingrid Oliver Avocat"
        description="Politique de protection des données personnelles du cabinet Ingrid Oliver-D'Ollonne, avocat à Mandelieu-la-Napoule."
      />
      <PageHero
        eyebrow="Données personnelles"
        title="Politique de confidentialité"
      />

      <section className="section legal-page" id="politique-confidentialite">
        <div className="container legal-page__content">
          <div className="legal-section">
            <h2>Responsable du traitement</h2>
            <p>Cabinet Ingrid Oliver-D'Ollonne — Maître Ingrid Oliver-D'Ollonne</p>
            <p>369 avenue de Cannes, Résidence Les Cyclamens, 06210 Mandelieu-la-Napoule</p>
            <p>Email : contact@ingridoliver.com — Téléphone : +33 4 22 46 00 02</p>
          </div>

          <div className="legal-section">
            <h2>Données collectées</h2>
            <p>Le cabinet collecte uniquement les données strictement nécessaires à la prise en charge de vos demandes :</p>
            <ul>
              <li>Nom, prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Contenu des messages transmis via le formulaire de contact</li>
            </ul>
            <p>Ces données sont collectées avec votre consentement explicite, lors de la soumission du formulaire de contact ou de prise de rendez-vous.</p>
          </div>

          <div className="legal-section">
            <h2>Finalités du traitement</h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul>
              <li>Répondre à vos demandes de contact ou de rendez-vous</li>
              <li>Organiser et gérer la relation avec le cabinet</li>
              <li>Respecter les obligations légales et déontologiques applicables à la profession d'avocat</li>
            </ul>
            <p>Aucune donnée n'est transmise à des tiers, sauf obligation légale ou consentement explicite. Les données confiées dans le cadre d'une relation juridique sont couvertes par le secret professionnel.</p>
          </div>

          <div className="legal-section">
            <h2>Durée de conservation</h2>
            <p>Les données sont conservées pour la durée nécessaire à l'accomplissement des finalités pour lesquelles elles ont été collectées, dans le respect des obligations légales applicables à la profession d'avocat.</p>
          </div>

          <div className="legal-section">
            <h2>Vos droits</h2>
            <p>Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement dans certaines conditions</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>Pour exercer ces droits, contactez le cabinet à l'adresse : contact@ingridoliver.com</p>
            <p>Vous disposez également du droit de déposer une réclamation auprès de la CNIL : <strong>www.cnil.fr</strong></p>
          </div>

          <div className="legal-section">
            <h2>Sécurité</h2>
            <p>Le cabinet met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.</p>
          </div>

          <div className="legal-section">
            <h2>Délégué à la protection des données (DPO)</h2>
            <p>[TODO — À compléter si un DPO a été désigné, ou à supprimer si non applicable]</p>
          </div>
        </div>
      </section>
    </>
  )
}
