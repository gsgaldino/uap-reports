import React from 'react'
import Link from 'next/link'
import { Logo } from '../Logo'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Footer>
      <Link href="/">
        <Logo />
      </Link>
    </S.Footer>
  )
}
