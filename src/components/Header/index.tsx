'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { useModal } from '@/context/ModalContext'

import * as S from './styles'

export const Header = () => {
  const { isOpen, close, toggle } = useModal()

  return (
    <S.Header>
      <S.Container>
        <Link href="/">
          <Logo />
        </Link>
        <Button.Container onClick={toggle}>Enviar relato</Button.Container>
      </S.Container>
    </S.Header>
  )
}
