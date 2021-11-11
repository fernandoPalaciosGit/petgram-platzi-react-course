import React, { useContext } from 'react'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'

export const LoginPage = () => {
  const {activateUser} = useContext(UserLoggedContext)

  return (
    <div>
      <div>User not Logged</div>
      <form onSubmit={activateUser}>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
