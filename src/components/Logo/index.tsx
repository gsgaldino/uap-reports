'use client'
import React from 'react'
import Image from 'next/image'
import * as S from './styles'

export const Logo = () => {
  return (
    <S.Container>
      <Image src="uap-reports.svg" alt="UAP Reports logo" width={120} height={40} />
    </S.Container>
  )
}
