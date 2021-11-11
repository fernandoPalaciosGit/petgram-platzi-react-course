import React, { useContext } from 'react'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { InputTextValue } from '@Components/FormControls/InputTextValue'
import { Link } from '@reach/router'

const LoginPage = () => {
  const { activateUser } = useContext(UserLoggedContext)

  return (
    <>
      <div>Try to log in to access restricted Area</div>
      <form onSubmit={activateUser}>
        <InputTextValue
          id='login-user-control'
          placeholder='Email or user id'
          type='text'
        />
        <InputTextValue
          type='password'
          id='login-pass-control'
          placeholder='Email or user id'
          autoComplete='on'
        />
        <button type='submit'>Sign In</button>
      </form>
      <div>Do not have account? <Link to='/register'>Register!</Link></div>
    </>
  )
}

export default LoginPage
