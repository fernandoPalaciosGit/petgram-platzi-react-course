import React, { useRef } from 'react'
import { CardWrapper, ImageWrapper, Likes } from './styles'
import { useViewportVisible } from '@Hooks/useViewportVisible'
import { updateUserLike } from '@GraphQl/GraphQlLikes/updateUserLike'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

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

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, children }) => {
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
