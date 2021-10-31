import { useState, useEffect } from 'react'

export const useScrollVisible = (offsetNotVisible = 200) => {
  const [showInViewport, setSowInViewport] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hasToShow = window.scrollY > offsetNotVisible
      const toggleState = showInViewport !== hasToShow

      if (toggleState) {
        setSowInViewport(window.scrollY > offsetNotVisible)
      }
    }
    document.addEventListener('scroll', onScroll, false)

    return () => document.removeEventListener('scroll', onScroll, false)
  }, [showInViewport])

  return [showInViewport]
}
