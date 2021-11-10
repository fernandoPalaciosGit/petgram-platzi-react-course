import React from 'react'
import { PhotoCard } from '@Components/PhotoCard'
import { getPhotoCards } from '@GraphQl/GraphQlPhotoCards'

export const ListOfPhotoCards = () => {
  const { loading, error, data } = getPhotoCards()

  return (
    <div className='ListOfPhotoCards'>
      {loading && <div>...loading Photo cards</div>}
      {!loading && error && <div>Error photo cards: {error}</div>}
      {!loading && !error && data.photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </div>
  )
}
