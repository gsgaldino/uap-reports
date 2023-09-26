import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid var(--absolute-white);
  background-color: var(--absolute-black);
  padding: var(--spacement-medium);
  font-family: inherit;
  caret-color: var(--primary-color);
  color: var(--absolute-white);

  &::placeholder {
    font-family: inherit;
    opacity: 1;
    color: var(--absolute-white);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--absolute-white);
  }
`
