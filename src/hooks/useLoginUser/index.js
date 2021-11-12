import { gql, useMutation } from '@apollo/client'

const LOGIN_USER = gql`
mutation login_user ($input: UserCredentials!) {
  login (input: $input)
}
`

const getPayload = ({ email, password }) => {
  return {
    variables: { input: { email, password } }
  }
}

export const useLoginUser = () => {
  const [login, { error, data, loading }] = useMutation(LOGIN_USER)
  const loginUser = (email, password) => login(getPayload({ email, password }))

  return { loginUser, error, data, loading }
}
