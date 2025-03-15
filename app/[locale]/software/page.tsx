import React from 'react'
import { getTranslations } from 'next-intl/server'

export default async function page() {
  const t = await getTranslations()

  return (
    <main className="p-10">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t('softwareTitle')}
      </h2>
      <span className="block py-3 text-slate-400 dark:text-slate-600">
        {t('softwareIntroduce')}
      </span>
    </main>
  )
}
