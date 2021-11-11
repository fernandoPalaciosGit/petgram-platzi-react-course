import styled from 'styled-components'
import { FadeIn } from '../design/animations/FadeIn'
import { Link } from '@reach/router'

export const ImageWrapper = styled(Link)`
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
  display: inline-flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;

  & svg {
    cursor: pointer;
    margin-right: 5px;
  }
`
export const CardWrapper = styled.article`
  min-height: 200px; // need for catch Intersection observer in viewport
  margin-bottom: 25px;
`
