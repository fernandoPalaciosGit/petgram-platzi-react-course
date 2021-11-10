import styled, { css } from 'styled-components'
import { FadeIn } from '@Components/design/animations/FadeIn'

export const fixedList = css`
  max-width: 400px;
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

export const scrollBar = css`
  overflow-x: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 5px;
    ${({ fixed }) => fixed && css`
      width: 100px;
    `}
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
`

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  ${({ fixed }) => fixed && fixedList}
  ${scrollBar}
`

export const Item = styled.li`
  padding: 0 8px;
`
