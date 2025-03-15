import React from 'react'
import { LuUser } from 'react-icons/lu'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export default function JoinUs() {
  const t = useTranslations()

  return (
    <div className="m-10 mt-5 flex items-center justify-between">
      <p className="text-shadow-3xl text-black shadow-yellow-600 dark:hidden">
        {t('joinUsDescription')}
      </p>
      <p className="gradient-background-first !hidden dark:!inline">
        {t('joinUsDescription')}
      </p>
      <Button
        variant={'outline'}
        className="shadow-2xl shadow-sky-700 dark:!hidden"
      >
        {t('joinUs')}
        <LuUser className="ml-1" />
      </Button>
      <Button
        variant={'outline'}
        className="gradinet-button !hidden dark:!inline-flex"
      >
        {t('joinUs')}
        <LuUser className="ml-1" />
      </Button>
    </div>
  )
}
