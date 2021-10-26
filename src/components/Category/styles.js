import styled from 'styled-components'

const imageDim = '75px'

export const Anchor = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: ${imageDim};
`

export const Image = styled.img`
  width: ${imageDim};
  height: ${imageDim};
  border-radius: 100%;
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  overflow: hidden;
  object-fit: cover;
`
