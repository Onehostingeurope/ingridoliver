import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../../components/shared/PageHero'
import CTABlock from '../../components/shared/CTABlock'
import FAQBlock from '../../components/shared/FAQBlock'
import SEOHead from '../../components/seo/SEOHead'
import './ExpertisePage.css'

const faqItems = [
  {
    question: "Mon enfant peut-il refuser d'être entendu par le juge ?",
    answer: "L'audition de l'enfant est un droit — pas une obligation. L'enfant capable de discernement peut demander à être entendu ou refuser de l'être. La demande peut émaner de l'enfant lui-même, de ses parents ou du juge. Le cabinet peut accompagner l'enfant lors de cette audition.",
  },
  {
    question: "Qu'est-ce qu'un juge des enfants et quand intervient-il ?",
    answer: "Le juge des enfants est un magistrat spécialisé qui intervient lorsque la santé, la sécurité, la moralité ou l'éducation d'un mineur sont compromises. Il peut ordonner des mesures éducatives, d'aide ou de protection, et intervient aussi en matière pénale pour les mineurs mis en cause.",
  },
  {
    question: 'Mon enfant peut-il être défendu par un avocat distinct de celui des parents ?',
    answer: "Oui. L'enfant a le droit à un avocat qui ne représente que ses intérêts propres — indépendamment de ceux de ses parents. Cette situation est notamment pertinente dans les conflits entre parents ou lorsque les intérêts de l'enfant peuvent diverger de ceux des adultes.",
  },
  {
    question: 'Le cabinet intervient-il pour mineurs en conflit avec la loi ?',
    answer: "Oui. Maître Oliver-D'Ollonne assiste les mineurs mis en cause dans le cadre pénal — lors des gardes à vue, des auditions et des audiences devant le tribunal pour enfants. Une défense adaptée à la minorité, avec une attention particulière à l'avenir du jeune.",
  },
]

export default function DroitEnfants() {
  return (
    <>
      <SEOHead
        title="Avocat Droit des Enfants — Mandelieu, Cannes, Grasse — Cabinet Ingrid Oliver"
        description="Maître Ingrid Oliver-D'Ollonne accompagne les enfants devant le juge aux affaires familiales et le juge des enfants. Protection du mineur, audition, défense pénale. Cannes, Grasse, Mandelieu."
      />
      <PageHero
        eyebrow="Droit des enfants"
        title="La voix juridique de l'enfant"
        subtitle="L'enfant n'est pas un accessoire d'un dossier familial. Il est un sujet de droit, avec des intérêts propres qui méritent une défense indépendante et bienveillante."
        cta={{ label: 'Prendre rendez-vous', to: '/prendre-rendez-vous' }}
      />

      <section className="section expertise-intro" id="enfants-intro">
        <div className="container">
          <div className="expertise-intro__grid">
            <div>
              <span className="section-label">Pourquoi consulter</span>
              <h2>Quand les droits de l'enfant doivent être défendus</h2>
              <p className="expertise-lead">
                Lors d'une séparation conflictuelle, d'une mesure éducative ou d'une procédure pénale impliquant un mineur, l'enfant peut avoir besoin d'un avocat qui le représente lui — pas ses parents. Maître Oliver-D'Ollonne intervient à ses côtés avec une approche humaine et une totale indépendance.
              </p>
              <p>L'audition de l'enfant, la défense du mineur délinquant, l'assistance dans les procédures de protection — autant de situations où une représentation spécifique est nécessaire.</p>
            </div>
            <div className="expertise-situations">
              <h3>Situations prises en charge</h3>
              <ul className="expertise-list">
                <li>Assistance lors de l'audition de l'enfant par le juge</li>
                <li>Représentation indépendante de l'enfant</li>
                <li>Assistance devant le juge des enfants</li>
                <li>Mesures éducatives en milieu ouvert (AEMO)</li>
                <li>Mesures de placement</li>
                <li>Défense du mineur mis en cause (pénal)</li>
                <li>Compositions pénales et procédures adaptées</li>
                <li>Signalements et enquêtes sociales</li>
                <li>Protection en cas de danger avéré</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-low expertise-approach" id="enfants-approche">
        <div className="container">
          <span className="section-label">L'approche du cabinet</span>
          <h2>Une présence adaptée à la fragilité du mineur</h2>
          <div className="expertise-approach__grid">
            <div>
              <h3>L'audition de l'enfant</h3>
              <p>Lorsqu'un juge entend un enfant — notamment dans le cadre d'un divorce ou d'une séparation — celui-ci peut être accompagné par un avocat. Ce droit est rarement exercé, pourtant il peut faire une différence décisive dans la qualité et la sérénité de cet échange.</p>
              <p>Le cabinet prépare l'enfant avec bienveillance, adapte son langage, l'aide à formuler sa parole — sans jamais l'instrumentaliser.</p>
            </div>
            <div>
              <h3>Le mineur face à la justice pénale</h3>
              <p>Un mineur mis en cause dans une procédure pénale bénéficie de droits spécifiques. Une assistance effective dès la garde à vue, une défense adaptée devant le tribunal pour enfants, et une approche centrée sur l'avenir du jeune — pas seulement sur les faits reprochés.</p>
              <p>Le cabinet intervient avec fermeté pour défendre les droits du mineur, tout en maintenant un dialogue constructif avec toutes les parties concernées.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-faq" id="enfants-faq">
        <div className="container expertise-faq__inner">
          <div>
            <span className="section-label">Questions fréquentes</span>
            <h2>Ce que vous nous posez le plus souvent</h2>
          </div>
          <FAQBlock items={faqItems} title="" />
        </div>
      </section>

      <CTABlock
        title="Votre enfant a besoin d'une défense indépendante ?"
        subtitle="Le cabinet reçoit les parents et, dans le respect des droits de l'enfant, peut proposer une représentation adaptée. Premier échange confidentiel."
      />

      <div className="expertise-nav-bar">
        <div className="container expertise-nav-bar__inner">
          <Link to="/expertises/droit-de-la-famille" className="btn btn--secondary btn--sm" id="prev-famille">
            <ArrowLeft size={15} />
            Droit de la famille
          </Link>
          <Link to="/expertises/droit-du-travail" className="btn btn--secondary btn--sm" id="next-travail">
            Droit du travail
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  )
}
