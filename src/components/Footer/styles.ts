import styled from 'styled-components'

export const Footer = styled.footer`
  display: grid;
  place-items: center;
  padding: var(--spacement-large);
  margin-top: calc(var(--spacement-large) * 3);

  border-width: 1px;
  border-style: solid;
  border-image:
    linear-gradient(
      to right,
      #000500,
      #Affc41,
      #Affc41,
      #000500
    ) 1 100%;
  border-image-slice: 1;
  border-bottom: 0;
  /** https://css-tricks.com/gradient-borders-in-css/ */
`
