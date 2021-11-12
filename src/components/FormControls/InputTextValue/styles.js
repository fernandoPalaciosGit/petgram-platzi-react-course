import styled from 'styled-components'

export const InputControl = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  width: 100%;
  
  &[data-error-validation="true"] {
    background-color: ${({ theme }) => theme.inputErrorValidate};
  }
`
