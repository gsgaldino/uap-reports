import React from 'react'
import { Button } from '@/components'

import { ModalFooter } from './styles'

interface IModalFooterComponentProps {
  onCancel?: () => void
  onSubmit?: () => void
}

export const ModalFooterComponent = (props: IModalFooterComponentProps) => {
  return (
    <ModalFooter>
      <Button.Container
        variant="link"
        onClick={() => props.onCancel?.()}
      >
        Cancelar
      </Button.Container>
      <Button.Container onClick={() => props.onSubmit?.()}>
        Enviar
      </Button.Container>
    </ModalFooter>
  )
}
