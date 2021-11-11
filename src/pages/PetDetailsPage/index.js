import React from 'react'
import { getPhotoCardById } from '@GraphQl/GraphQlPhotoCards/getPhotoCardById'
import { PhotoCard } from '@Components/PhotoCard'
import { WrapperDetailsPage } from '@Pages/PetDetailsPage/styles'

export const PetDetailsPage = ({ petId }) => {
  const { loading, error, data } = getPhotoCardById(petId)
  const hasPhoto = data?.photo?.id
  if (loading) return <div>...loading photo</div>
  if (error) return <div>Error photo: {error}</div>

  return (
    <WrapperDetailsPage>
      {hasPhoto && <PhotoCard {...data.photo} />}
      {!hasPhoto && <div>Not able to load Photo with {petId} ID</div>}
    </WrapperDetailsPage>
  )
}
