import React, { useContext, useEffect } from 'react'
import { InputTextValue, VALIDATION_CONTROLS } from '@Components/FormControls/InputTextValue'
import { Container } from '@Components/styles_framework/Container'
import { Text } from '@Components/styles_framework/Text'
import { DisabledButton, PrimaryButton } from '@Components/styles_framework/Button'
import { useRegisterUser } from '@Hooks/useRegisterUser'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { isEmpty } from 'lodash'
import { useNavigate } from '@reach/router'
import { MdOutlineCached } from 'react-icons/md'
import { RequestErrors } from '@Components/RequestErrors'

const RegisterPage = () => {
  const emailControl = {}
  const passwordControl = {}
  const { registerUser, data, loading, error } = useRegisterUser()
  const { activateUser } = useContext(UserLoggedContext)
  const navigate = useNavigate()
  const submitRegisterUser = () => {
    event.preventDefault()
    // TODO: validate form
    registerUser(emailControl.getValue(), passwordControl.getValue())
  }

  useEffect(() => {
    if (!loading && isEmpty(error) && !isEmpty(data)) {
      activateUser()
      navigate('/favourites')
    }
  }, [data, loading, error])

  return (
    <Container modifiers={['fluidInline']}>
      <Text modifiers={['title']}>Register as new User</Text>

      <form onSubmit={submitRegisterUser}>
        <InputTextValue
          id='register-user-control'
          placeholder='Email or user id'
          validationRegex={VALIDATION_CONTROLS.user}
          disabled={loading}
          control={emailControl}
          type='text'
        />
        <InputTextValue
          type='password'
          id='register-pass-control'
          validationRegex={VALIDATION_CONTROLS.password}
          disabled={loading}
          control={passwordControl}
          placeholder='password'
          autoComplete='on'
        />
        <InputTextValue
          type='password'
          id='register-verification-pass-control'
          validationRegex={VALIDATION_CONTROLS.password}
          placeholder='retry same password'
          disabled={loading}
          autoComplete='off'
        />
        {loading
          ? <DisabledButton modifiers={['large']}><MdOutlineCached /></DisabledButton>
          : <PrimaryButton modifiers={['large']}>Register</PrimaryButton>}
      </form>
      {!isEmpty(error) && <RequestErrors error={error} />}
    </Container>
  )
}

export default RegisterPage
