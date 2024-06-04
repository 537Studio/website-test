import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

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
  console.log('run success1111')
  // const locale = 'zh_cn'
  const locale = params.locale
  // const messages = useMessages()
  const messages = await getMessages()
  console.log('run success2222', JSON.stringify(messages))

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="sb h-screen w-full">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
