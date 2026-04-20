import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import PageHero from '../components/shared/PageHero'
import './PrendreRendezVous.css'

interface FormData {
  prenom: string
  nom: string
  email: string
  telephone: string
  domaine: string
  message: string
  datePreferee?: string
}

const domaines = [
  'Droit de la famille',
  'Droit des enfants',
  'Droit du travail',
  'Droit pénal',
  'Droit civil',
  'Droit commercial',
  'Préjudice corporel',
  'Médiation',
  'Autre / Je ne sais pas encore',
]

export default function PrendreRendezVous() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@ingridoliver.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "Nouveau message depuis le site web - Ingrid Oliver Avocat",
          _language: "fr",
          Prénom: data.prenom,
          Nom: data.nom,
          Email: data.email,
          Téléphone: data.telephone,
          Domaine: data.domaine,
          Date_préférée: data.datePreferee || "Non précisée",
          Message: data.message
        })
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par email ou téléphone.");
    }
  }

  return (
    <>
      <SEOHead
        title="Prendre rendez-vous — Cabinet Ingrid Oliver — Mandelieu-la-Napoule"
        description="Prenez rendez-vous avec Maître Ingrid Oliver-D'Ollonne, avocate au Barreau de Grasse à Mandelieu-la-Napoule. Premier entretien confidentiel. Téléphone, email ou formulaire en ligne."
      />
      <PageHero
        eyebrow="Prendre rendez-vous"
        title="Un premier pas vers la clarté"
        subtitle="Décrivez brièvement votre situation. Le cabinet vous répondra dans les meilleurs délais pour organiser un entretien confidentiel."
      />

      <section className="section rdv-section" id="rdv-form-section">
        <div className="container">
          <div className="rdv-section__grid">
            {/* Form */}
            <div className="rdv-form-col">
              {submitted ? (
                <div className="rdv-success" id="rdv-success-state">
                  <div className="rdv-success__icon">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="rdv-success__title">Votre message a bien été envoyé</h2>
                  <p className="rdv-success__text">
                    Maître Ingrid Oliver-D'Ollonne ou son équipe vous recontactent en principe dans un délai de 24 à 48 heures ouvrables.
                  </p>
                  <p className="rdv-success__text">
                    Toute information que vous nous avez transmise reste <strong>strictement confidentielle</strong> et est couverte par le secret professionnel.
                  </p>
                </div>
              ) : (
                <>
                  <div className="rdv-form-header">
                    <h2>Formulaire de contact</h2>
                    <p className="rdv-confidential-note">
                      <CheckCircle size={14} />
                      Toute demande adressée au cabinet est confidentielle et couverte par le secret professionnel.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="rdv-form" noValidate id="rdv-form">
                    <div className="rdv-form__row">
                      <div className="field-group">
                        <label className="field-label" htmlFor="prenom">Prénom *</label>
                        <input
                          id="prenom"
                          type="text"
                          autoComplete="given-name"
                          className={`field-input ${errors.prenom ? 'field-input--error' : ''}`}
                          {...register('prenom', { required: 'Le prénom est requis' })}
                        />
                        {errors.prenom && <span className="field-error">{errors.prenom.message}</span>}
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="nom">Nom *</label>
                        <input
                          id="nom"
                          type="text"
                          autoComplete="family-name"
                          className={`field-input ${errors.nom ? 'field-input--error' : ''}`}
                          {...register('nom', { required: 'Le nom est requis' })}
                        />
                        {errors.nom && <span className="field-error">{errors.nom.message}</span>}
                      </div>
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="email">Adresse e-mail *</label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className={`field-input ${errors.email ? 'field-input--error' : ''}`}
                        {...register('email', {
                          required: 'L\'email est requis',
                          pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email invalide' }
                        })}
                      />
                      {errors.email && <span className="field-error">{errors.email.message}</span>}
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="telephone">Téléphone *</label>
                      <input
                        id="telephone"
                        type="tel"
                        autoComplete="tel"
                        className={`field-input ${errors.telephone ? 'field-input--error' : ''}`}
                        {...register('telephone', { required: 'Le téléphone est requis' })}
                      />
                      {errors.telephone && <span className="field-error">{errors.telephone.message}</span>}
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="domaine">Domaine concerné *</label>
                      <select
                        id="domaine"
                        className={`field-input field-select ${errors.domaine ? 'field-input--error' : ''}`}
                        {...register('domaine', { required: 'Veuillez sélectionner un domaine' })}
                      >
                        <option value="">— Choisir un domaine —</option>
                        {domaines.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                      {errors.domaine && <span className="field-error">{errors.domaine.message}</span>}
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="datePreferee">Date ou plage horaire souhaitée (optionnel)</label>
                      <input
                        id="datePreferee"
                        type="text"
                        placeholder="ex : semaine du 15 mai, de préférence le matin"
                        className="field-input"
                        {...register('datePreferee')}
                      />
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="message">Votre message *</label>
                      <textarea
                        id="message"
                        rows={5}
                        className={`field-input field-textarea ${errors.message ? 'field-input--error' : ''}`}
                        placeholder="Décrivez brièvement votre situation. Ces informations resteront strictement confidentielles."
                        {...register('message', {
                          required: 'Veuillez décrire votre situation',
                          minLength: { value: 20, message: 'Minimum 20 caractères' }
                        })}
                      />
                      {errors.message && <span className="field-error">{errors.message.message}</span>}
                    </div>

                    <p className="field-rgpd">
                      En soumettant ce formulaire, vous acceptez que vos données soient utilisées uniquement pour répondre à votre demande, dans le cadre du secret professionnel. Elles ne seront jamais transmises à des tiers.
                    </p>

                    <button
                      type="submit"
                      className="btn btn--primary rdv-form__submit"
                      disabled={isSubmitting}
                      id="rdv-submit-btn"
                    >
                      {isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Info column */}
            <div className="rdv-info-col">
              <div className="rdv-contact-card">
                <h3 className="rdv-contact-card__title">Contacter directement le cabinet</h3>
                <div className="rdv-contact-card__items">
                  <a href="tel:+33422460002" className="rdv-contact-item" id="rdv-phone-main">
                    <div className="rdv-contact-item__icon"><Phone size={18} /></div>
                    <div>
                      <span className="rdv-contact-item__label">Téléphone principal</span>
                      <span className="rdv-contact-item__value">+33 4 22 46 00 02</span>
                    </div>
                  </a>
                  <a href="tel:+33620530897" className="rdv-contact-item" id="rdv-phone-mobile">
                    <div className="rdv-contact-item__icon"><Phone size={18} /></div>
                    <div>
                      <span className="rdv-contact-item__label">Mobile</span>
                      <span className="rdv-contact-item__value">+33 6 20 53 08 97</span>
                    </div>
                  </a>
                  <a href="mailto:contact@ingridoliver.com" className="rdv-contact-item" id="rdv-email">
                    <div className="rdv-contact-item__icon"><Mail size={18} /></div>
                    <div>
                      <span className="rdv-contact-item__label">Email</span>
                      <span className="rdv-contact-item__value">contact@ingridoliver.com</span>
                    </div>
                  </a>
                  <div className="rdv-contact-item">
                    <div className="rdv-contact-item__icon"><MapPin size={18} /></div>
                    <div>
                      <span className="rdv-contact-item__label">Adresse</span>
                      <span className="rdv-contact-item__value">369 avenue de Cannes<br />Résidence Les Cyclamens<br />06210 Mandelieu-la-Napoule</span>
                    </div>
                  </div>
                  <div className="rdv-contact-item">
                    <div className="rdv-contact-item__icon"><Clock size={18} /></div>
                    <div>
                      <span className="rdv-contact-item__label">Horaires</span>
                      <span className="rdv-contact-item__value">Lun. – Ven. : 9h00 – 18h00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rdv-assurance-block">
                <h3>Ce que vous pouvez attendre</h3>
                <ul className="rdv-assurance-list">
                  <li><CheckCircle size={14} /> Réponse dans les 24 à 48h ouvrables</li>
                  <li><CheckCircle size={14} /> Premier entretien strictement confidentiel</li>
                  <li><CheckCircle size={14} /> Aucun engagement requis lors du premier contact</li>
                  <li><CheckCircle size={14} /> Accueil direct par Maître Oliver-D'Ollonne</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
