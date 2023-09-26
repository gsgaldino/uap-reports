import React from 'react'
import Image from 'next/image'
import * as S from './styles'

interface IFileMiniature {
  imageUrl: string | ArrayBuffer | null
  onClose: () => void
}

export const FileMiniature = (props: IFileMiniature) => {
  return (
    <S.Container>
      <S.CloseIcon onClick={props.onClose}>
        <Image src="close_icon.svg" alt="Close icon" width={10} height={10} />
      </S.CloseIcon>
      <S.Miniature src={props.imageUrl as string} />
    </S.Container>
  )
}
