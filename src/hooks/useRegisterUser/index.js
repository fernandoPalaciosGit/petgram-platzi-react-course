import { gql, useMutation } from '@apollo/client'

const REGISTER_USER = gql`
mutation register_user ($input: UserCredentials!) {
  signup (input: $input)
}
`

const getPayload = ({ email, password }) => {
  return {
    variables: { input: { email, password } }
  }
}

export const useRegisterUser = () => {
  const [register, { error, data, loading }] = useMutation(REGISTER_USER)
  const registerUser = (email, password) => register(getPayload({ email, password }))

  return { registerUser, error, data, loading }
}
