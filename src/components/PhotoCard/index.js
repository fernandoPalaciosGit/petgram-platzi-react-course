import React, { useRef } from 'react'
import { CardWrapper, ImageWrapper, Likes } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
import { useViewportVisible } from '@Hooks/useViewportVisible'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ categoryId, likes = 0, src = DEFAULT_IMAGE }) => {
  const card = useRef(null)
  const [showCard] = useViewportVisible(card, '.ListOfPhotoCards')

  return (
    <CardWrapper ref={card}>
      {showCard &&
        <>
          <ImageWrapper href={`details/${categoryId}`} src={src} />
          <Likes>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Likes>
        </>}
    </CardWrapper>
  )
}
