import { Link } from 'react-router-dom'
import { ArrowRight, Users, Shield, Briefcase, Scale, FileText, Building2, Activity } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import PageHero from '../components/shared/PageHero'
import CTABlock from '../components/shared/CTABlock'
import './Expertises.css'

const domaines = [
  {
    icon: <Users size={28} />,
    title: 'Droit de la famille',
    desc: "Séparation, divorce, résidence des enfants, autorité parentale, pension alimentaire, filiation. Une présence attentive dans les moments les plus délicats de la vie familiale.",
    path: '/expertises/droit-de-la-famille',
    id: 'exp-card-famille',
  },
  {
    icon: <Shield size={28} />,
    title: 'Droit des enfants',
    desc: "Assistance de l'enfant entendu par le juge, défense du mineur, accompagnement devant le juge des enfants et dans le cadre de mesures éducatives.",
    path: '/expertises/droit-des-enfants',
    id: 'exp-card-enfants',
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Droit du travail',
    desc: "Défense du salarié en cas de licenciement ou de conflit avec l'employeur. Accompagnement de l'entreprise dans ses obligations légales et ses relations avec les salariés.",
    path: '/expertises/droit-du-travail',
    id: 'exp-card-travail',
  },
  {
    icon: <Scale size={28} />,
    title: 'Droit pénal',
    desc: "Défense des personnes poursuivies dès la garde à vue, assistance à l'instruction et aux audiences. Accompagnement et indemnisation des victimes.",
    path: '/expertises/droit-penal',
    id: 'exp-card-penal',
  },
  {
    icon: <FileText size={28} />,
    title: 'Droit civil',
    desc: "Conflits de voisinage, bail d'habitation, copropriété, droit des contrats, consommation. Des solutions concrètes pour les litiges du quotidien.",
    path: '/expertises/droit-civil',
    id: 'exp-card-civil',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Droit commercial',
    desc: "Contrats commerciaux, impayés, litiges avec partenaires et clients, accompagnement du gérant ou du chef d'entreprise, difficultés d'entreprise.",
    path: '/expertises/droit-commercial',
    id: 'exp-card-commercial',
  },
  {
    icon: <Activity size={28} />,
    title: 'Préjudice corporel',
    desc: "Accompagnement et défense des victimes d'accidents. Évaluation rigoureuse du dommage et assistance pour obtenir une indemnisation à la juste valeur du préjudice subi.",
    path: '/expertises/prejudice-corporel',
    id: 'exp-card-prejudice',
  },
]

export default function Expertises() {
  return (
    <>
      <SEOHead
        title="Expertises — Avocat Mandelieu, Cannes, Grasse — Cabinet Ingrid Oliver"
        description="Maître Ingrid Oliver-D'Ollonne intervient en droit de la famille, droit du travail, droit pénal, droit civil, droit commercial et préjudice corporel à Mandelieu-la-Napoule, Cannes et Grasse."
      />
      <PageHero
        eyebrow="Domaines d'intervention"
        title="Un accompagnement juridique dans chaque dimension de votre vie"
        subtitle="Du droit de la famille au droit commercial, le cabinet intervient dans les contentieux qui touchent directement à vos droits, votre sécurité et vos intérêts."
      />

      <section className="section expertises-overview" id="expertises-list">
        <div className="container">
          <div className="expertises-overview__intro">
            <p className="expertises-overview__lead">
              Chaque domaine du droit a ses spécificités, ses procédures, ses délais et ses enjeux propres. Le cabinet apporte une expertise ciblée dans chacun d'eux — tout en maintenant une vision d'ensemble qui permet d'identifier les interactions entre plusieurs situations juridiques.
            </p>
          </div>
          <div className="expertises-overview__grid">
            {domaines.map((d) => (
              <Link to={d.path} className="expertise-overview-card" key={d.path} id={d.id}>
                <div className="expertise-overview-card__icon">{d.icon}</div>
                <div className="expertise-overview-card__body">
                  <h2 className="expertise-overview-card__title">{d.title}</h2>
                  <p className="expertise-overview-card__desc">{d.desc}</p>
                  <span className="expertise-overview-card__link">
                    Découvrir ce domaine <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock dark={false} />
    </>
  )
}
