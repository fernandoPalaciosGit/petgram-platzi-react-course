import React from 'react'
import { PhotoCardWithLikes } from '@Components/PhotoCard'
import { getPhotoCardsWithCategory } from '@GraphQl/GraphQlPhotoCards/getPhotoCardsWithCategory'
import { WrapperPhotoCards } from '@Components/ListOfPhotoCards/styles'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = getPhotoCardsWithCategory(categoryId)
  const hasPhotos = data?.photos && data.photos.length > 1

  if (loading) return <div>...loading photo cards</div>
  if (error) return <div>Error photo cards: {error}</div>

  return (
    <WrapperPhotoCards>
      {hasPhotos && data.photos.map((photo) => <PhotoCardWithLikes key={photo.id} {...photo} />)}
      {!hasPhotos && <div>Not able to load Photos with {categoryId} category</div>}
    </WrapperPhotoCards>
  )
}
