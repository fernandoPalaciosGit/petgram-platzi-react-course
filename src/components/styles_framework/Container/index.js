import styled from 'styled-components'
import { variant } from 'styled-system'

const typeVariant = variant({
  type: 'position',
  variants: {
    fluid: {
      display: 'inline-flex',
      bg: 'primary'
    },
    static: {
      color: 'white',
      bg: 'secondary'
    }
  }
})

export const Container = styled.div`

`
