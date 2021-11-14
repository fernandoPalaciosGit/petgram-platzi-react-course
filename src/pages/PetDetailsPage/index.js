import React from 'react'
import { getPhotoCardById } from '@GraphQl/GraphQlPhotoCards/getPhotoCardById'
import { PhotoCardWithLikes } from '@Components/PhotoCard'
import { WrapperDetailsPage } from '@Pages/PetDetailsPage/styles'
import { HeaderTitle } from '@Components/HeaderTitle'

const PetDetailsPage = ({ petId }) => {
  const { loading, error, data } = getPhotoCardById(petId)
  const hasPhoto = data?.photo?.id
  if (loading) return <div>...loading photo</div>
  if (error) return <div>Error photo: {error}</div>

  return (
    <WrapperDetailsPage>
      <HeaderTitle title='user pet detail' description='All animal description and user details definition' />
      {hasPhoto && <PhotoCardWithLikes {...data.photo} />}
      {!hasPhoto && <div>Not able to load Photo with {petId} ID</div>}
    </WrapperDetailsPage>
  )
}

export default PetDetailsPage
