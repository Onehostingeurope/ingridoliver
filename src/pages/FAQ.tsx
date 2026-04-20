import SEOHead from '../components/seo/SEOHead'
import PageHero from '../components/shared/PageHero'
import FAQBlock from '../components/shared/FAQBlock'
import CTABlock from '../components/shared/CTABlock'

const faqItems = [
  {
    question: 'Dans quels domaines d\'expertise intervenez-vous ?',
    answer: 'Le cabinet intervient en droit de la famille (divorce, séparation, garde d\'enfants), droit des enfants, droit du travail, droit pénal, droit civil (voisinage, bail, copropriété), droit commercial et préjudice corporel. Maître Oliver-D\'Ollonne est également médiatrice agréée.',
  },
  {
    question: 'Comment prendre rendez-vous ?',
    answer: 'Vous pouvez prendre rendez-vous par téléphone au +33 4 22 46 00 02, par email à contact@ingridoliver.com, ou via le formulaire de la page « Prendre rendez-vous ». Le cabinet vous répond dans les 24 à 48 heures ouvrables.',
  },
  {
    question: 'Le premier entretien est-il confidentiel ?',
    answer: 'Oui, absolument. Dès le premier contact, tout ce que vous confiez au cabinet est couvert par le secret professionnel. Cette protection est absolue et ne souffre aucune exception.',
  },
  {
    question: 'Le cabinet reçoit-il uniquement sur rendez-vous ?',
    answer: 'Oui. Le cabinet fonctionne exclusivement sur rendez-vous afin de vous garantir une attention complète et un temps de qualité. Vous êtes reçu au 369 avenue de Cannes, Résidence Les Cyclamens, 06210 Mandelieu-la-Napoule.',
  },
  {
    question: 'Le cabinet intervient-il en médiation ?',
    answer: 'Oui. Maître Ingrid Oliver-D\'Ollonne est médiatrice. Dans certaines situations, la médiation peut permettre de résoudre un différend de manière plus rapide, confidentielle et économique qu\'une procédure judiciaire. La pertinence de cette démarche est évaluée au cas par cas.',
  },
  {
    question: 'Intervenez-vous à Cannes et à Grasse ?',
    answer: 'Oui. Le cabinet est situé à Mandelieu-la-Napoule, entre Cannes et Grasse. Maître Oliver-D\'Ollonne intervient régulièrement devant les tribunaux de Cannes, Grasse et la Cour d\'appel d\'Aix-en-Provence.',
  },
  {
    question: 'Comment savoir si mon problème nécessite un avocat ?',
    answer: 'En cas de doute, il est toujours préférable de consulter. Un premier échange permet souvent de clarifier la situation, d\'identifier vos droits et de déterminer si une démarche juridique est opportune — sans engagement de votre part.',
  },
  {
    question: 'Puis-je être accompagné en urgence (garde à vue, etc.) ?',
    answer: 'Oui. En matière pénale, le cabinet peut intervenir en urgence, notamment dès la garde à vue. N\'attendez pas pour contacter le cabinet dans ces situations. Appelez directement au +33 6 20 53 08 97.',
  },
  {
    question: 'Le cabinet accompagne-t-il les victimes ?',
    answer: 'Oui. En droit pénal comme en préjudice corporel, le cabinet accompagne les victimes — de la plainte jusqu\'à l\'indemnisation — pour faire reconnaître leur préjudice à sa juste valeur.',
  },
  {
    question: 'Quels sont les honoraires du cabinet ?',
    answer: 'Les honoraires sont déterminés en fonction de la nature et de la complexité du dossier. Ils sont toujours discutés et formalisés dans une convention d\'honoraires avant tout engagement. Pour connaître les conditions applicables à votre situation, prenez contact avec le cabinet.',
  },
]

export default function FAQ() {
  return (
    <>
      <SEOHead
        title="FAQ — Questions fréquentes — Cabinet Ingrid Oliver Avocat"
        description="Réponses aux questions les plus fréquentes sur le cabinet Ingrid Oliver-D'Ollonne : rendez-vous, domaines d'intervention, honoraires, médiation, confidentialité."
      />
      <PageHero
        eyebrow="FAQ"
        title="Vos questions, nos réponses"
        subtitle="Retrouvez ici les réponses aux questions que nous posent le plus souvent les personnes qui contactent le cabinet pour la première fois."
      />

      <section className="section" id="faq-full">
        <div className="container" style={{ maxWidth: '860px' }}>
          <FAQBlock items={faqItems} title="" />
        </div>
      </section>

      <CTABlock dark={false}
        title="Votre question ne figure pas dans cette liste ?"
        subtitle="Contactez directement le cabinet. Un premier échange est toujours gratuit, rapide et sans engagement."
      />
    </>
  )
}
