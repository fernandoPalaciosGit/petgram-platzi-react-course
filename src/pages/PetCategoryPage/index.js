import React from 'react'
import { ListOfCategories } from '@Components/ListOfCategories'
import { ListOfPhotoCards } from '@Components/ListOfPhotoCards'
import { HeaderTitle } from '@Components/HeaderTitle'

const PetCategoryPage = ({ categoryId }) => {
  return (
    <>
      <HeaderTitle title='user categories selection' description='All animal per categories' />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

export default PetCategoryPage
