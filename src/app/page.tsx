'use client'
import { useEffect, useState } from 'react'
import {
  Button,
  Header,
  Layout,
  Typography,
  ReportCards,
  Footer,
  Modal,
  Input,
  TextArea,
  FileSelector,
} from '@/components'

import { FetchHttpClientAdapter } from '@/infra/adapters'
import { ReportsHttpGateway } from '@/gateways'
import { useModal } from '@/context/ModalContext'
import { IReport } from '@/types'
import * as S from './page.styles'

const httpClient = new FetchHttpClientAdapter()
const reportsGateway = new ReportsHttpGateway(httpClient)

export default function Home() {
  const { isOpen, close, toggle } = useModal()
  const [reportsState, setReportsState] = useState<IReport[]>([])

  useEffect(() => {
    const findAllReports = async () => {
      const reports = await reportsGateway.findAll()
      setReportsState(reports)
    }
    findAllReports()
  }, [])

  return (
    <Layout>
      <S.Background>
        <Header />
        <S.Container>
          <Typography variant="h4-normal">Relate seu avistamento de OVNIs e adentre um mundo de mistério e maravilhas além da nossa compreensão!</Typography>
          <Button.Container onClick={toggle}>Enviar relato</Button.Container>
        </S.Container>

        <ReportCards reports={reportsState} />
      </S.Background>
      <Footer />

      <Modal.Container isOpen={isOpen}>
        <Modal.Header onClose={close} title="Escreva seu relato" />
        <Modal.Content>
          <Input placeholder="Título" />
          <TextArea placeholder="Escreva seu relato" />
          <FileSelector />
        </Modal.Content>
        <Modal.Footer onCancel={close} />
      </Modal.Container>
    </Layout>
  )
}

// export const getStaticProps = () => {

// }
