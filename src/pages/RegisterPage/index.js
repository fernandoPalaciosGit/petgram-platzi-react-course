import React from 'react'
import { InputTextValue } from '@Components/FormControls/InputTextValue'

const RegisterPage = () => {
  return (
    <div>
      <div>Register as new User</div>
      <form onSubmit={() => event.preventDefault()}>
        <InputTextValue
          id='register-user-control'
          placeholder='Email or user id'
          type='text'
        />
        <InputTextValue
          type='password'
          id='register-pass-control'
          placeholder='Email or user id'
          autoComplete='on'
        />
        <InputTextValue
          type='password'
          id='register-verification-pass-control'
          placeholder='retry same password'
          autoComplete='off'
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
