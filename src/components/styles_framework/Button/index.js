import styled from 'styled-components'
import { variant } from 'styled-system'

const typeVariant = variant({
  type: 'type',
  variants: {
    primary: {
      color: 'white',
      bg: 'primary'
    },
    secondary: {
      color: 'white',
      bg: 'secondary'
    }
  }
})
export const Button = styled.button`
  ${typeVariant}
`
