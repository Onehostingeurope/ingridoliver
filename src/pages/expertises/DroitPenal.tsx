import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../../components/shared/PageHero'
import CTABlock from '../../components/shared/CTABlock'
import FAQBlock from '../../components/shared/FAQBlock'
import SEOHead from '../../components/seo/SEOHead'
import './ExpertisePage.css'

const faqItems = [
  {
    question: 'Ai-je le droit à un avocat dès la garde à vue ?',
    answer: "Oui. Dès le début de la garde à vue, vous avez le droit d'être assisté par un avocat. Cette assistance est un droit fondamental. Ne renoncez jamais à ce droit. Le cabinet peut intervenir en urgence dès la première heure de votre garde à vue.",
  },
  {
    question: "Je suis victime d'une infraction. Comment obtenir réparation ?",
    answer: "En vous constituant partie civile dans la procédure pénale, vous pouvez obtenir une indemnisation de votre préjudice. Le cabinet vous accompagne tout au long de la procédure — de la plainte jusqu'à l'indemnisation — pour que votre préjudice soit reconnu et évalué à sa juste valeur.",
  },
  {
    question: 'Quelle est la différence entre délit et crime ?',
    answer: "Un délit est jugé devant le tribunal correctionnel ; un crime est jugé devant la cour d'assises. La distinction influe sur les peines encourues, les procédures applicables et la gravité des conséquences. Dans les deux cas, une défense préparée et rigoureuse est indispensable.",
  },
  {
    question: "Puis-je être jugé même sans avoir voulu commettre l'infraction ?",
    answer: "En matière pénale, certaines infractions requièrent une intention — d'autres non. L'élément intentionnel est l'un des fondements de la défense pénale. Le cabinet analyse précisément les faits et les textes applicables pour construire la meilleure défense possible.",
  },
]

export default function DroitPenal() {
  return (
    <>
      <SEOHead
        title="Avocat Pénal Mandelieu, Cannes, Grasse — Cabinet Ingrid Oliver"
        description="Avocat pénaliste à Mandelieu-la-Napoule. Maître Ingrid Oliver-D'Ollonne défend les personnes poursuivies dès la garde à vue et accompagne les victimes pour leur indemnisation. Cannes, Grasse."
      />
      <PageHero
        eyebrow="Droit pénal"
        title="Une défense ferme, dès le premier instant"
        subtitle="Qu'il s'agisse de vous défendre face à une accusation ou de vous accompagner après une infraction subie, le cabinet intervient avec urgence et rigueur."
        cta={{ label: 'Prendre rendez-vous', to: '/prendre-rendez-vous' }}
      />

      <section className="section expertise-intro" id="penal-intro">
        <div className="container">
          <div className="expertise-intro__grid">
            <div>
              <span className="section-label">Pourquoi consulter</span>
              <h2>Quand la procédure pénale s'engage</h2>
              <p className="expertise-lead">
                Une garde à vue, une convocation au tribunal, une plainte déposée contre vous — ou au contraire, vous êtes victime d'une infraction et vous cherchez à obtenir réparation. Dans les deux cas, la procédure pénale est complexe, les délais sont courts, et les conséquences peuvent être lourdes.
              </p>
              <p>Le cabinet intervient dès la première heure, aussi bien pour défendre que pour représenter et accompagner. Une présence immédiate et une défense préparée font la différence.</p>
            </div>
            <div className="expertise-situations">
              <h3>Situations prises en charge</h3>
              <ul className="expertise-list">
                <li>Assistance lors de la garde à vue</li>
                <li>Défense devant le tribunal correctionnel</li>
                <li>Instruction judiciaire — assistance à l'inculpé</li>
                <li>Défense en cour d'assises</li>
                <li>Violences physiques ou conjugales</li>
                <li>Infractions routières (alcool, stupéfiants, excès de vitesse)</li>
                <li>Escroquerie, abus de confiance</li>
                <li>Harcèlement pénal</li>
                <li>Accompagnement des victimes</li>
                <li>Constitution de partie civile — indemnisation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-low expertise-approach" id="penal-approche">
        <div className="container">
          <span className="section-label">L'approche du cabinet</span>
          <h2>Défense et accompagnement : deux missions distinctes</h2>
          <div className="expertise-approach__grid">
            <div>
              <h3>Pour les personnes mises en cause</h3>
              <p>Être soupçonné ou poursuivi ne signifie pas être coupable. La présomption d'innocence est un droit fondamental. Le cabinet prépare une défense rigoureuse, examine les pièces de la procédure, conteste ce qui doit l'être et vous représente devant toutes les juridictions pénales.</p>
              <p>La défense pénale est aussi une affaire d'urgence. Le cabinet peut intervenir en garde à vue, 24h/24, dans le respect de vos droits.</p>
            </div>
            <div>
              <h3>Pour les victimes</h3>
              <p>Victime d'une agression, d'une escroquerie, de violences ou d'une infraction quelconque — vous avez le droit d'être défendu, entendu et indemnisé. Le cabinet vous accompagne dans le dépôt de plainte, la constitution de partie civile et le suivi de la procédure jusqu'à l'indemnisation.</p>
              <p>Votre préjudice mérite d'être reconnu à sa juste valeur. Le cabinet veille à ce que rien ne soit omis dans l'évaluation de votre dommage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-faq" id="penal-faq">
        <div className="container expertise-faq__inner">
          <div>
            <span className="section-label">Questions fréquentes</span>
            <h2>Ce que vous nous posez le plus souvent</h2>
          </div>
          <FAQBlock items={faqItems} title="" />
        </div>
      </section>

      <CTABlock
        title="Vous êtes mis en cause ou victime d'une infraction ?"
        subtitle="Le cabinet peut intervenir en urgence. N'attendez pas pour faire valoir vos droits. Premier échange confidentiel."
      />

      <div className="expertise-nav-bar">
        <div className="container expertise-nav-bar__inner">
          <Link to="/expertises/droit-du-travail" className="btn btn--secondary btn--sm" id="prev-travail">
            <ArrowLeft size={15} />
            Droit du travail
          </Link>
          <Link to="/expertises/droit-civil" className="btn btn--secondary btn--sm" id="next-civil">
            Droit civil
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  )
}
