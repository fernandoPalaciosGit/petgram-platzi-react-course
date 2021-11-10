import { useQuery, gql } from '@apollo/client'

const QUERY_ALL_PHOTOS = gql`
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

const QUERY_PHOTOS_CATEGORY = gql`
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

const QUERY_PHOTO_ID = gql`
query get_photo ($id: ID!) {
  photo (id: $id) {
    id,
    categoryId,
    src,
    likes,
    liked,
    userId
  }
}
`

export const getPhotoCards = () => {
  return useQuery(QUERY_ALL_PHOTOS)
}

export const getPhotoCardsWithCategory = (categoryId) => {
  return !categoryId
    ? { error: 'category ID not defined', loading: false }
    : useQuery(QUERY_PHOTOS_CATEGORY, { variables: { categoryId } })
}

export const getPhotoCardById = (id) => {
  return useQuery(QUERY_PHOTO_ID, { variables: { id } })
}
