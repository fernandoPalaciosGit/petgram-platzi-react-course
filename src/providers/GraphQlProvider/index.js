import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import {
  getBearerAuthorization,
  removeTokenSession
} from '@Providers/UserLoggedProvider'

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
const manageInvalidToken = (error) => {
  const errorMessage = error?.response?.statusText || ''
  if (errorMessage.toLowerCase().includes('unauthorized')) {
    removeTokenSession()
    window.location.href = '/login'
  }
}

const cache = new InMemoryCache()
const httpLink = createHttpLink({
  uri: 'http://localhost:3500/graphql'
})
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
  manageInvalidToken(networkError)
})
const client = new ApolloClient({
  cache,
  link: httpAuthErrorLink.concat(httpAuthLink).concat(httpLink)
})

export default function GraphQlProvider ({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
