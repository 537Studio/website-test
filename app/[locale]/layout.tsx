import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

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

export default async function RootLayout({
  // export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // const locale = 'zh_cn'
  const locale = params.locale
  // const messages = useMessages()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="sb h-screen w-full">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* children */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <div className="h-full w-full pt-12 [box-sizing:border-box]">
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
