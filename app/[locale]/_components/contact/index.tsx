import React from 'react'
import { useTranslations } from 'next-intl'

import { getContacts } from '@/configs/indexPage'

export default function Contact() {
  const t = useTranslations()
  const contacts = getContacts(t)

  return (
    <div className="m-10">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {t('FindUs')}
      </h3>
      <div className="mt-10 grid gap-10 sm:[grid:140px_/_auto_auto] md:[grid:160px_/_auto_auto_auto] lg:[grid:180px_/_auto_auto_auto_auto] xl:[grid:200px_/_auto_auto_auto_auto_auto]">
        {contacts.map((contact, index) => {
          return <div key={contact.toString() + index}>111</div>
        })}
      </div>
    </div>
  )
}
