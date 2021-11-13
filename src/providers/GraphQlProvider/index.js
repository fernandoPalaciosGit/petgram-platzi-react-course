import React, { useContext } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'

const logErrors = (graphQLErrors, networkError) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
}

const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: 'http://localhost:3500/graphql'
})

const hasUserUnauthorized = (error) => {
  const errorMessage = error?.response?.statusText || ''
  return errorMessage.toLowerCase().includes('unauthorized')
}

export default function GraphQlProvider ({ children }) {
  const { removeUser, getBearerAuthorization } = useContext(UserLoggedContext)

  const httpAuthLink = setContext((graphQLRequest, context) => {
    const { headers } = context
    return {
      headers: {
        ...headers,
        authorization: getBearerAuthorization()
      }
    }
  })

  const httpAuthErrorLink = onError(({ graphQLErrors, networkError }) => {
    logErrors(graphQLErrors, networkError)
    if (hasUserUnauthorized(networkError)) removeUser()
  })

  const client = new ApolloClient({
    cache,
    link: httpAuthErrorLink.concat(httpAuthLink).concat(httpLink)
  })

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
