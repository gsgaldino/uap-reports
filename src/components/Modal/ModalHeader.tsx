import React, {
  type PropsWithChildren,
  useEffect
} from 'react'
import Image from 'next/image'
import { Typography } from '../Typography'
import { Button } from '../Button'
import * as S from './styles'

type IModalHeaderProps = PropsWithChildren<{
  title: string
  onClose?: () => void
}>

export const ModalHeader = (props: IModalHeaderProps) => {
  useEffect(() => {
    const escKeyListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') props.onClose?.()
    }
    document.addEventListener('keydown', escKeyListener)

    return () => {
      document.removeEventListener('keydown', escKeyListener)
    }
  }, [props])

  return (
    <S.ModalHeader>
      <Typography variant="body-default">{props.title}</Typography>
      <Button.Container variant="link" size="small" onClick={props.onClose}>
        <Image
          src="close_icon.svg"
          alt="Close icon"
          width={20}
          height={20}
        />
      </Button.Container>
    </S.ModalHeader>
  )
}
