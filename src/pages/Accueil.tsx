import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight, Scale, Users, Briefcase, Shield, FileText, Building2, Activity, Award, Clock, MapPin, ChevronRight } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import CTABlock from '../components/shared/CTABlock'
import FAQBlock from '../components/shared/FAQBlock'
import portraitImg from '../assets/portrait_avocat.png'
import cabinetImg from '../assets/cabinet_interior.png'
import './Accueil.css'

const expertises = [
  {
    icon: <Users size={22} />,
    title: 'Droit de la famille',
    desc: 'Séparation, divorce, résidence des enfants, autorité parentale, pension alimentaire. Une présence attentive dans les moments les plus délicats.',
    path: '/expertises/droit-de-la-famille',
    id: 'card-famille',
  },
  {
    icon: <Shield size={22} />,
    title: 'Droit des enfants',
    desc: 'Assistance de l\'enfant entendu par le juge, protection du mineur, défense devant le juge des enfants.',
    path: '/expertises/droit-des-enfants',
    id: 'card-enfants',
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Droit du travail',
    desc: 'Défense du salarié, accompagnement de l\'employeur. Contrat, rupture, procédures prud\'homales.',
    path: '/expertises/droit-du-travail',
    id: 'card-travail',
  },
  {
    icon: <Scale size={22} />,
    title: 'Droit pénal',
    desc: 'Défense des personnes poursuivies dès la garde à vue. Accompagnement et indemnisation des victimes.',
    path: '/expertises/droit-penal',
    id: 'card-penal',
  },
  {
    icon: <FileText size={22} />,
    title: 'Droit civil',
    desc: 'Litiges de voisinage, bail, copropriété, contrats, consommation. Des solutions concrètes pour les difficultés du quotidien.',
    path: '/expertises/droit-civil',
    id: 'card-civil',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Droit commercial',
    desc: 'Contrats commerciaux, impayés, litiges partenaires, accompagnement du chef d\'entreprise.',
    path: '/expertises/droit-commercial',
    id: 'card-commercial',
  },
  {
    icon: <Activity size={22} />,
    title: 'Préjudice corporel',
    desc: 'Évaluation et défense des droits des victimes de dommages corporels. Une expertise rigoureuse pour une juste indemnisation.',
    path: '/expertises/prejudice-corporel',
    id: 'card-prejudice',
  },
]

const methodeSteps = [
  { num: '01', title: 'Écouter', desc: 'Comprendre votre situation dans sa globalité, sans jugement et sans précipitation. Votre histoire mérite d\'être entendue.' },
  { num: '02', title: 'Analyser', desc: 'Examiner les faits, les textes applicables et les précédents pertinents avec rigueur et précision.' },
  { num: '03', title: 'Définir la stratégie', desc: 'Élaborer, avec vous, la meilleure approche — négociation, médiation ou procédure judiciaire — selon vos intérêts réels.' },
  { num: '04', title: 'Agir', desc: 'Intervenir avec fermeté et méthode. Défendre vos intérêts devant toutes les juridictions compétentes.' },
  { num: '05', title: 'Suivre et défendre', desc: 'Rester à vos côtés jusqu\'au terme de la procédure. Vous tenir informé à chaque étape, sans vous laisser dans l\'incertitude.' },
]

const whyItems = [
  { icon: <MapPin size={18} />, title: 'Proximité', desc: 'Implantée à Mandelieu-la-Napoule, à quelques minutes de Cannes et de Grasse. Accessible, disponible, ancrée dans le territoire.' },
  { icon: <Clock size={18} />, title: 'Disponibilité', desc: 'Un cabinet à taille humaine, qui vous répond en personne et vous accompagne sans intermédiaire.' },
  { icon: <FileText size={18} />, title: 'Clarté', desc: 'Expliquer le droit simplement, sans jargon inutile. Vous permettre de comprendre et de décider en connaissance de cause.' },
  { icon: <Scale size={18} />, title: 'Rigueur', desc: 'Une défense préparée avec exigence, fondée sur les textes, les faits et une vision précise de vos intérêts.' },
  { icon: <Shield size={18} />, title: 'Discrétion', desc: 'Toute confidence au cabinet est protégée par le secret professionnel. Absolument. Sans exception.' },
  { icon: <Award size={18} />, title: 'Confiance', desc: 'Une relation directe, franche et durable. Vous savez où vous en êtes. Vous n\'êtes jamais laissé sans réponse.' },
]

