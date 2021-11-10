import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

export default function GraphQlProvider ({ children }) {
  const client = new ApolloClient({
    url: 'http://localhost:3500/graphql'
  })
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
