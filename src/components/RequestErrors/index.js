import { isEmpty } from 'lodash'
import { Text } from '@Components/styles_framework/Text'
import React from 'react'

export const RequestErrors = ({ error }) => {
  const errors = error?.networkError?.result?.errors || error?.graphQLErrors || []

  return !isEmpty(errors) && errors.map(({ message }, index) => <Text key={index} modifiers={['error']}>{message}</Text>)
}
