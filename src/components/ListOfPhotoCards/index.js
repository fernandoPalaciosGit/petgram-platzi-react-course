import React from 'react'
import { PhotoCard } from '@Components/PhotoCard'
import { getPhotoCardsWithCategory } from '@GraphQl/GraphQlPhotoCards'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = getPhotoCardsWithCategory(categoryId)
  const hasPhotos = data?.photos && data.photos.length > 1

  return (
    <div className='ListOfPhotoCards'>
      {loading && <div>...loading Photo cards</div>}
      {!loading && error && <div>Error photo cards: {error}</div>}
      {!error && hasPhotos && data.photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
      {!error && !hasPhotos && <div>Not able to load Photos with {categoryId} category</div>}
    </div>
  )
}
