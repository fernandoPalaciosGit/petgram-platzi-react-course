import { css, keyframes } from 'styled-components'

const fadeInFrames = keyframes`
  from {
    filter: blur(3px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const FadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInFrames} ${type};
`
