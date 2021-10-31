import styled, { css } from 'styled-components'
import { FadeIn } from '@Components/design/animations/FadeIn'

export const fixedList = css`
  max-width: 400px;
  overflow: hidden;
  background: azure;
  border-radius: 60px;
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
  padding: 5px;
  top: -20px;
  transform: scale(0.5);
  z-index: 1;
  ${FadeIn()}
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  ${({ fixed }) => fixed && fixedList}
`

export const Item = styled.li`
  padding: 0 8px;
`
