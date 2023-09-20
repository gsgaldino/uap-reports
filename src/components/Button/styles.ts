'use client'
import styled, { RuleSet, css } from 'styled-components'

export type ButtonVariant = 'filled' | 'link'

type ButtonStyles = {
  [key: string]: RuleSet<object>
}

const buttonStyles: ButtonStyles = {
  filled: css`
    background-color: var(--primary-color);
    color: var(--absolute-black);
    font-weight: bold;
    border: none;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  `,
  link: css`
    color: var(--primary-color);
    /* background-color: blue; */
    background-color: var(--background-color);
    border: none;
  `
}

export const Container = styled.button<{ variant: ButtonVariant }>`
  border-radius: 4px;
  padding: var(--spacement-default);
  transition: opacity 0.4s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--absolute-white);
  }
  &:hover {
    cursor: pointer;
  }

  ${(props) => buttonStyles[props.variant]}
`

export const ButtonIconContainer = styled.div<{ variant: ButtonVariant }>`
  margin-left: var(--spacement-small);
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
`
