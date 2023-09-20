'use client'
import styled from 'styled-components'
import {
  Button,
  Header,
  Layout,
  Typography,
  ReportCards,
  Footer
} from '@/components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-large);
  align-items: center;
  justify-content: center;
  min-height: 400px;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
`

export default function Home() {
  return (
    <Layout>
      <Header />
      <Container>
        <Typography variant="h4-normal">Relate seu avistamento de OVNIs e adentre um mundo de mistério e maravilhas além da nossa compreensão!</Typography>
        <Button.Container>Enviar relato</Button.Container>
      </Container>

      <ReportCards />

      <Footer />
    </Layout>
  )
}
