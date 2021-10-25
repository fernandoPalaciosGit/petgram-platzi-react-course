import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ redirectId = '', image = DEFAULT_IMAGE, emoji = '😁' }) => {
  return (
    <Anchor href={redirectId}>
      <Image src={image} alt='image category' aria-label='image category' />
      <span>{emoji}</span>
    </Anchor>
  )
}
