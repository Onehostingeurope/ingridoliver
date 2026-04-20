import { Link } from 'react-router-dom'
import { Phone, Calendar } from 'lucide-react'
import './MobileBottomBar.css'

export default function MobileBottomBar() {
  return (
    <div className="mobile-bar hide-desktop" id="mobile-bottom-bar" role="navigation" aria-label="Actions rapides">
      <a href="tel:+33422460002" className="mobile-bar__btn mobile-bar__btn--call" id="mobile-call-btn">
        <Phone size={18} />
        <span>Appeler</span>
      </a>
      <Link to="/prendre-rendez-vous" className="mobile-bar__btn mobile-bar__btn--rdv" id="mobile-rdv-btn">
        <Calendar size={18} />
        <span>Rendez-vous</span>
      </Link>
    </div>
  )
}
