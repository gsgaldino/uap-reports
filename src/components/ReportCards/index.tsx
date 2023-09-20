import React from 'react'
import { ReportCard } from '../ReportCard'
import * as S from './styles'

interface IReportCard {
  title: string
  description: string
  href: string
  thumbnailUrl: string
}

export const ReportCards = () => {
  const reportCardsData: IReportCard[] = [
    {
      title: 'Quatro enigmas sobre a aparição de OVNIs nos Estados Unidos ',
      description: 'Entre os três vídeos divulgados pelo Pentágono na segunda-feira 27, com objetos voadores não identificados, o mais antigo, de 2004 (foto) — os outros são de 2015....',
      href: 'report-1',
      thumbnailUrl: 'https://zjkxlcyrnewqeabpnqqa.supabase.co/storage/v1/object/public/uap-reports-bucket/3a5b1b418ed2c5a3f60e8e662b19d6c7.png?t=2023-09-18T15%3A53%3A27.223Z'
    },
    {
      title: 'Quatro enigmas sobre a aparição de OVNIs nos Estados Unidos ',
      description: 'Entre os três vídeos divulgados pelo Pentágono na segunda-feira 27, com objetos voadores não identificados, o mais antigo, de 2004 (foto) — os outros são de 2015....',
      href: 'report-1',
      thumbnailUrl: 'https://zjkxlcyrnewqeabpnqqa.supabase.co/storage/v1/object/public/uap-reports-bucket/88667da99c0e30b13abc68767c3817ca.png?t=2023-09-18T15%3A47%3A55.053Z'
    },
    {
      title: 'Quatro enigmas sobre a aparição de OVNIs nos Estados Unidos ',
      description: 'Entre os três vídeos divulgados pelo Pentágono na segunda-feira 27, com objetos voadores não identificados, o mais antigo, de 2004 (foto) — os outros são de 2015....',
      href: 'report-1',
      thumbnailUrl: 'https://zjkxlcyrnewqeabpnqqa.supabase.co/storage/v1/object/public/uap-reports-bucket/88667da99c0e30b13abc68767c3817ca.png?t=2023-09-18T15%3A47%3A55.053Z'
    }
  ]

  return (
    <S.Container>
      {reportCardsData.map((reportCard) => (
        <ReportCard key={reportCard.thumbnailUrl} {...reportCard} />
      ))}
    </S.Container>
  )
}
