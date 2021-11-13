import React, { useContext } from 'react'
import { SecondaryButton } from '@Components/styles_framework/Button'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { Text } from '@Components/styles_framework/Text'

export const UserPage = () => {
  const { removeUser } = useContext(UserLoggedContext)

  return (
    <div>
      <Text modifier={['title']}>User area</Text>
      <SecondaryButton onClick={() => removeUser()}>Close Session</SecondaryButton>
    </div>
  )
}

export default UserPage
