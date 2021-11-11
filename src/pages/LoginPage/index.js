import React, { useContext } from 'react'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'

const LoginPage = () => {
  const { activateUser } = useContext(UserLoggedContext)

  return (
    <div>
      <div>User not Logged</div>
      <form onSubmit={activateUser}>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginPage
