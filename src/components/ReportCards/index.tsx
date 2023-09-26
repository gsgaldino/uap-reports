import React from 'react'
import { ReportCard } from '../ReportCard'
import { IReport } from '@/types'
import * as S from './styles'

export const ReportCards = (props: { reports: IReport[] }) => {
  return (
    <S.Container>
      {props.reports.map((reportCard) => (
        <ReportCard
          key={reportCard.id}
          content={reportCard.content}
          thumbnailUrl={reportCard.medias[0]}
          title={reportCard.title}
          href={reportCard.id}
        />
      ))}
    </S.Container>
  )
}
