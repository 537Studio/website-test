import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { getLinks, getMembersFirst, getMembersSecond } from '@/configs/nav'

interface footerProps {
  marginTop?: number
}
function Footer({ marginTop }: footerProps) {
  const t = useTranslations()
  const links = getLinks(t)
  const membersFirst = getMembersFirst(t)
  const membersSecond = getMembersSecond(t)

  let realMarginTop = 28
  if (marginTop !== undefined) {
    realMarginTop = marginTop
  }
  const classNameDiv = 'mt-' + realMarginTop + ' '
  return (
    <div
      className={
        classNameDiv +
        'flex h-1/2 w-full flex-col p-14 shadow-2xl shadow-slate-500'
      }
    >
      {/* Title */}
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {t('title')}
        </h3>
        <span className="mt-3 block text-slate-400 dark:text-slate-600">
          {t('short-description')}
        </span>
      </div>

      {/* Main */}
      <div className="flex flex-1 items-center gap-10">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col !items-start gap-3">
            {links.map((item, index) => {
              return (
                <NavigationMenuItem
                  key={'NavBarMenuLinkKeyIndex' + index}
                  className="!ml-0 cursor-pointer"
                >
                  <Link href={item.link} legacyBehavior passHref>
                    <NavigationMenuLink className="flex text-slate-500">
                      <span className="text-[15px]">{item.name}</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col !items-start gap-3">
            {membersFirst.map((item, index) => {
              return (
                <NavigationMenuItem
                  key={'NavBarMenuLinkKeyIndex' + index}
                  className="!ml-0 cursor-pointer"
                >
                  <Link href={item.link} legacyBehavior passHref>
                    <NavigationMenuLink className="flex text-slate-500">
                      <span className="text-[15px]">{item.name}</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col !items-start gap-3">
            {membersSecond.map((item, index) => {
              return (
                <NavigationMenuItem
                  key={'NavBarMenuLinkKeyIndex' + index}
                  className="!ml-0 cursor-pointer"
                >
                  <Link href={item.link} legacyBehavior passHref>
                    <NavigationMenuLink className="flex text-slate-500">
                      <span className="text-[15px]">{item.name}</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default Footer
