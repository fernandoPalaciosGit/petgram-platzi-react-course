import { gql, useMutation } from '@apollo/client'

const ADD_LIKES_FROM_ANONYMOUS_USER = gql`
mutation add_likes_from_anonymous_user ($input: LikePhoto!) {
  likeAnonymousPhoto (input: $input) {
    id,
    categoryId,
    src,
    likes,
    liked,
    userId
  }
}
`

const getPayload = (id) => ({ variables: { input: { id } } }
)

export const updateUserLike = (id) => {
  const [addLikes] = useMutation(ADD_LIKES_FROM_ANONYMOUS_USER, getPayload(id))
  return [addLikes]
}
