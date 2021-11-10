import React from 'react'
import { PhotoCard } from '@Components/PhotoCard'
import { getPhotoCardsWithCategory } from '@GraphQl/GraphQlPhotoCards/getPhotoCardsWithCategory'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = getPhotoCardsWithCategory(categoryId)
  const hasPhotos = data?.photos && data.photos.length > 1

  if (loading) return <div>...loading photo cards</div>
  if (error) return <div>Error photo cards: {error}</div>

  return (
    <div className='ListOfPhotoCards'>
      {hasPhotos && data.photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
      {!hasPhotos && <div>Not able to load Photos with {categoryId} category</div>}
    </div>
  )
}
