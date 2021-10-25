import styled, { css } from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #8bc34a;
  color: white;
  border: 2px solid white;
  ${({ accent }) => accent && css`
    background-color: #f44336;
  `}
`
