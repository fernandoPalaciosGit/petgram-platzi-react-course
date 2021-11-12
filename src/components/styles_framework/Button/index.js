import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const VARIANTS = {
  small: () => `
    padding: 8px;
    font-size: ${({ theme }) => theme.smallSIzeButton};
  `,
  large: () => `
    padding: 16px 14px;
    min-width: 300px;
    font-size: ${({ theme }) => theme.largeSIzeButton};
  `
}

const Button = styled.button`
  padding: 12px 24px;
  margin: 5px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  color: ${({ theme }) => theme.textColorButton};
  transition: background-color 0.2s linear, color 0.2s linear;
  ${applyStyleModifiers(VARIANTS)}
`

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.primaryHoverColor};
  
  :hover {
    background-color: ${({ theme }) => theme.primaryHoverColor};
  }
  ${applyStyleModifiers(VARIANTS)}
`

export const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.secondaryColor};
  border: none;
  
  :hover {
    background-color: ${({ theme }) => theme.secondaryHoverColor};
  }
  ${applyStyleModifiers(VARIANTS)}
`

export const DisabledButton = styled(Button)`
  background-color: ${({ theme }) => theme.disabledColorButton};
  border: none;
  ${applyStyleModifiers(VARIANTS)}
`
