import IsEmpty from 'lodash/isEmpty'
import { Text } from '@Components/styles_framework/Text'
import React from 'react'

export const RequestErrors = ({ error }) => {
  const errors = error?.networkError?.result?.errors || error?.graphQLErrors || []

  return !IsEmpty(errors) && errors.map(({ message }, index) => <Text key={index} modifiers={['error']}>{message}</Text>)
}
