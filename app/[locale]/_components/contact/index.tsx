import React from 'react'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations()

  return (
    <div className="m-10">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {t('FindUs')}
      </h3>
    </div>
  )
}
