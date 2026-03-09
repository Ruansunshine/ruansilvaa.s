import type { Metadata, Viewport } from 'next'
import { BioRhyme, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const biorhyme = BioRhyme({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
  variable: "--font-biorhyme",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: 'Ruan Santos | Portfolio',
  description: 'Engenheiro de Computacao, Analista de Dados e Dev Full-Stack. Portfolio profissional com projetos, certificacoes e servicos.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${biorhyme.variable} ${jetbrainsMono.variable} font-sans antialiased grain`}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