const localCities = [
  { name: 'Mandelieu-la-Napoule', note: 'Siège du cabinet' },
  { name: 'Cannes', note: 'Proximité immédiate' },
  { name: 'Grasse', note: 'Barreau d\'inscription' },
  { name: 'Antibes', note: 'Zone d\'intervention' },
  { name: 'Mougins', note: 'Zone d\'intervention' },
  { name: 'Alpes-Maritimes', note: 'Ensemble du département' },
]

const faqItems = [
  {
    question: 'Dans quels domaines d\'expertise intervenez-vous ?',
    answer: 'Le cabinet intervient en droit de la famille, droit des enfants, droit du travail, droit pénal, droit civil, droit commercial et préjudice corporel. Maître Oliver-D\'Ollonne est également médiatrice agréée.',
  },
  {
    question: 'Comment prendre rendez-vous avec le cabinet ?',
    answer: 'Vous pouvez prendre rendez-vous par téléphone au +33 4 22 46 00 02, par e-mail à contact@ingridoliver.com, ou via le formulaire en ligne de notre page « Prendre rendez-vous ». Le cabinet vous répond dans les meilleurs délais.',
  },
  {
    question: 'Le premier échange est-il confidentiel ?',
    answer: 'Oui, absolument. Tout échange avec un avocat est couvert par le secret professionnel. Ce que vous nous confiez ne peut être divulgué à quiconque, et ce dès le premier contact.',
  },
  {
    question: 'Le cabinet intervient-il en médiation ?',
    answer: 'Oui. Maître Ingrid Oliver-D\'Ollonne est médiatrice. La médiation peut permettre de résoudre certains différends de manière plus rapide, confidentielle et moins coûteuse qu\'une procédure judiciaire. Cette option est toujours envisagée lorsqu\'elle est adaptée à la situation.',
  },
  {
    question: 'Le cabinet reçoit-il sur rendez-vous uniquement ?',
    answer: 'Oui. Afin de vous garantir une attention complète, le cabinet fonctionne sur rendez-vous. Vous êtes reçu au 369 avenue de Cannes, Résidence Les Cyclamens, 06210 Mandelieu-la-Napoule, du lundi au vendredi de 9h00 à 18h00.',
  },
  {
    question: 'Intervenez-vous à Mandelieu, Cannes et Grasse ?',
    answer: 'Oui. Le cabinet est situé à Mandelieu-la-Napoule et intervient régulièrement devant les juridictions de Cannes, Grasse, et plus largement dans les Alpes-Maritimes.',
  },
  {
    question: 'Que se passe-t-il lors du premier rendez-vous ?',
    answer: 'Lors du premier rendez-vous, nous prenons le temps d\'écouter votre situation dans son intégralité. Aucune décision n\'est prise dans la précipitation. À l\'issue de cet entretien, vous comprendrez précisément votre situation juridique et les options envisageables.',
  },
]

