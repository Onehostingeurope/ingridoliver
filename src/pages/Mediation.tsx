import { CheckCircle } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import PageHero from '../components/shared/PageHero'
import CTABlock from '../components/shared/CTABlock'
import FAQBlock from '../components/shared/FAQBlock'
import './Mediation.css'

const avantages = [
  { title: 'Confidentialité', desc: 'Tout ce qui est dit en médiation reste strictement confidentiel. La démarche ne peut pas être utilisée contre vous si elle échoue.' },
  { title: 'Rapidité', desc: 'Une médiation aboutit généralement en quelques semaines, contre des mois ou des années pour une procédure judiciaire.' },
  { title: 'Maîtrise du résultat', desc: 'Vous restez acteur de la solution. L\'accord est le vôtre — pas celui imposé par un juge.' },
  { title: 'Préservation des relations', desc: 'La médiation permet parfois de maintenir une relation professionnelle, familiale ou de voisinage après le conflit.' },
  { title: 'Coût souvent réduit', desc: 'Le coût d\'une médiation est généralement inférieur à celui d\'une procédure judiciaire complète.' },
  { title: 'Accord durable', desc: 'Un accord librement consenti s\'exécute mieux qu\'une décision imposée. Les risques de récidive du conflit sont plus faibles.' },
]

const faqItems = [
  {
    question: 'Qu\'est-ce que la médiation juridique ?',
    answer: 'La médiation est un processus volontaire et confidentiel par lequel un tiers neutre et formé — le médiateur — aide les parties en conflit à trouver elles-mêmes une solution mutuellement acceptable. Le médiateur ne tranche pas : il facilite le dialogue et la recherche d\'accord.',
  },
  {
    question: 'La médiation est-elle adaptée à toutes les situations ?',
    answer: 'Non. La médiation requiert la volonté de toutes les parties d\'y participer. Elle n\'est pas adaptée aux situations d\'urgence, aux cas de violence caractérisée, ou lorsque l\'une des parties est de mauvaise foi. Chaque situation est évaluée avec soin avant toute orientation.',
  },
  {
    question: 'Quelle est la différence entre médiation et conciliation ?',
    answer: 'La conciliation est souvent conduite par le juge ou un conciliateur de justice, dans un cadre judiciaire. La médiation est une démarche distincte, conduite par un médiateur formé et indépendant, en dehors du tribunal. Elle est généralement plus structurée et plus adaptée aux conflits complexes.',
  },
  {
    question: 'La médiation est-elle confidentielle ?',
    answer: 'Oui, absolument. Tout ce qui est dit ou échangé au cours d\'une médiation est strictement confidentiel. Ni le médiateur ni les parties ne peuvent en faire état devant un tribunal si la médiation échoue. Cette confidentialité est fondamentale pour permettre un dialogue ouvert.',
  },
  {
    question: 'Maître Oliver-D\'Ollonne intervient-elle comme avocate ou comme médiatrice ?',
    answer: 'Ces deux rôles sont distincts et ne peuvent être exercés simultanément dans un même dossier. Maître Oliver-D\'Ollonne peut intervenir soit en qualité d\'avocate (pour défendre vos intérêts), soit en qualité de médiatrice (comme tiers neutre entre deux parties). Cette distinction est fondamentale et toujours clarifiée dès le premier échange.',
  },
]

