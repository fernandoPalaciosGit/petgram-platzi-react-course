import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const VARIANTS = {
  title: () => `
  font-size: 24px;
   font-weight: bold;
  `,
  subTitle: () => `
  font-size: 16px;
  font-weight: 500;
  `,
  error: () => `
    color: red;
  `
}

export const Text = styled.div`
  padding: 8px 0;
  ${applyStyleModifiers(VARIANTS)}
`
