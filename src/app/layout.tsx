import type { Metadata } from 'next'
import './globals.css'
import FooterPage from './Footer/page'
import HeaderPage from './Header/page'

export const metadata: Metadata = {
  title: 'My Blog',
  description: '개인 블로그입니다.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <HeaderPage />
        <main className="flex-1">
          {children}
        </main>
        <FooterPage />
      </body>
    </html>
  )
}