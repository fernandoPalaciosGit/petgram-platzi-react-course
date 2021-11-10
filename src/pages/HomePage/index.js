import { ListOfCategories } from '@Components/ListOfCategories'
import { ListOfPhotoCards } from '@Components/ListOfPhotoCards'

export const HomePage = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      {categoryId && <ListOfPhotoCards categoryId={categoryId} />}
    </>
  )
}
