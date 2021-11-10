import React, { useRef } from 'react'
import { CardWrapper, ImageWrapper, Likes } from './styles'
import { useViewportVisible } from '@Hooks/useViewportVisible'
import { useLikeIconStatus } from '@Hooks/useLikeIconStatus'
import { updateUserLike } from '@GraphQl/GraphQlLikes/updateUserLike'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const card = useRef(null)
  const [showCard] = useViewportVisible(card, { root: '.ListOfPhotoCards' })
  const [LikesIcon, setLikesIcon, liked] = useLikeIconStatus(`ListOfPhotoCards.${id}`, false)
  const [addLikes] = updateUserLike(id)
  const updateLikes = () => {
    !liked && addLikes()
    setLikesIcon()
  }

  return (
    <CardWrapper ref={card}>
      {showCard &&
        <>
          <ImageWrapper to={`/pet-details/${id}`} src={src} />
          <Likes>
            <LikesIcon size='32px' onClick={updateLikes} />
            <span>{likes} likes!</span>
          </Likes>
        </>}
    </CardWrapper>
  )
}
