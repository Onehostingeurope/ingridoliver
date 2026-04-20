import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import PageHero from '../components/shared/PageHero'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact — Cabinet Ingrid Oliver — Mandelieu-la-Napoule"
        description="Coordonnées du cabinet Ingrid Oliver-D'Ollonne, avocate à Mandelieu-la-Napoule. Téléphone, email, adresse, horaires. À proximité de Cannes et Grasse."
      />
      <PageHero
        eyebrow="Contact"
        title="Nous joindre"
        subtitle="Le cabinet est disponible du lundi au vendredi, de 9h00 à 18h00. Un premier échange est toujours confidentiel."
      />

      <section className="section contact-section" id="contact-details">
        <div className="container">
          <div className="contact-section__grid">
            {/* Contact cards */}
            <div className="contact-cards">
              <a href="tel:+33422460002" className="contact-card" id="contact-phone-main">
                <div className="contact-card__icon"><Phone size={22} /></div>
                <div>
                  <span className="contact-card__label">Téléphone principal</span>
                  <span className="contact-card__value">+33 4 22 46 00 02</span>
                  <span className="contact-card__note">Appeler pour un rendez-vous ou une urgence</span>
                </div>
              </a>
              <a href="tel:+33620530897" className="contact-card" id="contact-phone-mobile">
                <div className="contact-card__icon"><Phone size={22} /></div>
                <div>
                  <span className="contact-card__label">Mobile</span>
                  <span className="contact-card__value">+33 6 20 53 08 97</span>
                  <span className="contact-card__note">Pour les demandes urgentes</span>
                </div>
              </a>
              <a href="mailto:contact@ingridoliver.com" className="contact-card" id="contact-email">
                <div className="contact-card__icon"><Mail size={22} /></div>
                <div>
                  <span className="contact-card__label">Email</span>
                  <span className="contact-card__value">contact@ingridoliver.com</span>
                  <span className="contact-card__note">Réponse dans les 24–48h ouvrables</span>
                </div>
              </a>
              <div className="contact-card contact-card--address">
                <div className="contact-card__icon"><MapPin size={22} /></div>
                <div>
                  <span className="contact-card__label">Adresse du cabinet</span>
                  <span className="contact-card__value">369 avenue de Cannes<br />Résidence Les Cyclamens<br />06210 Mandelieu-la-Napoule</span>
                  <a
                    href="https://maps.google.com/?q=369+avenue+de+Cannes+06210+Mandelieu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card__map-link"
                    id="contact-map-link"
                  >
                    Voir sur Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon"><Clock size={22} /></div>
                <div>
                  <span className="contact-card__label">Horaires d'ouverture</span>
                  <span className="contact-card__value">Lundi – Vendredi</span>
                  <span className="contact-card__note">9h00 – 18h00</span>
                  <span className="contact-card__note contact-card__note--italic">Uniquement sur rendez-vous</span>
                </div>
              </div>
            </div>

            {/* Map + info */}
            <div className="contact-info-col">
              <div className="contact-map-container" id="contact-map">
                <iframe
                  title="Localisation du cabinet Ingrid Oliver"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.0!2d6.9363!3d43.5440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce8bb6f13a9ae9%3A0x40819a5fd979260!2s369+Avenue+de+Cannes%2C+06210+Mandelieu-la-Napoule%2C+France!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="contact-acces">
                <h3>Accès</h3>
                <p>
                  Le cabinet est situé dans la Résidence Les Cyclamens, au 369 avenue de Cannes, à Mandelieu-la-Napoule — à quelques minutes de Cannes par l'autoroute A8 (sortie Cannes-Mougins) ou par la route longeant la mer depuis Cannes.
                </p>
                <p>
                  Parking disponible à proximité. Accès facilité depuis Cannes, Grasse, Mougins et Antibes.
                </p>
              </div>
              <div className="contact-rdv-block">
                <h3>Prendre rendez-vous</h3>
                <p>Le cabinet reçoit uniquement sur rendez-vous, pour vous garantir le temps et l'attention que votre situation mérite.</p>
                <Link to="/prendre-rendez-vous" className="btn btn--primary" id="contact-rdv-btn">
                  Prendre rendez-vous en ligne
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
