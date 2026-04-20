import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../../components/shared/PageHero'
import CTABlock from '../../components/shared/CTABlock'
import FAQBlock from '../../components/shared/FAQBlock'
import SEOHead from '../../components/seo/SEOHead'
import './ExpertisePage.css'

const faqItems = [
  {
    question: 'Un client ne me paie pas. Que puis-je faire ?',
    answer: "En cas d'impayé, plusieurs voies existent : mise en demeure formelle, injonction de payer, référé-provision, action au fond. Le choix dépend du montant, de l'urgence et des relations commerciales. Le cabinet vous conseille sur la stratégie la plus efficace.",
  },
  {
    question: 'Le cabinet peut-il rédiger mes contrats commerciaux ?',
    answer: "Oui. La rédaction de contrats solides est l'un des meilleurs investissements pour une entreprise. Le cabinet rédige et négocie vos contrats commerciaux, CGV, clauses de confidentialité et accords de partenariat, en prenant soin de protéger vos intérêts.",
  },
  {
    question: 'Mon entreprise rencontre des difficultés financières. Quelles solutions ?',
    answer: 'Plusieurs procédures existent pour les entreprises en difficulté — mandat ad hoc, conciliation, sauvegarde, redressement ou liquidation judiciaire. Le cabinet peut vous accompagner dès les premiers signes de difficulté pour choisir la procédure adaptée et défendre vos intérêts.',
  },
  {
    question: 'Un partenaire commercial a rompu notre accord. Puis-je agir ?',
    answer: "La rupture abusive d'une relation commerciale établie peut ouvrir droit à des dommages et intérêts. Le cabinet analyse les conditions de la rupture — préavis, motif, montant du préjudice — et engage les procédures appropriées.",
  },
]

export default function DroitCommercial() {
  return (
    <>
      <SEOHead
        title="Avocat Droit Commercial Grasse, Cannes, Mandelieu — Cabinet Ingrid Oliver"
        description="Avocat en droit commercial à Mandelieu-la-Napoule. Maître Ingrid Oliver-D'Ollonne accompagne les chefs d'entreprise : contrats, impayés, litiges commerciaux. Cannes, Grasse, Alpes-Maritimes."
      />
      <PageHero
        eyebrow="Droit commercial"
        title="L'avocat de vos intérêts professionnels"
        subtitle="Contrats, partenariats, impayés, difficultés d'entreprise — le cabinet accompagne le chef d'entreprise dans les actes importants de sa vie professionnelle."
        cta={{ label: 'Prendre rendez-vous', to: '/prendre-rendez-vous' }}
      />

      <section className="section expertise-intro" id="commercial-intro">
        <div className="container">
          <div className="expertise-intro__grid">
            <div>
              <span className="section-label">Pourquoi consulter</span>
              <h2>Le droit au service de votre activité</h2>
              <p className="expertise-lead">
                Gérer une entreprise, c'est prendre des risques — mais certains risques se maîtrisent. Un contrat bien rédigé, un conseil à temps, une réaction rapide face à un impayé peuvent faire la différence entre une difficulté passagère et une crise durable.
              </p>
              <p>Maître Ingrid Oliver-D'Ollonne accompagne les dirigeants de TPE et PME, artisans, commerçants et professions libérales dans la gestion juridique de leur activité — de la prévention au contentieux.</p>
            </div>
            <div className="expertise-situations">
              <h3>Situations prises en charge</h3>
              <ul className="expertise-list">
                <li>Rédaction et négociation de contrats commerciaux</li>
                <li>Conditions générales de vente (CGV)</li>
                <li>Recouvrement d'impayés</li>
                <li>Litiges avec clients et partenaires commerciaux</li>
                <li>Rupture de relation commerciale établie</li>
                <li>Responsabilité du dirigeant</li>
                <li>Création d'entreprise — choix de la structure</li>
                <li>Cession de fonds de commerce</li>
                <li>Entreprises en difficulté — procédures préventives et collectives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-low expertise-approach" id="commercial-approche">
        <div className="container">
          <span className="section-label">L'approche du cabinet</span>
          <h2>Prévenir, sécuriser, défendre</h2>
          <div className="expertise-approach__grid">
            <div>
              <h3>Prévenir les litiges</h3>
              <p>Un contrat clair, des CGV solides, des clauses de résiliation bien rédigées — c'est la meilleure protection contre les conflits futurs. Le cabinet intervient en amont pour sécuriser vos actes et vos relations commerciales avant que les problèmes ne surviennent.</p>
            </div>
            <div>
              <h3>Défendre vos intérêts en cas de litige</h3>
              <p>Lorsque le conflit survient malgré tout — impayé, rupture abusive, concurrence déloyale — le cabinet défend vos intérêts avec réactivité. La négociation d'un accord à l'amiable est toujours préférée lorsqu'elle est possible, mais le cabinet n'hésite pas à saisir les juridictions compétentes si nécessaire.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-faq" id="commercial-faq">
        <div className="container expertise-faq__inner">
          <div>
            <span className="section-label">Questions fréquentes</span>
            <h2>Ce que vous nous posez le plus souvent</h2>
          </div>
          <FAQBlock items={faqItems} title="" />
        </div>
      </section>

      <CTABlock
        title="Votre activité professionnelle nécessite un appui juridique ?"
        subtitle="Le cabinet accompagne les chefs d'entreprise avec réactivité et compétence. Consultation confidentielle, que vous soyez en phase préventive ou en situation de conflit."
      />

      <div className="expertise-nav-bar">
        <div className="container expertise-nav-bar__inner">
          <Link to="/expertises/droit-civil" className="btn btn--secondary btn--sm" id="prev-civil">
            <ArrowLeft size={15} />
            Droit civil
          </Link>
          <Link to="/expertises/prejudice-corporel" className="btn btn--secondary btn--sm" id="next-prejudice">
            Préjudice corporel
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  )
}
