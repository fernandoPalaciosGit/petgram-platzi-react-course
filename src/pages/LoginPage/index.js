import React, { useContext } from 'react'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { InputTextValue, VALIDATION_CONTROLS } from '@Components/FormControls/InputTextValue'
import { Link } from '@reach/router'

const LoginPage = () => {
  const { activateUser } = useContext(UserLoggedContext)
  const submitLoginUser = () => {
    // validate form
    activateUser()
  }

  return (
    <>
      <div>Try to log in to access restricted Area</div>
      <form onSubmit={submitLoginUser}>
        <InputTextValue
          id='login-user-control'
          placeholder='Email or user id'
          validationRegex={VALIDATION_CONTROLS.user}
          type='text'
        />
        <InputTextValue
          type='password'
          id='login-pass-control'
          validationRegex={VALIDATION_CONTROLS.password}
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
