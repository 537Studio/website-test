import React from 'react'
import { useTranslations } from 'next-intl'

export default function Introduce() {
  const t = useTranslations()
  return (
    <div className="flex h-5/6 w-full flex-col items-center justify-center">
      <div className="hidden items-center text-9xl font-semibold sm:flex ">
        <h1 className="text-shadow-4xl gradient-background-emerald shadow-emerald-800 ">
          {t('computerFirstWord')}
        </h1>
        <h1 className="text-shadow-4xl gradient-background-blue shadow-blue-800">
          {t('computerSecondWord')}
        </h1>
      </div>
      <div className=" flex flex-col items-center gap-10 sm:hidden ">
        <h1 className="text-8xl">{t('phoneFirstLine')}</h1>
        <h1 className="text-8xl">{t('phoneSecondLine')}</h1>
      </div>
    </div>
  )
}