export default function Mediation() {
  return (
    <>
      <SEOHead
        title="Médiation Juridique Alpes-Maritimes — Maître Ingrid Oliver — Mandelieu"
        description="Maître Ingrid Oliver-D'Ollonne est médiatrice agréée. La médiation permet de résoudre certains conflits de manière confidentielle et constructive à Mandelieu, Cannes et Grasse."
      />
      <PageHero
        eyebrow="Médiation"
        title="Résoudre sans affronter : l'alternative au judiciaire"
        subtitle="La médiation est une démarche volontaire, confidentielle et construite. Elle offre aux parties en conflit la possibilité de trouver, ensemble, une solution durable."
      />

      <section className="section mediation-definition" id="mediation-def">
        <div className="container">
          <div className="mediation-definition__grid">
            <div>
              <span className="section-label">Comprendre la médiation</span>
              <h2>Qu'est-ce que la médiation ?</h2>
              <p className="mediation-lead">
                La médiation est un processus structuré, volontaire et confidentiel dans lequel un tiers neutre et qualifié — le médiateur — aide les parties à communiquer et à trouver par elles-mêmes une solution à leur différend.
              </p>
              <p>
                Contrairement au juge, le médiateur ne tranche pas. Il facilite le dialogue, aide chaque partie à exprimer ses besoins réels et guide la recherche d'un accord librement consenti.
              </p>
              <p>
                La médiation peut intervenir avant ou pendant une procédure judiciaire, dans les domaines civil, commercial, familial ou social. Son succès repose sur la bonne volonté et la participation active des deux parties.
              </p>
              <div className="mediation-note">
                <CheckCircle size={16} />
                <p>
                  Maître Ingrid Oliver-D'Ollonne est médiatrice formée et agréée. Elle peut intervenir en cette qualité dans certains dossiers — sous réserve que la situation le permette et que les deux parties y consentent librement.
                </p>
              </div>
            </div>
            <div className="mediation-distinction">
              <h3>Une précision importante</h3>
              <p>
                Maître Oliver-D'Ollonne peut intervenir dans un même type de dossier soit en qualité d'<strong>avocate</strong> (elle défend alors les intérêts d'une partie), soit en qualité de <strong>médiatrice</strong> (elle est alors neutre et n'est pas l'avocat d'une partie).
              </p>
              <p>
                Ces deux rôles sont rigoureusement distincts et ne peuvent jamais être exercés simultanément dans un même dossier. Cette distinction est clarifiée dès le premier échange.
              </p>
              <p>
                Si vous souhaitez être <em>défendu</em> dans un litige, Maître Oliver-D'Ollonne peut vous accompagner en qualité d'avocate.
              </p>
              <p>
                Si vous recherchez une <em>médiation</em> — avec une autre partie qui y consent librement — elle peut intervenir dans ce cadre distinct.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bg-low mediation-avantages" id="mediation-avantages">
        <div className="container">
          <div className="mediation-avantages__header">
            <span className="section-label">Ce que la médiation offre</span>
            <h2>Les atouts d'une démarche de médiation</h2>
            <p>Lorsqu'elle est adaptée à la situation, la médiation peut présenter des avantages considérables — pour les deux parties, et pour la durabilité de la solution trouvée.</p>
          </div>
          <div className="mediation-avantages__grid">
            {avantages.map((a, i) => (
              <div className="mediation-avantage" key={i}>
                <div className="mediation-avantage__check">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <h3 className="mediation-avantage__title">{a.title}</h3>
                  <p className="mediation-avantage__desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mediation-limites" id="mediation-limites">
        <div className="container mediation-limites__inner">
          <div>
            <span className="section-label">Ce qu'il faut savoir</span>
            <h2>Les limites de la médiation</h2>
            <p>
              La médiation n'est pas une solution universelle. Elle requiert la bonne volonté sincère des deux parties. Elle n'est pas adaptée lorsque l'une des parties refuse de participer, lorsque des violences sont en jeu, ou lorsque la situation exige une décision judiciaire urgente.
            </p>
            <p>
              Chaque demande de médiation est évaluée avec soin. Si la médiation n'est pas adaptée à votre situation, le cabinet vous orientera vers la voie judiciaire ou vers d'autres formes de résolution.
            </p>
          </div>
          <div className="mediation-process">
            <h3>Le déroulement habituel</h3>
            <ol className="mediation-steps-list">
              <li><span>1.</span> Premier contact et évaluation de la situation</li>
              <li><span>2.</span> Information et consentement des deux parties</li>
              <li><span>3.</span> Séances de médiation (individuelles puis communes)</li>
              <li><span>4.</span> Recherche d'un accord — rédaction et signature</li>
              <li><span>5.</span> Homologation judiciaire si nécessaire</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--bg-low mediation-faq" id="mediation-faq">
        <div className="container">
          <span className="section-label">Questions fréquentes</span>
          <h2 style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
            Tout ce que vous souhaitez savoir sur la médiation
          </h2>
          <FAQBlock items={faqItems} title="" />
        </div>
      </section>

      <CTABlock
        title="Vous envisagez la médiation pour votre situation ?"
        subtitle="Prenez contact avec le cabinet pour un premier échange confidentiel. La pertinence de la médiation sera évaluée objectivement selon votre situation."
      />
    </>
  )
}
