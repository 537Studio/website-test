import React from 'react'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { getShowItems } from '@/configs/indexPage'
import translate from '@/util/traslate'

export const ProductsCards = async () => {
  const locale = await getLocale()
  const t = await getTranslations()
  const showItems = getShowItems(t)

  // if (showItems[1] === undefined) {
  return (
    <div className="productsCard flex h-2/3 items-center justify-between gap-10 p-10 sm:!h-2/3 xl:!h-5/6">
      {showItems.map((item, index) => {
        return (
          <div
            key={index + item.toString()}
            className={
              'relative h-full flex-1' +
              (index > 0 && index < 2 ? ' ' + 'hidden sm:block' : '') +
              (index > 1 ? ' ' + 'hidden md:block' : '')
            }
          >
            {/* The background with some cards */}
            <div className="absolute z-0 h-full w-full rounded-xl shadow-lg shadow-slate-400 dark:bg-slate-900 dark:shadow-none"></div>
            {/* The cards */}
            <div
              className={
                'cardsAnimation relative z-10 flex h-full w-full flex-col rounded-xl dark:bg-slate-900'
              }
            >
              <Image
                src={item.image}
                alt={t('title')}
                className="rounded-t-xl"
                priority={false}
              ></Image>
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="text-2xl font-bold">
                    {translate(locale, item.name)}
                  </div>
                  <div className="mt-1 font-medium">
                    {translate(locale, item.shortDescription)}
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
                          key={(translate(locale, platform) as string) + index}
                        >
                          {translate(locale, platform)}
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
  /*} else {
    return (
      <div className="flex h-1/6 items-center justify-center gap-2 p-10">
        <div>{t(showItems[1])}</div>
      </div>
    )
  }*/
}
