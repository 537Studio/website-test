'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

import { getContacts } from '@/configs/indexPage'

export default function Contact() {
  const t = useTranslations()
  const contacts = getContacts(t)

  return (
    <div className="relative m-10">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {t('FindUs')}
      </h3>
      {/*
        <div className="mt-10 grid gap-3 [grid:150px_150px_/_33.3%_33.3%_33.3%] sm:gap-10 sm:[grid:240px_240px_240px_/_auto_auto] md:[grid:220px_220px_/_auto_auto_auto] lg:[grid:200px_200px_/_auto_auto_auto_auto] xl:[grid:200px_/_auto_auto_auto_auto_auto]">
        */}
      <div className="sm:gap- mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {contacts.map((contact, index) => {
          const icon = React.cloneElement(contact.icon, {
            className: '',
            size: 40,
          })
          return (
            <div
              key={contact.toString() + index}
              className="flex cursor-pointer flex-col items-center justify-center gap-8 rounded-lg p-5 shadow-lg shadow-slate-400 duration-200 hover:bg-slate-50 hover:shadow-slate-600 dark:bg-slate-900 dark:shadow-none dark:hover:bg-slate-800 sm:py-10"
              onClick={() => window.open(contact.href, '_blank')}
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
