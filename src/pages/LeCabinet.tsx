import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Scale, Heart, Eye, Shield, UserCheck } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import PageHero from '../components/shared/PageHero'
import CTABlock from '../components/shared/CTABlock'
import portraitImg from '../assets/portrait_avocat2.jpg'
import './LeCabinet.css'

const values = [
  { icon: <Heart size={20} />, label: 'Écoute', desc: "Chaque situation est unique. Avant toute analyse juridique, l'écoute attentive de votre histoire." },
  { icon: <Eye size={20} />, label: 'Conscience', desc: "L'exercice du droit s'accompagne d'une responsabilité humaine et professionnelle constante." },
  { icon: <Scale size={20} />, label: 'Indépendance', desc: "Un cabinet non intégré, libre de toute structure, au service exclusif de vos intérêts." },
  { icon: <BookOpen size={20} />, label: 'Probité', desc: "La transparence sur vos droits, vos chances et les limites de la procédure — sans illusion." },
  { icon: <UserCheck size={20} />, label: 'Humanité', desc: "Derrière chaque dossier se trouve une personne. Cette évidence guide chaque décision du cabinet." },
  { icon: <Shield size={20} />, label: 'Discrétion', desc: "Le secret professionnel est absolu. Ce que vous confiez au cabinet reste strictement confidentiel." },
]

