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

export const getPhotoCards = () => {
  return useQuery(QUERY)
}
