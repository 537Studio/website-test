import { NextIntlClientProvider, useMessages } from 'next-intl'
import type { Metadata } from 'next'

import './globals.css'

import { getTranslations } from 'next-intl/server'

import { ThemeProvider } from '@/components/theme-provider'

import NavBar from './_components/NavBar'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()
  return {
    title: t('title'),
    description: t('description'),
    icons: 'favicon.ico',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = process.env.LANGUAGE
  const messages = useMessages()

  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="sb h-screen w-full">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
