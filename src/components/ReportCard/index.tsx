'use client'
import React from 'react'
import Image from 'next/image'
import { Typography } from '../Typography'
import { Button } from '../Button'
import * as S from './styles'

interface IReportCardProps {
  title: string
  description: string
  thumbnailUrl: string
  href: string
}

export const ReportCard = (props: IReportCardProps) => {
  return (
    <S.Container>
      <Image style={{ width: '100%'}} src={props.thumbnailUrl} alt={props.title} width={200} height={200} />
      <S.Content>
        <Typography variant="body-default-strong">{props.title}</Typography>
        <Typography>{props.description}</Typography>
      </S.Content>
      {/* <Typography>{props.href}</Typography> */}
      <S.Footer>

      <Button.Container variant="link">
        Ver mais
        <Button.Icon
          icon={
            <Image
              src="chevron_right.svg"
              alt="Chevron Right"
              width={12}
              height={12}
            />}
          />
        </Button.Container>
      </S.Footer>
    </S.Container>
  )
}
