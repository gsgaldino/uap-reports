'use client'
import React, { type PropsWithChildren } from 'react'
import * as S from './styles'

export const Layout = (props: PropsWithChildren) => {
  return <S.LayoutContainer>{props.children}</S.LayoutContainer>
}
