import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { showItem } from '@/configs/indexPage'

export const Introduce = () => {
  const t = useTranslations()
  return (
    <div className="flex h-2/3 items-center justify-between gap-10  p-10">
      {showItem.map((item, index) => {
        if (index > 2) {
          return null
        }
        return (
          <div
            className={
              'flex h-full flex-1 flex-col rounded-xl shadow-md dark:bg-slate-900' +
              (index > 0 ? ' hidden sm:flex' : '')
            }
            key={index + item.toString()}
          >
            <Image
              src={item.image}
              alt={t('title')}
              className="rounded-t-xl"
            ></Image>
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <div className="text-2xl font-bold">{item.name}</div>
                <div className="mt-1 font-medium">{item.shortDescription}</div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="text-lg">{item.version.toLowerCase()}</span>
                  <span className="ml-2 text-xs text-slate-500">
                    {item.size.toUpperCase()}
                  </span>
                </div>
                <div>
                  {item.platform.map((platform, index) => {
                    return (
                      <span
                        className="ml-1 text-xs text-slate-500"
                        key={platform + index}
                      >
                        {platform}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
