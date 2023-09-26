import styled from 'styled-components'

export const Container = styled.div`
  width: 380px;
  position: relative;
  padding: var(--spacement-default);
  border-width: 1px;
  border-style: solid;
  border-image:
    linear-gradient(
      to right,
      #000500,
      #Affc41,
      #Affc41,
      #000500
    ) 1% 20% 30% 100%;
  border-image-slice: 1;
  transition: box-shadow 0.4s ease, border 0.4s ease;
  cursor: pointer;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 2px;
  }

  &:hover {
    box-shadow: 0px 6px 40px 2px rgba(175, 252, 65, .1);
  }
`

export const Content = styled.div`
  padding: var(--spacement-default);
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`