export default function LeCabinet() {
  return (
    <>
      <SEOHead
        title="Le Cabinet — Avocat Barreau de Grasse — Maître Ingrid Oliver-D'Ollonne"
        description="Maître Ingrid Oliver-D'Ollonne, avocate au Barreau de Grasse depuis 2009. Cabinet à taille humaine à Mandelieu-la-Napoule. Découvrez son parcours, ses valeurs et son approche."
      />
      <PageHero
        eyebrow="Le Cabinet"
        title="Un cabinet fondé sur la confiance et l'exigence"
        subtitle="Maître Ingrid Oliver-D'Ollonne exerce depuis 2009 avec une conviction forte : le droit doit être accessible, clair et efficacement défendu pour chacun."
        cta={{ label: 'Prendre rendez-vous', to: '/prendre-rendez-vous' }}
      />

      {/* Profil */}
      <section className="section cabinet-profil" id="profil">
        <div className="container">
          <div className="cabinet-profil__grid">
            <div className="cabinet-profil__portrait-col">
              <div className="cabinet-profil__portrait-frame">
                <img src={portraitImg} alt="Maître Ingrid Oliver-D'Ollonne, Avocate au Barreau de Grasse" />
              </div>
              <div className="cabinet-profil__id-card">
                <div className="cabinet-profil__id-item">
                  <span className="cabinet-profil__id-label">Nom complet</span>
                  <span className="cabinet-profil__id-value">Maître Ingrid Oliver-D'Ollonne</span>
                </div>
                <div className="cabinet-profil__id-item">
                  <span className="cabinet-profil__id-label">Barreau</span>
                  <span className="cabinet-profil__id-value">Barreau de Grasse</span>
                </div>
                <div className="cabinet-profil__id-item">
                  <span className="cabinet-profil__id-label">Prestation de serment</span>
                  <span className="cabinet-profil__id-value">Janvier 2009</span>
                </div>
                <div className="cabinet-profil__id-item">
                  <span className="cabinet-profil__id-label">Qualité supplémentaire</span>
                  <span className="cabinet-profil__id-value">Médiatrice</span>
                </div>
                <div className="cabinet-profil__id-item">
                  <span className="cabinet-profil__id-label">Cabinet</span>
                  <span className="cabinet-profil__id-value">Mandelieu-la-Napoule</span>
                </div>
              </div>
            </div>

            <div className="cabinet-profil__text-col">
              <span className="section-label">Présentation</span>
              <h2 className="cabinet-profil__title">
                Une avocate indépendante, engagée, implantée sur la Côte d'Azur
              </h2>
              <p className="cabinet-profil__lead">
                Maître Ingrid Oliver-D'Ollonne prête serment en janvier 2009, devant le Barreau de Grasse. Depuis lors, elle exerce dans un cabinet à taille humaine qu'elle a délibérément maintenu à taille humaine — non par défaut, mais par choix.
              </p>
              <p>
                Ce choix n'est pas anecdotique. Il traduit une conviction : la défense des intérêts d'une personne demande du temps, de l'attention et une relation directe, sans intermédiaire. Vous parlez à votre avocate. Pas à un collaborateur anonyme.
              </p>
              <p>
                Installée au 369 avenue de Cannes, Résidence Les Cyclamens, à Mandelieu-la-Napoule, le cabinet est au cœur d'un bassin de vie dense — entre Cannes, Grasse et l'arrière-pays varois — où les besoins juridiques des particuliers et des petites entreprises sont réels, quotidiens, et méritent une réponse à la hauteur.
              </p>
              <p>
                Son champ d'intervention couvre les contentieux familiaux, les droits des enfants, le droit du travail, le droit pénal, le droit civil, le droit commercial et le préjudice corporel. Elle est également médiatrice, une qualité qu'elle mobilise lorsque la voie amiable est envisageable et pertinente.
              </p>
              <p>
                Ce qui ne change pas, quel que soit le dossier : un engagement total, une stratégie claire, et la certitude que vos intérêts sont défendus avec la rigueur qu'ils méritent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section section--bg-low cabinet-valeurs" id="valeurs">
        <div className="container">
          <div className="cabinet-valeurs__header">
            <span className="section-label">Ce qui nous guide</span>
            <h2>Les valeurs du cabinet</h2>
            <p>Six principes qui fondent la manière d'exercer de Maître Oliver-D'Ollonne — dans le cabinet comme au prétoire.</p>
          </div>
          <div className="cabinet-valeurs__grid">
            {values.map((v, i) => (
              <div className="valeur-item" key={i}>
                <div className="valeur-item__icon">{v.icon}</div>
                <h3 className="valeur-item__title">{v.label}</h3>
                <p className="valeur-item__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="section cabinet-methode" id="methode-cabinet">
        <div className="container">
          <div className="cabinet-methode__grid">
            <div>
              <span className="section-label">La méthode</span>
              <h2>Comprendre, puis défendre</h2>
              <p>
                Il n'y a pas de stratégie sans écoute préalable. Avant de vous conseiller, Maître Oliver-D'Ollonne prend le temps de comprendre votre situation dans sa réalité concrète — les faits, les enjeux, les contraintes, mais aussi vos attentes et vos limites.
              </p>
              <p>
                Cette étape d'analyse n'est pas un préliminaire : elle est le fondement de toute défense efficace. Une procédure mal orientée dès le départ peut avoir des conséquences irréversibles.
              </p>
              <p>
                Une fois la situation comprise, la stratégie est définie avec vous — pas pour vous. Vous êtes informé des options, des risques et des perspectives. Vous décidez en connaissance de cause.
              </p>
            </div>
            <div>
              <div className="cabinet-methode__quote">
                <p className="cabinet-methode__quote-text">
                  "Mon rôle n'est pas seulement de gagner un dossier. C'est de vous permettre de prendre les meilleures décisions possibles dans une situation difficile."
                </p>
                <span className="cabinet-methode__quote-attr">Maître Ingrid Oliver-D'Ollonne</span>
              </div>
              <div className="cabinet-methode__mediation-note">
                <h3>La médiation comme option complémentaire</h3>
                <p>
                  Médiatrice agréée, Maître Oliver-D'Ollonne peut, dans certaines situations, proposer ou intervenir dans un processus de médiation. Cette approche — confidentielle, volontaire et structurée — permet parfois d'aboutir à un accord durable sans procédure judiciaire.
                </p>
                <Link to="/mediation" className="btn btn--secondary btn--sm" id="cabinet-mediation-link">
                  En savoir plus sur la médiation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Prendre rendez-vous avec Maître Oliver-D'Ollonne"
        subtitle="Un premier entretien pour évaluer votre situation et vous présenter les options envisageables. Confidentiel, sans engagement."
      />
    </>
  )
}
