import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../../components/shared/PageHero'
import CTABlock from '../../components/shared/CTABlock'
import FAQBlock from '../../components/shared/FAQBlock'
import SEOHead from '../../components/seo/SEOHead'
import './ExpertisePage.css'

const faqItems = [
  {
    question: 'Mon voisin construit sans autorisation. Que puis-je faire ?',
    answer: "Un voisin qui réalise des travaux sans permis ou en violation des règles d'urbanisme peut être mis en demeure de régulariser. Des recours administratifs et judiciaires existent. Le cabinet analyse la situation et vous indique les voies d'action les plus efficaces selon votre cas.",
  },
  {
    question: 'Mon propriétaire refuse de restituer ma caution. Comment réagir ?',
    answer: "Le bailleur est tenu de restituer le dépôt de garantie dans les délais légaux (1 ou 2 mois selon les cas). En cas de refus ou de retenue abusive, des recours existent — d'abord amiables, puis judiciaires si nécessaire. Le cabinet peut vous accompagner dans cette démarche.",
  },
  {
    question: 'Je suis en litige avec mon syndic de copropriété. Comment agir ?',
    answer: "Les litiges de copropriété peuvent porter sur des charges contestées, des décisions d'assemblée générale irrégulières ou des défauts d'entretien. Des voies de recours spécifiques existent. Le cabinet étudie votre situation et vous conseille sur la marche à suivre.",
  },
  {
    question: "J'ai été victime d'une arnaque commerciale. Puis-je être remboursé ?",
    answer: "Oui, des recours existent — notamment par le droit de la consommation ou du droit civil des contrats. Selon les circonstances, une action au civil ou le dépôt d'une plainte au pénal peut être envisagé. Le cabinet évalue la voie la plus adaptée à votre situation.",
  },
]

export default function DroitCivil() {
  return (
    <>
      <SEOHead
        title="Avocat Droit Civil Mandelieu, Cannes — Cabinet Ingrid Oliver"
        description="Maître Ingrid Oliver-D'Ollonne, avocat en droit civil à Mandelieu-la-Napoule. Litiges de voisinage, bail, copropriété, contrats, consommation. Cannes, Grasse, Alpes-Maritimes."
      />
      <PageHero
        eyebrow="Droit civil"
        title="Des solutions concrètes pour les litiges du quotidien"
        subtitle="Le droit civil encadre une grande partie de nos actes et relations. Lorsqu'un conflit survient, le cabinet vous conseille et vous défend avec pragmatisme."
        cta={{ label: 'Prendre rendez-vous', to: '/prendre-rendez-vous' }}
      />

      <section className="section expertise-intro" id="civil-intro">
        <div className="container">
          <div className="expertise-intro__grid">
            <div>
              <span className="section-label">Pourquoi consulter</span>
              <h2>Quand le quotidien devient litige</h2>
              <p className="expertise-lead">
                Conflit de voisinage, bailleur qui ne restitue pas le dépôt de garantie, copropriété mal gérée, prestataire qui ne respecte pas ses engagements — ces situations, bien que ordinaires, peuvent rapidement devenir sources de stress et de pertes financières.
              </p>
              <p>Le cabinet apporte une réponse claire, rapide, et proportionnée au litige. L'objectif : protéger vos droits sans vous engager inutilement dans de longues procédures coûteuses.</p>
            </div>
            <div className="expertise-situations">
              <h3>Situations prises en charge</h3>
              <ul className="expertise-list">
                <li>Conflits de voisinage et troubles anormaux</li>
                <li>Litiges locatifs — bail d'habitation ou commercial</li>
                <li>Restitution du dépôt de garantie</li>
                <li>Litiges de copropriété</li>
                <li>Droit des contrats — rédaction, exécution, résiliation</li>
                <li>Droit de la consommation — arnaques, défauts</li>
                <li>Recouvrement de créances privées</li>
                <li>Responsabilité civile</li>
                <li>Servitudes et droit de propriété</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-low expertise-approach" id="civil-approche">
        <div className="container">
          <span className="section-label">L'approche du cabinet</span>
          <h2>Pragmatisme avant tout</h2>
          <div className="expertise-approach__grid">
            <div>
              <h3>La voie amiable en priorité</h3>
              <p>Avant toute procédure, le cabinet cherche systématiquement à régler le litige par voie amiable. Une lettre de mise en demeure bien rédigée, une négociation structurée ou une tentative de médiation peuvent souvent suffire à résoudre la situation sans passer par le tribunal.</p>
              <p>Cette approche préserve votre énergie, votre budget et la relation avec l'autre partie — lorsque celle-ci doit se poursuivre dans le temps.</p>
            </div>
            <div>
              <h3>La procédure judiciaire si nécessaire</h3>
              <p>Lorsque la voie amiable échoue ou n'est pas possible, le cabinet vous représente devant les juridictions civiles compétentes — tribunal judiciaire de Grasse ou Cannes, cour d'appel d'Aix-en-Provence. Chaque étape est anticipée, chaque délai respecté.</p>
              <p>Vous êtes tenu informé de l'avancement de votre dossier et des perspectives à chaque stade de la procédure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-faq" id="civil-faq">
        <div className="container expertise-faq__inner">
          <div>
            <span className="section-label">Questions fréquentes</span>
            <h2>Ce que vous nous posez le plus souvent</h2>
          </div>
          <FAQBlock items={faqItems} title="" />
        </div>
      </section>

      <CTABlock
        title="Un litige civil à résoudre ?"
        subtitle="Décrivez votre situation au cabinet. Un premier échange permettra d'identifier les recours disponibles et la stratégie la plus adaptée."
      />

      <div className="expertise-nav-bar">
        <div className="container expertise-nav-bar__inner">
          <Link to="/expertises/droit-penal" className="btn btn--secondary btn--sm" id="prev-penal">
            <ArrowLeft size={15} />
            Droit pénal
          </Link>
          <Link to="/expertises/droit-commercial" className="btn btn--secondary btn--sm" id="next-commercial">
            Droit commercial
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  )
}
