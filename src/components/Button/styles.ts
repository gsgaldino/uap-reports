'use client'
import styled, { RuleSet, css } from 'styled-components'

export type ButtonVariant = 'filled' | 'link'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonStyleProps = {
  variant: ButtonVariant,
  size: ButtonSize
}

type ButtonStylesDictionary = {
  [key: string]: RuleSet<object>
}

const buttonStyles: ButtonStylesDictionary = {
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
    background-color: var(--background-color);
    border: none;
  `
}

const buttonSizes: ButtonStylesDictionary = {
  small: css`
    height: 32px;
    padding: var(--spacement-default);
  `,
  medium: css`
    height: 40px;
    padding: 12px 24px;
  `,
  large: css`
    height: 46px;
    padding: 12px 30px;
  `
}

export const Container = styled.button<ButtonStyleProps>`
  border-radius: 4px;
  transition: opacity 0.4s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: inherit;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--absolute-white);
  }

  &:hover {
    cursor: pointer;
  }

  ${(props) => buttonSizes[props.size]}
  ${(props) => buttonStyles[props.variant]}
`

export const ButtonIconContainer = styled.div<{ variant: ButtonVariant }>`
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
`
