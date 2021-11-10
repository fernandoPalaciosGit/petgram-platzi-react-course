import { gql, useQuery } from '@apollo/client'

const QUERY_PHOTO_BY_ID = gql`
query get_photo_by_id ($id: ID!) {
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

export const getPhotoCardById = (id) => {
  return !id
    ? { error: 'Photo ID not defined', loading: false }
    : useQuery(QUERY_PHOTO_BY_ID, { variables: { id } })
}
