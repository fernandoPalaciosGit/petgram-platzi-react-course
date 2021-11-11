import React, { useContext } from 'react'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { InputTextValue, VALIDATION_CONTROLS } from '@Components/FormControls/InputTextValue'
import { Container } from '@Components/styles_framework/Container'
import { Text } from '@Components/styles_framework/Text'
import { Link } from '@reach/router'
import { Button } from '@Components/styles_framework/Button'

const LoginPage = () => {
  const { activateUser } = useContext(UserLoggedContext)
  const submitLoginUser = () => {
    // validate form
    activateUser()
  }

  return (
    <Container variant='fluid'>
      <Text variant='subTitle'>Try to log in to access restricted Area</Text>
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
      <div>
        <span>Do not have account? </span>
        <Link to='/register'>
          <Button variannt='secondary'>Register!</Button>
        </Link>
      </div>
    </Container>
  )
}

export default LoginPage
