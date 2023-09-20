'use client'
import React from 'react'
import { Logo } from '../Logo'
import { Button } from '../Button'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <Button.Container>Enviar relato</Button.Container>
      </S.Container>
    </S.Header>
  )
}
