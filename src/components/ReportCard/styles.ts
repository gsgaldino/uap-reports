import styled from 'styled-components'

export const Container = styled.div`
  width: 380px;
  position: relative;

  border-width: 0.2px;
  border-style: solid;
  border-color: var(--primary-color);
  padding: var(--spacement-default);
  /* background: linear-gradient(
    to right,
    #Affc41 25%,
    rgba(0, 5, 0, 0) 25%,
    rgba(0, 5, 0, 0) 25%,
    #Affc41 25%
  ); */
`

export const Content = styled.div`
  padding-block: var(--spacement-default);
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`
