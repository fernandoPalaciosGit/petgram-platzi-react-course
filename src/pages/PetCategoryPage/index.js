import React, { memo } from 'react'
import { ListOfCategories } from '@Components/ListOfCategories'
import { ListOfPhotoCards } from '@Components/ListOfPhotoCards'
import { HeaderTitle } from '@Components/HeaderTitle'

const evaluateMemoize = (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
}

const PetCategoryPage = memo(({ categoryId }) => {
  return (
    <>
      <HeaderTitle
        title='user categories selection'
        description='All animal per categories'
      />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}, evaluateMemoize)

export default PetCategoryPage
