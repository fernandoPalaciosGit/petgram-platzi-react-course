import { useState } from 'react'

export const useUserLogger = () => {
  const [isLogged] = useState(false)
  return [isLogged]
}