export default function Accueil() {
  return (
    <>
      <SEOHead
        title="Maître Ingrid Oliver-D'Ollonne — Avocate à Mandelieu-la-Napoule"
        description="Cabinet d'avocat à Mandelieu-la-Napoule. Maître Ingrid Oliver-D'Ollonne, avocate au Barreau de Grasse depuis 2009. Droit de la famille, droit du travail, droit pénal, médiation. Mandelieu, Cannes, Grasse."
      />

      {/* ── HERO ── */}
      <section className="hero" id="hero" aria-label="Présentation du cabinet">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__bg-overlay" />
        </div>
        <div className="container hero__container">
          <div className="hero__content">
            <span className="section-label hero__eyebrow">Avocate au Barreau de Grasse</span>
            <h1 className="hero__title">
              Une défense rigoureuse,<br />
              <em>une écoute profondément humaine</em>
            </h1>
            <p className="hero__subtitle">
              Maître Ingrid Oliver-D'Ollonne accompagne particuliers, familles et entreprises
              avec précision et discrétion depuis 2009. Un cabinet à taille humaine,
              au cœur de la Côte d'Azur.
            </p>
            <div className="hero__actions">
              <Link to="/prendre-rendez-vous" className="btn btn--gold" id="hero-rdv-btn">
                Prendre rendez-vous
                <ArrowRight size={17} />
              </Link>
              <a href="tel:+33422460002" className="btn btn--ghost" id="hero-call-btn">
                <Phone size={17} />
                04 22 46 00 02
              </a>
              <a href="mailto:contact@ingridoliver.com" className="btn btn--ghost" id="hero-email-btn">
                <Mail size={17} />
                Nous écrire
              </a>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__portrait-frame">
              <img src={portraitImg} alt="Maître Ingrid Oliver-D'Ollonne, Avocate" className="hero__portrait" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="trust-strip" id="trust-strip" aria-label="Éléments de confiance">
        <div className="container">
          <div className="trust-strip__grid">
            {[
              { label: 'Barreau de Grasse', note: 'Inscription officielle' },
              { label: 'Prestation de serment 2009', note: 'Plus de 15 ans d\'exercice' },
              { label: 'Cabinet à taille humaine', note: 'Relation directe garantie' },
              { label: 'Médiatrice agréée', note: 'Alternative au judiciaire' },
              { label: 'Mandelieu-la-Napoule', note: 'Cannes · Grasse · Côte d\'Azur' },
              { label: 'Discrétion absolue', note: 'Secret professionnel' },
            ].map((item, i) => (
              <div className="trust-item" key={i}>
                <span className="trust-item__label">{item.label}</span>
                <span className="trust-item__note">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="section intro-section" id="presentation" aria-label="Présentation">
        <div className="container">
          <div className="intro-section__grid">
            <div className="intro-section__image-col" aria-hidden="true">
              <div className="intro-section__image-frame">
                <img src={cabinetImg} alt="Cabinet Ingrid Oliver — Mandelieu-la-Napoule" className="intro-section__image" />
              </div>
              <div className="intro-section__image-badge">
                <span>Cabinet fondé en 2009</span>
                <span>Mandelieu-la-Napoule</span>
              </div>
            </div>
            <div className="intro-section__text-col">
              <span className="section-label">Le Cabinet</span>
              <h2 className="intro-section__title">
                Vous n'êtes pas face à une structure impersonnelle.
              </h2>
              <p className="intro-section__lead">
                Maître Ingrid Oliver-D'Ollonne exerce en indépendance, par conviction. Ce choix n'est pas anodin : il garantit une attention entière à chaque dossier, une stratégie conçue pour votre situation, et une relation fondée sur la confiance.
              </p>
              <p>
                Inscrite au Barreau de Grasse depuis janvier 2009, elle accompagne particuliers, familles, salariés et chefs d'entreprise dans les moments où le droit intervient dans la vie — souvent avec une certaine urgence.
              </p>
              <p>
                Son approche : écouter d'abord, analyser avec rigueur, défendre avec fermeté. Sans promesse vaine. Avec clarté.
              </p>
              <div className="intro-section__actions">
                <Link to="/le-cabinet" className="btn btn--primary" id="intro-cabinet-btn">
                  Découvrir le cabinet
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISES GRID ── */}
      <section className="section section--bg-low expertises-section" id="domaines" aria-label="Domaines d'intervention">
        <div className="container">
          <div className="expertises-section__header">
            <span className="section-label">Domaines d'intervention</span>
            <h2 className="expertises-section__title">
              Un accompagnement juridique<br />dans chaque dimension de votre vie
            </h2>
            <p className="expertises-section__sub">
              Du droit de la famille au droit commercial, le cabinet intervient dans les domaines du droit qui touchent directement à vos intérêts et à votre quotidien.
            </p>
          </div>
          <div className="expertises-grid">
            {expertises.map((item) => (
              <Link to={item.path} className="expertise-card" key={item.path} id={item.id}>
                <div className="expertise-card__icon">{item.icon}</div>
                <h3 className="expertise-card__title">{item.title}</h3>
                <p className="expertise-card__desc">{item.desc}</p>
                <span className="expertise-card__link">
                  En savoir plus <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="expertises-section__footer">
            <Link to="/expertises" className="btn btn--primary" id="all-expertises-btn">
              Voir toutes les expertises
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE ── */}
      <section className="section methode-section" id="methode" aria-label="Notre méthode">
        <div className="container">
          <div className="methode-section__header">
            <span className="section-label">La méthode</span>
            <h2 className="methode-section__title">
              Un accompagnement en cinq temps
            </h2>
          </div>
          <div className="methode-steps">
            {methodeSteps.map((step) => (
              <div className="methode-step" key={step.num}>
                <span className="methode-step__num">{step.num}</span>
                <div className="methode-step__content">
                  <h3 className="methode-step__title">{step.title}</h3>
                  <p className="methode-step__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI ── */}
      <section className="section section--bg-low why-section" id="pourquoi" aria-label="Pourquoi choisir ce cabinet">
        <div className="container">
          <div className="why-section__header">
            <span className="section-label">Le choix d'un cabinet</span>
            <h2 className="why-section__title">
              Ce qui fait la différence
            </h2>
            <p className="why-section__sub">
              Au-delà des compétences juridiques, c'est une manière d'exercer. Une relation construite sur la transparence, l'engagement et la confiance.
            </p>
          </div>
          <div className="why-grid">
            {whyItems.map((item, i) => (
              <div className="why-item" key={i}>
                <div className="why-item__icon">{item.icon}</div>
                <h3 className="why-item__title">{item.title}</h3>
                <p className="why-item__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉDIATION PREVIEW ── */}
      <section className="section mediation-preview" id="mediation-preview" aria-label="La médiation">
        <div className="container">
          <div className="mediation-preview__inner">
            <div className="mediation-preview__content">
              <span className="section-label">Alternative au judiciaire</span>
              <h2 className="mediation-preview__title">La médiation :<br />résoudre sans affronter</h2>
              <p>
                La médiation est une démarche confidentielle et volontaire, animée par un tiers neutre et formé. Elle permet à des parties en désaccord de trouver, ensemble, une solution durable et acceptée — souvent plus rapidement et plus sereinement qu'une procédure judiciaire.
              </p>
              <p>
                Maître Ingrid Oliver-D'Ollonne est médiatrice. Elle peut intervenir en cette qualité dans certaines situations — notamment en droit de la famille ou en matière commerciale — lorsque cette approche est adaptée aux enjeux et à la volonté des parties.
              </p>
              <p className="mediation-preview__note">
                La médiation n'est pas toujours possible. Chaque situation est évaluée avec soin avant toute orientation.
              </p>
              <Link to="/mediation" className="btn btn--primary" id="mediation-preview-btn">
                En savoir plus sur la médiation
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mediation-preview__visual" aria-hidden="true">
              <div className="mediation-preview__quote">
                <blockquote>
                  "La médiation offre ce que le jugement ne peut donner : une solution que vous avez choisie."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANCRAGE LOCAL ── */}
      <section className="section section--bg-low local-section" id="zone-intervention" aria-label="Zone d'intervention">
        <div className="container">
          <div className="local-section__header">
            <span className="section-label">Implantation locale</span>
            <h2 className="local-section__title">
              Un cabinet sur la Côte d'Azur,<br />à votre portée
            </h2>
            <p className="local-section__sub">
              Situé au cœur de Mandelieu-la-Napoule, le cabinet intervient régulièrement à Cannes, Grasse et dans l'ensemble des Alpes-Maritimes. Proche de vous, pour une relation directe et de proximité.
            </p>
          </div>
          <div className="local-cities">
            {localCities.map((city) => (
              <div className="local-city" key={city.name}>
                <span className="local-city__name">{city.name}</span>
                <span className="local-city__note">{city.note}</span>
              </div>
            ))}
          </div>
          <div className="local-section__address">
            <MapPin size={16} />
            <span>369 avenue de Cannes, Résidence Les Cyclamens, 06210 Mandelieu-la-Napoule</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section" id="faq-home" aria-label="Questions fréquentes">
        <div className="container">
          <div className="faq-section__inner">
            <div className="faq-section__left">
              <span className="section-label">Questions fréquentes</span>
              <h2 className="faq-section__title">Ce que nos clients nous demandent</h2>
              <p>Une réponse claire à vos interrogations les plus courantes. Pour une question spécifique à votre situation, le cabinet reste accessible.</p>
              <Link to="/faq" className="btn btn--secondary" style={{ marginTop: 'var(--space-6)' }} id="faq-home-link">
                Toutes les questions
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="faq-section__right">
              <FAQBlock items={faqItems} title="" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABlock />
    </>
  )
}
