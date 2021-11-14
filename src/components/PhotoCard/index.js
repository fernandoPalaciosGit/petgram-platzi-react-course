import React, { useRef } from 'react'
import { CardWrapper, ImageWrapper, Likes } from './styles'
import { useViewportVisible } from '@Hooks/useViewportVisible'
import { updateUserLike } from '@GraphQl/GraphQlLikes/updateUserLike'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { PhotoCardPropTypes, PhotoCardWithLikesPropTypes } from '@Components/PhotoCard/propTypes'

export const PhotoCardWithLikes = (props) => {
  const { liked, likes, id } = props
  const { addLikes } = updateUserLike(id)
  const LikesIcon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <PhotoCard {...props}>
      <Likes>
        <LikesIcon
          size='32px'
          onClick={() => addLikes()}
        />
        <span>{likes} likes!</span>
      </Likes>
    </PhotoCard>
  )
}

PhotoCardWithLikes.propTypes = PhotoCardWithLikesPropTypes

export const PhotoCard = ({ id, src, children }) => {
  const card = useRef(null)
  const [showCard] = useViewportVisible(card, { root: '.ListOfPhotoCards' })

  return (
    <CardWrapper className='photo-card' ref={card}>
      {showCard &&
        <>
          <ImageWrapper
            to={`/pet-details/${id}`}
            src={src}
          />
          {children}
        </>}
    </CardWrapper>
  )
}

PhotoCard.propTypes = PhotoCardPropTypes
