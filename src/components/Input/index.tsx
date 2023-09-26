import React, {
  type DetailedHTMLProps,
  type InputHTMLAttributes
} from 'react'
import * as S from './styles'

interface IInputProps extends
  DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = (props: IInputProps) => {
  return (
    <S.Input placeholder={props.placeholder} />
  )
}
