import { gql, useMutation } from '@apollo/client'

const TOGGLE_USER_LIKES = gql`
mutation like_photo ($input: LikePhoto!) {
  likePhoto (input: $input) {
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
  const [addLikes] = useMutation(TOGGLE_USER_LIKES, getPayload(id))
  return { addLikes }
}
