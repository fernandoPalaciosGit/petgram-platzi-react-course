import React from 'react'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:3500/graphql'
})
const client = new ApolloClient({
  cache,
  link
})

export default function GraphQlProvider ({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
