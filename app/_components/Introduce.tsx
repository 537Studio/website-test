import React from 'react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export default function Introduce() {
  const t = useTranslations()
  return (
    <div className="flex h-5/6 w-full flex-col items-center justify-center gap-8 px-20">
      <div className="hidden items-center text-[100px] font-semibold sm:flex ">
        {/* <h1 className="text-shadow-4xl gradient-background-emerald shadow-emerald-800 ">
          {t('computerFirstWord')}
        </h1> */}
        {/* <h1 className="text-shadow-4xl gradient-background-first shadow-yellow-800 "> */}
        <h1 className="text-shadow-3.5xl gradient-background-first dark:text-white dark:shadow-yellow-600">
          {t('computerFirstWord')}
        </h1>
        {/* <h1 className="text-shadow-4xl gradient-background-blue shadow-blue-800">
          {t('computerSecondWord')}
        </h1> */}
        {/* <h1 className="text-shadow-4xl ml-3 gradient-background-last shadow-sky-800"> */}
        <h1 className="text-shadow-3.5xl gradient-background-last ml-3 dark:text-white dark:shadow-sky-700">
          {t('computerSecondWord')}
        </h1>
      </div>
      <div className=" flex flex-col items-center gap-10 sm:hidden ">
        <h1 className="text-8xl">{t('phoneFirstLine')}</h1>
        <h1 className="text-8xl">{t('phoneSecondLine')}</h1>
      </div>
      <div className="gradient-background-oscar text-center text-2xl font-medium">
        {t('short-description')}
      </div>
      <Button>GET STARTED</Button>Meet the new standard for modern software
      development. Streamline issues, sprints, and product roadmaps.
    </div>
  )
}
