import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const VARIANTS = {
  fluidInline: () => `
    display: inline-flex;
    flex-direction: column;
    text-align: center;
  `
}

export const Container = styled.div`
  padding: ${({ theme }) => theme.bodyPaddingX};
  ${applyStyleModifiers(VARIANTS)}
`
