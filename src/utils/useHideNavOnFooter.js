import { useEffect, useState } from 'react'

export default function useHideNavOnFooter(footerId = 'footer') {
  const [hideNav, setHideNav] = useState(false)

  useEffect(() => {
    const footer = document.getElementById(footerId)
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideNav(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.2
      }
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [footerId])

  return hideNav
}
