import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
query get_user_favourites {
  favs {
    id,
    categoryId,
    src,
    likes,
    liked,
    userId
  }
}
`

export const useFavouritesUser = () => {
  return useQuery(QUERY, {
    fetchPolicy: 'network-only' // do not cache request in browser, only network requests
  })
}
