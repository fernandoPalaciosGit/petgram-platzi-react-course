import { useQuery, gql } from '@apollo/client'

const QUERY_ALL_PHOTOS = gql`
query get_all_photo_cards {
  photos {
    id
    categoryId
    src
    likes
    liked
    userId
  }
}`

export const getAllPhotoCards = () => {
  return useQuery(QUERY_ALL_PHOTOS)
}
