'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    /** Colors */
    --primary-color: #Affc41;
    --absolute-white: #ffffff;
    --absolute-black: #000000;
    --background-color: #000500;

    /** Spacements */
    --spacement-default: 8px;
    --spacement-medium: 16px;
    --spacement-large: 24px;
    --spacement-xlarge: 32px;

    /** Max width */
    --max-width: 1260px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-color);
  }
`
