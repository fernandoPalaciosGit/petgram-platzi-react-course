import React, { useRef } from 'react'
import { CardWrapper, ImageWrapper, Likes } from './styles'
import { useViewportVisible } from '@Hooks/useViewportVisible'
import { useLikeIconStatus } from '@Hooks/useLikeIconStatus'
import { getPhotoCardById } from '@GraphQl/GraphQlPhotoCards'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const card = useRef(null)
  const [showCard] = useViewportVisible(card, { root: '.ListOfPhotoCards' })
  const [LikesIcon, setLikesIcon] = useLikeIconStatus(`ListOfPhotoCards.${id}`, false)

  return (
    <CardWrapper ref={card}>
      {showCard &&
        <>
          <ImageWrapper href={`/?photo-card=${id}`} src={src} />
          <Likes>
            <LikesIcon size='32px' onClick={setLikesIcon} />
            <span>{likes} likes!</span>
          </Likes>
        </>}
    </CardWrapper>
  )
}

export const PhotoCardId = ({ id }) => {
  const { loading, error, data } = getPhotoCardById(id)
  const hasPhoto = data?.photo?.id

  return (
    <div className='PhotoCardId'>
      {loading && <div>...loading Photo</div>}
      {!loading && error && <div>Error photo: {error}</div>}
      {!error && hasPhoto && <PhotoCard {...data.photo} />}
      {!error && !hasPhoto && <div>Not able to load Photo with {id} ID</div>}
    </div>
  )
}
