import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../../components/shared/PageHero'
import CTABlock from '../../components/shared/CTABlock'
import FAQBlock from '../../components/shared/FAQBlock'
import SEOHead from '../../components/seo/SEOHead'
import './ExpertisePage.css'

const faqItems = [
  {
    question: 'Que faire en cas de licenciement injustifié ?',
    answer: "En cas de licenciement que vous estimez injustifié ou abusif, vous pouvez contester la décision devant le conseil de prud'hommes. Le cabinet vous accompagne dans l'analyse de votre situation, la rédaction des courriers et la représentation devant la juridiction compétente.",
  },
  {
    question: 'Le cabinet défend-il aussi les employeurs ?',
    answer: "Oui. Maître Oliver-D'Ollonne accompagne également les chefs d'entreprise et employeurs — dans la prévention des risques, la rédaction de documents contractuels, la gestion des procédures disciplinaires et la défense en cas de contentieux prud'homal.",
  },
  {
    question: "Qu'est-ce qu'une rupture conventionnelle homologuée ?",
    answer: "La rupture conventionnelle est un mode de rupture du contrat de travail à durée indéterminée, conclu d'un commun accord entre l'employeur et le salarié. Elle ouvre droit à l'indemnité de rupture et à l'allocation chômage. Le cabinet peut vous accompagner dans la négociation et la vérification des conditions.",
  },
  {
    question: 'Que faire face à une situation de harcèlement moral ?',
    answer: "Le harcèlement moral au travail est interdit par la loi. Si vous en êtes victime, il est important de constituer des preuves, d'en informer votre employeur et de consulter un médecin du travail ou un avocat. Le cabinet peut vous aider à défendre vos droits et à engager les procédures appropriées.",
  },
]

export default function DroitTravail() {
  return (
    <>
      <SEOHead
        title="Avocat Droit du Travail Cannes, Mandelieu, Grasse — Cabinet Ingrid Oliver"
        description="Maître Ingrid Oliver-D'Ollonne, avocat en droit du travail à Mandelieu. Licenciement, rupture conventionnelle, salaires, prud'hommes. Salarié ou employeur — Cannes, Grasse, Alpes-Maritimes."
      />
      <PageHero
        eyebrow="Droit du travail"
        title="Votre emploi, vos droits, votre dignité"
        subtitle="Le cabinet accompagne salariés et employeurs dans toutes les situations où le droit du travail intervient — prévention, négociation, contentieux."
        cta={{ label: 'Prendre rendez-vous', to: '/prendre-rendez-vous' }}
      />

      <section className="section expertise-intro" id="travail-intro">
        <div className="container">
          <div className="expertise-intro__grid">
            <div>
              <span className="section-label">Pourquoi consulter</span>
              <h2>Quand le droit du travail s'impose</h2>
              <p className="expertise-lead">
                Un licenciement brutal, un salaire impayé, une clause contractuelle défavorable, un conflit qui s'envenime — le droit du travail régit une relation dont les déséquilibres peuvent être importants. Maître Oliver-D'Ollonne vous guide pour rétablir l'équilibre ou faire respecter vos droits.
              </p>
              <p>Le cabinet intervient devant le Conseil de prud'hommes de Cannes et Grasse, et en appel devant la Cour d'Aix-en-Provence.</p>
            </div>
            <div className="expertise-situations">
              <h3>Situations prises en charge</h3>
              <ul className="expertise-list">
                <li>Analyse et négociation du contrat de travail</li>
                <li>Licenciement (abusif, économique, disciplinaire)</li>
                <li>Rupture conventionnelle homologuée</li>
                <li>Démission forcée et résiliation judiciaire</li>
                <li>Salaires impayés et heures supplémentaires</li>
                <li>Harcèlement moral ou sexuel</li>
                <li>Discrimination au travail</li>
                <li>Contentieux prud'homal — assistance et représentation</li>
                <li>Accompagnement de l'employeur (obligations légales)</li>
                <li>Procédures disciplinaires — protection et défense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-low expertise-approach" id="travail-approche">
        <div className="container">
          <span className="section-label">L'approche du cabinet</span>
          <h2>Défense du salarié, conseil de l'employeur</h2>
          <div className="expertise-approach__grid">
            <div>
              <h3>Pour le salarié</h3>
              <p>Confronté à une décision de son employeur — licenciement, mise à pied, discrimination — le salarié a souvent l'impression d'être seul face à une structure plus puissante. Le cabinet rétablit cet équilibre. La situation est analysée, les droits identifiés, et la stratégie — amiable ou judiciaire — est définie avec vous.</p>
              <p>Chaque procédure prud'homale a ses délais et ses exigences propres. Consulter tôt est souvent déterminant.</p>
            </div>
            <div>
              <h3>Pour l'employeur</h3>
              <p>Le droit du travail évolue sans cesse. Le chef d'entreprise doit faire face à un cadre légal de plus en plus contraignant — contrats, durée du travail, procédures disciplinaires, obligations de sécurité. Mieux vaut prévenir que subir.</p>
              <p>Le cabinet conseille l'employeur en amont, rédige ou vérifie les documents contractuels, accompagne les procédures de rupture et défend l'entreprise en cas de contentieux.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-faq" id="travail-faq">
        <div className="container expertise-faq__inner">
          <div>
            <span className="section-label">Questions fréquentes</span>
            <h2>Ce que vous nous posez le plus souvent</h2>
          </div>
          <FAQBlock items={faqItems} title="" />
        </div>
      </section>

      <CTABlock
        title="Un conflit professionnel qui s'annonce ?"
        subtitle="Le cabinet étudie votre dossier et vous indique les options disponibles. Consultation confidentielle, salarié comme employeur."
      />

      <div className="expertise-nav-bar">
        <div className="container expertise-nav-bar__inner">
          <Link to="/expertises/droit-des-enfants" className="btn btn--secondary btn--sm" id="prev-enfants">
            <ArrowLeft size={15} />
            Droit des enfants
          </Link>
          <Link to="/expertises/droit-penal" className="btn btn--secondary btn--sm" id="next-penal">
            Droit pénal
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  )
}
