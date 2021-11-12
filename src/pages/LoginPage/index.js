import React, { useContext, useEffect } from 'react'
import { Container } from '@Components/styles_framework/Container'
import { Text } from '@Components/styles_framework/Text'
import { DisabledButton, PrimaryButton, SecondaryButton } from '@Components/styles_framework/Button'
import { InputTextValue, VALIDATION_CONTROLS } from '@Components/FormControls/InputTextValue'
import { Link } from '@Components/Category/styles'
import { useLoginUser } from '@Hooks/useLoginUser'
import { isEmpty } from 'lodash'
import { RequestErrors } from '@Components/RequestErrors'
import { UserLoggedContext } from '@Providers/UserLoggedProvider'
import { useNavigate } from '@reach/router'
import { MdOutlineCached } from 'react-icons/md'

const LoginPage = () => {
  const emailControl = {}
  const passwordControl = {}
  const { loginUser, data, loading, error } = useLoginUser()
  const { activateUser } = useContext(UserLoggedContext)
  const navigate = useNavigate()
  const submitLoginUser = () => {
    event.preventDefault()
    // TODO: validate form
    loginUser(emailControl.getValue(), passwordControl.getValue())
  }

  useEffect(() => {
    if (!loading && isEmpty(error) && !isEmpty(data)) {
      activateUser()
      navigate('/favourites')
    }
  }, [data, loading, error])

  return (
    <Container modifiers={['fluidInline']}>
      <Text modifiers={['title']}>Restricted Area</Text>
      <form onSubmit={submitLoginUser}>
        <InputTextValue
          id='login-user-control'
          placeholder='Email or user id'
          control={emailControl}
          disabled={loading}
          validationRegex={VALIDATION_CONTROLS.user}
          type='text'
        />
        <InputTextValue
          type='password'
          id='login-pass-control'
          validationRegex={VALIDATION_CONTROLS.password}
          control={passwordControl}
          disabled={loading}
          placeholder='Email or user id'
          autoComplete='on'
        />
        {loading
          ? <DisabledButton modifiers={['large']}><MdOutlineCached /></DisabledButton>
          : <PrimaryButton modifiers={['large']}>Sign In</PrimaryButton>}
      </form>
      {!isEmpty(error) && <RequestErrors error={error} />}

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
