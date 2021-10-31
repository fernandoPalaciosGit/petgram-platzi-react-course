import { useState, useEffect } from 'react'
import IsElement from 'lodash/isElement'
import IsObject from 'lodash/isObject'

export const useViewportVisible = (element, rootSelector) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const callback = ([{ isIntersecting }], observer) => {
      if (isIntersecting) {
        setShow(isIntersecting)
        observer.disconnect()
      }
    }
    const observer = new window.IntersectionObserver(callback, {
      root: document.querySelector(rootSelector)
    })

    if (IsObject(element) && IsElement(element.current)) {
      observer.observe(element.current)
    }
  }, [element])

  return [show]
}
