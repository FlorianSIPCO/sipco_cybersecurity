import { useLocation, useNavigate } from 'react-router-dom'

export default function useScrollToContact() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleScrollToContact = (e) => {
    e.preventDefault()

    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate('/#contact')
    }
  }

  return handleScrollToContact
}
