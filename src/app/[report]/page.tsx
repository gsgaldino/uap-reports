'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import {
  Typography,
  Header,
  Footer,
  Button,
  Layout,
  Modal,
  Input,
  FileSelector,
  TextArea
} from '@/components'
import { FetchHttpClientAdapter } from '@/infra/adapters'
import { ReportsHttpGateway } from '@/gateways'
import { useModal } from '@/context/ModalContext'
import { IReport } from '@/types'
import * as S from './page.styles'

const httpClient = new FetchHttpClientAdapter()
const reportsGateway = new ReportsHttpGateway(httpClient)

export default function Report() {
  const { isOpen, close } = useModal()
  const [reportState, setReportState] = useState<IReport | null>(null)
  const { report } = useParams()
  const router = useRouter()

  useEffect(() => {
    if(!report) router.replace('/')
  }, [report, router])

  useEffect(() => {
    const fetchReport = async () => {
      const reportData = await reportsGateway.findOneById(report as string)
      setReportState(reportData)
    }
    fetchReport()
  }, [report])

  return (
    <Layout>
      <Header />
      <S.Content>
        <Typography variant="h5-heavy">{reportState?.title}</Typography>
        <Image
          src={reportState?.medias[0] as string}
          alt="alt"
          width={400}
          height={400}
          />
        <Typography>{reportState?.content}</Typography>
      </S.Content>
      <Button.Container variant="link" onClick={() => router.back()}>
        <Button.Icon
          icon={
            <Image
              src="chevron_left.svg"
              alt="Chevron Left"
              width={12}
              height={12}
            />}
        />
        Voltar
      </Button.Container>
      <Footer />

      <Modal.Container isOpen={isOpen}>
        <Modal.Header onClose={close} title="Escreva seu relato" />
        <Modal.Content>
          <Input placeholder="Título" />
          <TextArea placeholder="Escreva seu relato" />
          <FileSelector />
        </Modal.Content>
        <Modal.Footer />
      </Modal.Container>
    </Layout>
  )
}
