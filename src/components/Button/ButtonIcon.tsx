'use client'
import React from 'react'
import { ButtonIconContainer, ButtonVariant } from './styles'

interface IButtonIconProps {
  icon: React.ReactNode
  variant?: ButtonVariant
}

export const ButtonIcon = (props: IButtonIconProps) => {
  return (
    <ButtonIconContainer variant={props.variant || 'filled'}>
      {props.icon}
    </ButtonIconContainer>
  )
}
