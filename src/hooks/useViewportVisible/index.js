import { useState, useEffect } from 'react'
import IsElement from 'lodash/isElement'

const updateShowOnVisibleRoot = (setShow, { root, element, rootMargin, threshold }) => {
  const callback = (entries, observer) => {
    const [{ isIntersecting }] = entries
    if (isIntersecting) {
      setShow(true)
      observer.disconnect()
    }
  }
  const observer = new window.IntersectionObserver(callback, {
    // todo: {root} --> not work,
    root: null,
    rootMargin: rootMargin || '0px',
    threshold: threshold || 0.1
  })

  if (IsElement(root)) {
    observer.observe(element)
  } else {
    console.info('Could not find element root for observer')
    setShow(true)
  }
}

export const useViewportVisible = (element, options = { root: null }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    updateShowOnVisibleRoot(setShow, {
      ...options,
      root: document.querySelector(options.root),
      element: element.current
    })
  }, [element])

  return [show]
}
