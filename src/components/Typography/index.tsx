import React from 'react'
import { type TypographyVariant, Container } from './styles'

export interface ITypographyProps {
  variant?: TypographyVariant
  as?: string
  children: string
  color?: 'light' | 'dark'
}

export const Typography = (props: ITypographyProps) => {
  return (
    <Container color={props.color} variant={props.variant}>
      {props.children}
    </Container>
  )
}
