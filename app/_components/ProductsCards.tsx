import React from 'react'
import { useTranslations } from 'next-intl'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

import { showItems } from '@/configs/indexPage'

export const ProductsCards = () => {
  const t = useTranslations()
  return (
    <div className="flex h-2/3 items-center justify-between gap-10 p-10  xl:h-3/4">
      {showItems.map((item, index) => {
        if (index > 2) {
          return null
        }
        return (
          <div
            key={index + item.toString()}
            className={
              'relative h-full flex-1' +
              (index > 0 && index < 2 ? ' hidden sm:block' : '') +
              (index > 1 ? ' hidden md:block' : '')
            }
          >
            {/* The background with some cards */}
            <div className="absolute z-0 h-full w-full rounded-xl dark:bg-slate-900"></div>
            {/* The cards */}
            <div
              className={
                'cardsAnimation relative z-10 flex h-full w-full flex-col rounded-xl shadow-md dark:bg-slate-900'
              }
            >
              <Image
                src={item.image as StaticImport}
                alt={t('title')}
                className="rounded-t-xl"
              ></Image>
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="text-2xl font-bold">{item.name}</div>
                  <div className="mt-1 font-medium">
                    {item.shortDescription}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-lg">
                      {item.version.toLowerCase()}
                    </span>
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
          </div>
        )
      })}
    </div>
  )
}