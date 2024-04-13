'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu'
import React from 'react'
import { CiCircleInfo } from 'react-icons/ci'
import { IoDocumentOutline } from 'react-icons/io5'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import Logo from '../logo.png'

export default function NavBar() {
  const t = useTranslations()
  const { setTheme } = useTheme()
  return (
    <div className="sticky top-0 flex h-12 w-full items-center justify-between border-b-2 border-solid border-slate-100 bg-background px-3 dark:border-slate-900">
      <div className="flex items-center gap-3">
        <Link href={'/'}>
          <div className="flex items-center gap-2">
            <Avatar className="h-7 w-7">
              <AvatarImage src={Logo.src} />
              <AvatarFallback>
                {t('title').charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-lg sm:inline">{t('title')}</span>
          </div>
        </Link>
        <div className="flex gap-2">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-3">
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center gap-1 text-slate-300 dark:text-slate-600 ">
                    <span className="text-[15px]">{t('document')}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center gap-1 text-slate-300 dark:text-slate-600 ">
                    <span className="text-[15px]">{t('about')}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="https://gitee.com/FTS-537Studio"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="flex items-center gap-1 text-slate-300 dark:text-slate-600 ">
                    <span className="text-[15px]">{t('gitee')}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="https://github.com/537Studio"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="flex items-center gap-1 text-slate-300 dark:text-slate-600 ">
                    <span className="text-[15px]">{t('github')}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}
