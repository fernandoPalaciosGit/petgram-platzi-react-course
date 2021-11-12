import React, { useRef, useState } from 'react'
import { InputControl } from '@Components/FormControls/InputTextValue/styles'

export const VALIDATION_CONTROLS = {
  user: '^([a-z0-9]{10,})$',
  password: '^([a-z0-9]{5,})$'
}

const useInputValue = (initValue, validationRegex) => {
  const [value, setValue] = useState(initValue)
  const [hasError, setHasError] = useState(false)
  const regEx = useRef(new RegExp(validationRegex))
  const onChange = ({ currentTarget }) => {
    setValue(currentTarget.value)
    setHasError(regEx.current.test(currentTarget.value))
  }

  return { value, onChange, hasError }
}

export const InputTextValue = ({ control = {}, id, initValue = '', validationRegex = '', disabled = false, ...rest }) => {
  const { value, onChange, hasError } = useInputValue(initValue, validationRegex)
  control.getValue = () => value

  return (
    <label htmlFor={id}>
      <InputControl disabled={disabled} data-error-validation={hasError} id={id} value={value} onChange={onChange} {...rest} />
      {hasError && <small>error</small>}
    </label>
  )
}
