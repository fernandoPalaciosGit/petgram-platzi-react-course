import { gql, useQuery } from '@apollo/client'

const QUERY_PHOTOS_BY_CATEGORY = gql`
 query get_photos_by_category ($categoryId: ID){
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    liked
    userId
  }
}
`

const getPayload = (categoryId) => ({ variables: { categoryId } })

export const getPhotoCardsWithCategory = (categoryId) => {
  return !categoryId
    ? { error: 'category ID not defined', loading: false }
    : useQuery(QUERY_PHOTOS_BY_CATEGORY, getPayload(categoryId))
}
