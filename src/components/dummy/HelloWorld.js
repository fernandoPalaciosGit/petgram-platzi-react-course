import styled, { css } from 'styled-components'
import React, { useState } from 'react'

const Button = styled.button`
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

export const HelloWorld = () => {
  const [hello, setHello] = useState(false)

  return (
    <div>
      <Button onClick={() => setHello(!hello)} accent>Say Hello</Button>
      <Button onClick={() => setHello(!hello)}>Say Hello</Button>
      {hello && <div>Hello!!!</div>}
    </div>
  )
}
