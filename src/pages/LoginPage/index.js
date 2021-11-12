import React, { useContext } from 'react'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { Container } from '@Components/styles_framework/Container'
import { Text } from '@Components/styles_framework/Text'
import { PrimaryButton, SecondaryButton } from '@Components/styles_framework/Button'
import { InputTextValue, VALIDATION_CONTROLS } from '@Components/FormControls/InputTextValue'
import { Link } from '@Components/Category/styles'

const LoginPage = () => {
  const { activateUser } = useContext(UserLoggedContext)
  const submitLoginUser = () => {
    // validate form
    activateUser()
  }

  return (
    <Container modifiers={['fluidInline']}>
      <Text modifiers={['title']}>Restricted Area</Text>
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
        <PrimaryButton modifiers={['large']}>Sign In</PrimaryButton>
      </form>
      <div>
        <Text modifiers={['subTitle']}>Do not have account?</Text>
        <Link to='/register'>
          <SecondaryButton modifiers={['small']}>
            Register!
          </SecondaryButton>
        </Link>
      </div>
    </Container>
  )
}

export default LoginPage
