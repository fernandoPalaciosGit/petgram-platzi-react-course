import React, { memo } from 'react'
import { getPhotoCardById } from '@GraphQl/GraphQlPhotoCards/getPhotoCardById'
import { PhotoCardWithLikes } from '@Components/PhotoCard'
import { WrapperDetailsPage } from '@Pages/PetDetailsPage/styles'
import { HeaderTitle } from '@Components/HeaderTitle'

const evaluateMemoize = (prevProps, props) => {
  return prevProps.petId === props.petId
}

const PetDetailsPage = memo(({ petId }) => {
  const { loading, error, data } = getPhotoCardById(petId)
  const hasPhoto = data?.photo?.id
  if (loading) return <div>...loading photo</div>
  if (error) return <div>Error photo: {error}</div>

  return (
    <WrapperDetailsPage>
      <HeaderTitle
        title='user pet detail'
        description='All animal description and user details definition'
      />
      {hasPhoto && <PhotoCardWithLikes {...data.photo} />}
      {!hasPhoto && <div>Not able to load Photo with {petId} ID</div>}
    </WrapperDetailsPage>
  )
}, evaluateMemoize)

export default PetDetailsPage
