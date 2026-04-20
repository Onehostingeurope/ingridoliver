import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageHero from '../../components/shared/PageHero'
import CTABlock from '../../components/shared/CTABlock'
import FAQBlock from '../../components/shared/FAQBlock'
import SEOHead from '../../components/seo/SEOHead'
import './ExpertisePage.css'

const faqItems = [
  {
    question: "Que faire après un accident de la route ?",
    answer: "Après un accident, il est essentiel de conserver tous les documents — procès-verbal, certificat médical, arrêts de travail, factures. Avant de signer quoi que ce soit avec une compagnie d'assurance, consultez un avocat spécialisé. Une offre d'indemnisation initiale est souvent sous-évaluée.",
  },
  {
    question: "Comment est évalué mon préjudice corporel ?",
    answer: "L'évaluation du préjudice corporel est une expertise médicale et juridique. Elle prend en compte de nombreux postes : déficit fonctionnel, souffrances endurées, préjudice esthétique, incidence professionnelle, préjudice sexuel, etc. Le cabinet vous accompagne dans cette évaluation pour en garantir l'exhaustivité.",
  },
  {
    question: "L'assurance m'a fait une offre d'indemnisation. Dois-je l'accepter ?",
    answer: "Non, pas sans conseil préalable. Les offres initiales des assureurs sont souvent insuffisantes et ne tiennent pas compte de l'ensemble des préjudices. Un avocat spécialisé peut analyser l'offre, la comparer au barème de référence et négocier une indemnisation plus juste.",
  },
  {
    question: "Puis-je être accompagné lors de l'expertise médicale ?",
    answer: "Oui. Il est fortement recommandé d'être accompagné par un médecin-conseil et, si possible, par votre avocat lors de l'expertise médicale. Cela garantit que votre situation est présentée de manière complète et que vos intérêts sont défendus lors de cette étape déterminante.",
  },
]

export default function PrejudiceCorporel() {
  return (
    <>
      <SEOHead
        title="Avocat Préjudice Corporel Alpes-Maritimes — Cabinet Ingrid Oliver — Mandelieu"
        description="Maître Ingrid Oliver-D'Ollonne accompagne les victimes de dommages corporels pour obtenir une juste indemnisation. Accidents, évaluation du préjudice, expertise médicale. Mandelieu, Cannes, Grasse."
      />
      <PageHero
        eyebrow="Préjudice corporel"
        title="Votre préjudice mérite d'être reconnu à sa juste valeur"
        subtitle="Après un accident ou un dommage corporel, la procédure d'indemnisation est complexe. Le cabinet vous accompagne pour que rien ne soit omis et que vous obteniez la réparation à laquelle vous avez droit."
        cta={{ label: 'Prendre rendez-vous', to: '/prendre-rendez-vous' }}
      />

      <section className="section expertise-intro" id="prejudice-intro">
        <div className="container">
          <div className="expertise-intro__grid">
            <div>
              <span className="section-label">Pourquoi consulter</span>
              <h2>Quand le corps est atteint et les droits doivent être défendus</h2>
              <p className="expertise-lead">
                Un accident de la route, une chute, une erreur médicale, un accident du travail — ces événements peuvent bouleverser durablement une vie. Face aux assureurs et à leurs expertises, les victimes sont souvent seules et sous-informées. Le cabinet agit pour que votre préjudice soit intégralement reconnu.
              </p>
              <p>L'évaluation du préjudice corporel est une expertise multidimensionnelle. Elle ne peut s'improviser. Le cabinet vous accompagne à chaque étape, de la constitution du dossier jusqu'à l'indemnisation définitive.</p>
            </div>
            <div className="expertise-situations">
              <h3>Situations prises en charge</h3>
              <ul className="expertise-list">
                <li>Accidents de la route — conducteur, passager, piéton</li>
                <li>Accidents de la vie courante</li>
                <li>Accidents du travail et maladies professionnelles</li>
                <li>Erreurs médicales et infections nosocomiales</li>
                <li>Agressions physiques</li>
                <li>Accompagnement lors de l'expertise médicale</li>
                <li>Négociation avec les compagnies d'assurance</li>
                <li>Constitution de partie civile en procédure pénale</li>
                <li>Saisine du FGAO ou du FIVA selon les situations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-low expertise-approach" id="prejudice-approche">
        <div className="container">
          <span className="section-label">L'approche du cabinet</span>
          <h2>Une évaluation rigoureuse, une défense totale</h2>
          <div className="expertise-approach__grid">
            <div>
              <h3>Ne pas signer sans conseils</h3>
              <p>Les compagnies d'assurance proposent souvent des offres rapides qui paraissent raisonnables. Mais ces offres sont rarement à la hauteur du préjudice réel. Signer trop vite, c'est accepter définitivement une indemnisation insuffisante lorsque la consolidation médicale n'est pas encore acquise.</p>
              <p>Le cabinet vérifie systématiquement que tous les postes de préjudice ont été pris en compte : souffrances endurées, déficit fonctionnel permanent, préjudice professionnel, préjudice d'agrément, etc.</p>
            </div>
            <div>
              <h3>L'assistance lors de l'expertise médicale</h3>
              <p>L'expertise médicale est un moment charnière dans la procédure d'indemnisation. Elle détermine le taux de déficit fonctionnel et conditionne le montant de l'indemnisation. Se présenter seul face à l'expert désigné par l'assurance comporte des risques.</p>
              <p>Le cabinet organise si nécessaire la présence d'un médecin-conseil indépendant et veille à ce que la réalité de vos séquelles soit pleinement documentée.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-faq" id="prejudice-faq">
        <div className="container expertise-faq__inner">
          <div>
            <span className="section-label">Questions fréquentes</span>
            <h2>Ce que vous nous posez le plus souvent</h2>
          </div>
          <FAQBlock items={faqItems} title="" />
        </div>
      </section>

      <CTABlock
        title="Vous êtes victime d'un dommage corporel ?"
        subtitle="Ne vous engagez pas seul face aux assureurs. Le cabinet évalue votre situation et vous accompagne pour obtenir une indemnisation complète et juste."
      />

      <div className="expertise-nav-bar">
        <div className="container expertise-nav-bar__inner">
          <Link to="/expertises/droit-commercial" className="btn btn--secondary btn--sm" id="prev-commercial">
            <ArrowLeft size={15} />
            Droit commercial
          </Link>
          <Link to="/expertises" className="btn btn--secondary btn--sm" id="back-all-expertises">
            Toutes les expertises
          </Link>
        </div>
      </div>
    </>
  )
}
