import React, { useState } from 'react'
import { Button } from 'styles'

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
