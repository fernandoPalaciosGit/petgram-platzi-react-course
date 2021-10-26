import styled from 'styled-components'
import { FadeIn } from '../design/animations/FadeIn'

export const ImageWrapper = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  display: block;
  width: 100%;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 0;
  padding-top: 66.64%;
  cursor: pointer;
  ${FadeIn({ time: '2.5s' })}
`

export const Likes = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  & svg {
    cursor: pointer;
    margin-right: 5px;
  }
`
export const CardWrapper = styled.article`
  padding: 0 10px;
  margin: 0 auto;
`
