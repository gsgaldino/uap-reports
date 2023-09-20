'use client'
import React from 'react'
import type { ButtonVariant } from './styles'
import { Container } from './styles'

interface IButtonContainerProps {
  children: React.ReactNode
  variant?: ButtonVariant
}

export const ButtonContainer = (props: IButtonContainerProps) => {
  return (
    <Container variant={props.variant || 'filled'}>
      {props.children}
    </Container>
  )
}
