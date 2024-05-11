import React from 'react'
import { LuUser } from 'react-icons/lu'
import { MdOutlineSubdirectoryArrowLeft } from 'react-icons/md'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export default function Introduce() {
  const t = useTranslations()
  return (
    <div className="flex h-5/6 w-full flex-col items-center justify-center gap-8 px-20">
      <div className="hidden items-center text-[100px] font-semibold sm:flex ">
        {/* <h1 className="text-shadow-4xl gradient-background-first shadow-yellow-800 "> */}
        {/*the title on the computer*/}
        <h1 className="text-shadow-3.5xl gradient-background-first dark:text-white dark:shadow-yellow-600">
          {t('firstWord')}
        </h1>
        <h1 className="text-shadow-3.5xl gradient-background-last ml-3 dark:text-white dark:shadow-sky-700">
          {t('secondWord')}
        </h1>
      </div>
      <div className=" flex flex-col items-center text-8xl sm:hidden ">
        {/*the title on the phone*/}
        <h1 className="text-shadow-3.5xl gradient-background-first dark:text-white dark:shadow-yellow-600">
          {t('firstWord')}
        </h1>
        <h1 className="text-shadow-3.5xl gradient-background-last ml-3 dark:text-white dark:shadow-sky-700">
          {t('secondWord')}
        </h1>
      </div>
      <div className="gradient-background-oscar text-center text-2xl font-medium">
        {t('short-description')}
      </div>
      <div className="mt-3 flex items-center justify-center gap-5">
        <Button>
          {t('getStarted')}
          <MdOutlineSubdirectoryArrowLeft className="ml-1" />
        </Button>
        <Button variant={'outline'}>
          {t('joinUs')}
          <LuUser className="ml-1" />
        </Button>
        <Button variant={'outline'}>
          {t('document')}
          <LuUser className="ml-1" />
        </Button>
      </div>
    </div>
  )
}
