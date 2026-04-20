import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../../components/shared/PageHero'
import CTABlock from '../../components/shared/CTABlock'
import FAQBlock from '../../components/shared/FAQBlock'
import SEOHead from '../../components/seo/SEOHead'
import './ExpertisePage.css'

const faqItems = [
  {
    question: "Le cabinet intervient-il pour le divorce à l'amiable ?",
    answer: "Oui. Le cabinet accompagne aussi bien les procédures de divorce par consentement mutuel que les divorces contentieux. Même dans les séparations amiables, l'assistance d'un avocat est obligatoire et indispensable pour défendre vos intérêts et sécuriser l'accord.",
  },
  {
    question: 'Comment est fixée la résidence des enfants ?',
    answer: "La résidence habituelle des enfants est fixée soit par accord entre les parents, homologué par le juge, soit par décision du juge aux affaires familiales. Le juge prend en compte l'intérêt supérieur de l'enfant, la disponibilité des parents, les conditions de vie, et la capacité de chaque parent à maintenir le lien avec l'autre.",
  },
  {
    question: "Qu'est-ce que la pension alimentaire et comment est-elle calculée ?",
    answer: "La pension alimentaire est une contribution à l\'entretien et à l\'éducation des enfants, versée par le parent chez qui l\'enfant ne réside pas habituellement. Son montant est évalué par le juge selon les ressources de chaque parent et les besoins de l\'enfant. Elle peut être révisée à tout moment en cas de changement de situation.",
  },
  {
    question: 'Que faire en cas de non-respect des décisions sur la garde ?',
    answer: "Le non-respect des décisions du juge aux affaires familiales — notamment le droit de visite et d'hébergement — peut constituer une infraction pénale (non-représentation d'enfant). Le cabinet peut vous accompagner tant sur le plan civil que pénal pour faire respecter vos droits.",
  },
  {
    question: 'Peut-on modifier les décisions prises en matière familiale ?',
    answer: "Oui. Toute décision relative aux enfants ou aux pensions peut être révisée en cas de changement de circonstances significatif — changement de situation professionnelle, déménagement, évolution des besoins de l\'enfant. Le cabinet vous accompagne dans ces procédures de modification.",
  },
]

export default function DroitFamille() {
  return (
    <>
      <SEOHead
        title="Avocat Droit de la Famille — Mandelieu, Cannes, Grasse — Cabinet Ingrid Oliver"
        description="Maître Ingrid Oliver-D'Ollonne, avocate spécialisée en droit de la famille à Mandelieu-la-Napoule. Divorce, séparation, garde d'enfants, pension alimentaire, autorité parentale. Cannes et Grasse."
      />
      <PageHero
        eyebrow="Droit de la famille"
        title="Vos intérêts défendus avec stratégie et humanité"
        subtitle="Le droit de la famille touche à ce qu'il y a de plus intime dans une vie. Le cabinet vous accompagne avec rigueur et sensibilité, face aux moments de rupture comme à la nécessité de protéger vos enfants."
        cta={{ label: 'Prendre rendez-vous', to: '/prendre-rendez-vous' }}
      />

      <section className="section expertise-intro" id="famille-intro">
        <div className="container">
          <div className="expertise-intro__grid">
            <div>
              <span className="section-label">Pourquoi consulter</span>
              <h2>Quand le droit entre dans la vie de famille</h2>
              <p className="expertise-lead">
                Une séparation, un désaccord sur la garde des enfants, une succession difficile — ces situations appellent une défense claire, calme et stratégique. Maître Ingrid Oliver-D'Ollonne intervient en droit de la famille depuis 2009, avec une attention particulière portée aux enjeux humains de chaque dossier.
              </p>
              <p>
                Inscrite au Barreau de Grasse, le cabinet intervient devant le tribunal judiciaire de Grasse et de Cannes, ainsi que devant la cour d'appel d'Aix-en-Provence.
              </p>
            </div>
            <div className="expertise-situations">
              <h3>Situations prises en charge</h3>
              <ul className="expertise-list">
                <li>Séparation et divorce (amiable ou contentieux)</li>
                <li>Résidence habituelle des enfants</li>
                <li>Modalités du droit de visite et d'hébergement</li>
                <li>Exercice de l'autorité parentale</li>
                <li>Pension alimentaire et contribution à l'entretien</li>
                <li>Filiation — reconnaissance, contestation</li>
                <li>Adoption — simple ou plénière</li>
                <li>Régimes matrimoniaux et partage</li>
                <li>Violences intrafamiliales — mesures de protection</li>
                <li>Protection des majeurs vulnérables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-low expertise-approach" id="famille-approche">
        <div className="container">
          <span className="section-label">L'approche du cabinet</span>
          <h2>Un accompagnement qui préserve l'essentiel</h2>
          <div className="expertise-approach__grid">
            <div>
              <h3>Dans les séparations et divorces</h3>
              <p>
                Le divorce est toujours une épreuve. Mais la manière dont il est géré sur le plan juridique peut avoir des conséquences durables sur votre vie, votre situation financière et l'équilibre de vos enfants. Le cabinet recherche systématiquement la meilleure solution — amiable ou judiciaire — selon votre situation et vos priorités.
              </p>
              <p>
                Que vous souhaitiez un divorce par consentement mutuel ou que vous soyez confronté à un divorce contentieux, vous bénéficiez d'un accompagnement clair, d'une stratégie définie avec vous et d'une défense effective de vos intérêts.
              </p>
            </div>
            <div>
              <h3>Pour la protection des enfants</h3>
              <p>
                L'intérêt supérieur de l'enfant doit guider toute décision. Le cabinet veille à ce que les droits parentaux soient préservés, que les modalités de résidence soient équilibrées, et que les questions de pension alimentaire soient traitées de manière juste et proportionnée.
              </p>
              <p>
                En cas de conflits aigus ou de situations d'urgence — soustraction d'enfant, violences, déménagement non concerté — le cabinet peut intervenir dans les meilleurs délais pour défendre vos droits et ceux de vos enfants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-faq" id="famille-faq">
        <div className="container expertise-faq__inner">
          <div>
            <span className="section-label">Questions fréquentes</span>
            <h2>Ce que vous nous posez le plus souvent</h2>
          </div>
          <FAQBlock items={faqItems} title="" />
        </div>
      </section>

      <CTABlock
        title="Vous traversez une situation familiale difficile ?"
        subtitle="Un premier entretien au cabinet vous permettra d'y voir clair sur vos droits et les options envisageables. Confidentiel, sans engagement."
      />

      <div className="expertise-nav-bar">
        <div className="container expertise-nav-bar__inner">
          <Link to="/expertises" className="btn btn--secondary btn--sm" id="back-expertises">
            <ArrowLeft size={15} />
            Toutes les expertises
          </Link>
          <Link to="/expertises/droit-des-enfants" className="btn btn--secondary btn--sm" id="next-enfants">
            Droit des enfants
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  )
}
