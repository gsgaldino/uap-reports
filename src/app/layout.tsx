import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import StyledJsxRegistry from './registry'
import { GlobalStyles } from './globals'
import ModalContextProvider from '@/context/ModalContext'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const inter = Roboto({ weight: ['500', '700', '900'], subsets: ['cyrillic', 'greek'] })

export const metadata: Metadata = {
  title: 'UAP Reports',
  description: 'UAP Reports',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>UAP Reports</title>
      </head>
      <body className={inter.className}>
        <StyledJsxRegistry>
          <GlobalStyles />
          <ModalContextProvider>
            {children}
          </ModalContextProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
