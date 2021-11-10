import { getPhotoCardById } from '@GraphQl/GraphQlPhotoCards/getPhotoCardById'
import React from 'react'
import { PhotoCard } from '@Components/PhotoCard'

export const PetDetails = ({ id }) => {
  const { loading, error, data } = getPhotoCardById(id)
  const hasPhoto = data?.photo?.id
  if (loading) return <div>...loading photo</div>
  if (error) return <div>Error photo: {error}</div>

  return (
    <>
      {hasPhoto && <PhotoCard {...data.photo} />}
      {!hasPhoto && <div>Not able to load Photo with {id} ID</div>}
    </>
  )
}
