'use client'
import React, { type DetailedHTMLProps, type ButtonHTMLAttributes } from 'react'
import type { ButtonVariant, ButtonSize } from './styles'
import { Container } from './styles'

interface IButtonContainerProps extends
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const ButtonContainer = ({
  variant,
  children,
  size,
  onClick
}: IButtonContainerProps) => {
  return (
    <Container
      size={size || 'medium'}
      variant={variant || 'filled'}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}
