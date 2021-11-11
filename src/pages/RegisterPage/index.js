import React from 'react'
import { InputTextValue, VALIDATION_CONTROLS } from '@Components/FormControls/InputTextValue'
import { Container } from '@Components/styles_framework/Container'
import { Text } from '@Components/styles_framework/Text'
import { Button } from '@Components/styles_framework/Button'

const RegisterPage = () => {
  const submitRegisterUser = () => {
    // validate form
    // mutation signUp
    event.preventDefault()
  }

  return (
    <Container variant='fluid'>
      <Text variant='title'>Register as new User</Text>

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
        <Button variant='primary' type='submit'>Register</Button>
      </form>
    </Container>
  )
}

export default RegisterPage
