'use server'

import React from 'react'
import { getTranslations } from 'next-intl/server'

import Contact from '../_components/Contact'

export default async function page() {
  const t = await getTranslations()

  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {t('ticketDeveloping')}
      </h3>
      <div className="w-10/12">
        <Contact showText={false}></Contact>
      </div>
    </main>
  )
}
