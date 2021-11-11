import React from 'react'
import { InputTextValue, VALIDATION_CONTROLS } from '@Components/FormControls/InputTextValue'

const RegisterPage = () => {
  const submitRegisterUser = () => {
    // validate form
    // mutation signUp
    event.preventDefault()
  }

  return (
    <div>
      <div>Register as new User</div>
      <form onSubmit={submitRegisterUser}>
        <InputTextValue
          id='register-user-control'
          placeholder='Email or user id'
          validationRegex={VALIDATION_CONTROLS.user}
          type='text'
        />
        <InputTextValue
          type='password'
          id='register-pass-control'
          validationRegex={VALIDATION_CONTROLS.password}
          placeholder='Email or user id'
          autoComplete='on'
        />
        <InputTextValue
          type='password'
          id='register-verification-pass-control'
          validationRegex={VALIDATION_CONTROLS.password}
          placeholder='retry same password'
          autoComplete='off'
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
