import React, { useState } from 'react'

const useInputValue = (initValue) => {
  const [value, setValue] = useState(initValue)

  return { value, onChange: ({ currentTarget }) => setValue(currentTarget.value) }
}

export const InputTextValue = ({ id, initValue = '', ...rest }) => {
  const control = useInputValue(initValue)

  return (
    <label htmlFor={id}>
      <input id={id} {...control} {...rest} />
    </label>
  )
}
