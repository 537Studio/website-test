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
      <div className="mt-10 grid gap-3 [grid:150px_150px_150px_/_50%_50%] sm:gap-10 sm:[grid:240px_240px_240px_/_auto_auto] md:[grid:220px_220px_/_auto_auto_auto] lg:[grid:200px_200px_/_auto_auto_auto_auto] xl:[grid:200px_/_auto_auto_auto_auto_auto]">
        {contacts.map((contact, index) => {
          const icon = React.cloneElement(contact.icon, {
            className: '',
            size: 40,
          })
          return (
            <div
              key={contact.toString() + index}
              className="flex flex-col items-center justify-center gap-8 rounded-lg p-5 shadow-lg shadow-slate-400 dark:bg-slate-900 dark:shadow-none sm:py-10"
            >
              {icon}
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {contact.name}
              </h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}
