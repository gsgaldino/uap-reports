import React, { type PropsWithChildren } from 'react'

import * as S from './styles'

type IModalContainerProps = PropsWithChildren<{
  isOpen?: boolean
}>

export const ModalContainer = (props: IModalContainerProps) => {
  return (
    <S.ModalContainer isOpen={props.isOpen || false}>
      {props.children}
    </S.ModalContainer>
  )
}
