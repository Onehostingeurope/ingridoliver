import SEOHead from '../components/seo/SEOHead'
import PageHero from '../components/shared/PageHero'
import './LegalPage.css'

export default function MentionsLegales() {
  return (
    <>
      <SEOHead
        title="Mentions légales — Cabinet Ingrid Oliver Avocat"
        description="Mentions légales du site web de Maître Ingrid Oliver-D'Ollonne, avocate au Barreau de Grasse à Mandelieu-la-Napoule."
      />
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
      />

      <section className="section legal-page" id="mentions-legales">
        <div className="container legal-page__content">
          <div className="legal-section">
            <h2>Éditeur du site</h2>
            <p><strong>Raison sociale :</strong> Cabinet Ingrid Oliver-D'Ollonne</p>
            <p><strong>Qualité :</strong> Avocate au Barreau de Grasse</p>
            <p><strong>Responsable de publication :</strong> Maître Ingrid Oliver-D'Ollonne</p>
            <p><strong>Adresse :</strong> 369 avenue de Cannes, Résidence Les Cyclamens, 06210 Mandelieu-la-Napoule, France</p>
            <p><strong>Téléphone :</strong> +33 4 22 46 00 02</p>
            <p><strong>Email :</strong> contact@ingridoliver.com</p>
            <p><strong>SIRET :</strong> [TODO — À compléter]</p>
            <p><strong>TVA intracommunautaire :</strong> [TODO — À compléter si applicable]</p>
          </div>

          <div className="legal-section">
            <h2>Barreau d'inscription</h2>
            <p>Maître Ingrid Oliver-D'Ollonne est inscrite au Barreau de Grasse — Cour d'appel d'Aix-en-Provence.</p>
            <p><strong>Titre professionnel :</strong> Avocate, obtenu en France conformément aux dispositions légales applicables.</p>
            <p><strong>Règles professionnelles :</strong> Les règles professionnelles applicables sont celles définies par le Règlement Intérieur National de la profession d'avocat (RIN) et le règlement intérieur du Barreau de Grasse. Ces documents sont consultables auprès de l'Ordre des avocats au Barreau de Grasse.</p>
          </div>

          <div className="legal-section">
            <h2>Hébergement</h2>
            <p><strong>Hébergeur :</strong> [TODO — Nom et adresse de l'hébergeur à compléter]</p>
          </div>

          <div className="legal-section">
            <h2>Propriété intellectuelle</h2>
            <p>L'ensemble des contenus de ce site (textes, images, mise en page, logos) est la propriété exclusive du cabinet Ingrid Oliver-D'Ollonne, sauf mentions contraires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, sans autorisation préalable et écrite, est strictement interdite.</p>
          </div>

          <div className="legal-section">
            <h2>Responsabilité</h2>
            <p>Les informations contenues sur ce site sont fournies à titre indicatif. Elles ne constituent pas un conseil juridique et ne sauraient engager la responsabilité du cabinet. Pour toute question relative à votre situation personnelle, consultez un professionnel du droit.</p>
          </div>

          <div className="legal-section">
            <h2>Liens hypertextes</h2>
            <p>Ce site peut contenir des liens vers des sites tiers. Le cabinet n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
          </div>

          <div className="legal-section">
            <h2>Droit applicable</h2>
            <p>Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à l'utilisation du site sera soumis à la compétence des juridictions françaises.</p>
          </div>
        </div>
      </section>
    </>
  )
}
