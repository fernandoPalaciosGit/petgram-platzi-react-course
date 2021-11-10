import { useQuery, gql } from '@apollo/client'

const QUERY = gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    liked
    userId
  }
}`

const QUERY_CATEGORY = gql`
 query get_photos ($categoryId: ID){
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

export const getPhotoCards = () => {
  return useQuery(QUERY)
}

export const getPhotoCardsWithCategory = (categoryId) => {
  return !categoryId
    ? { error: 'category ID not defined', loading: false }
    : useQuery(QUERY_CATEGORY, { variables: { categoryId } })
}
