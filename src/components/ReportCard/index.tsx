'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Typography } from '../Typography'
import { Button } from '../Button'
import * as S from './styles'

interface IReportCardProps {
  title: string
  content: string
  thumbnailUrl: string
  href: string
}

export const ReportCard = (props: IReportCardProps) => {
  const router = useRouter()

  const onClick = () => router.push(props.href)

  return (
    <S.Container onClick={onClick}>
      <Image
        style={{ width: '100%'}}
        src={props.thumbnailUrl}
        alt={props.title}
        width={200}
        height={200}
      />
      <S.Content>
        <Typography variant="body-default-strong">{props.title}</Typography>
        <Typography>{props.content}</Typography>
      </S.Content>
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
