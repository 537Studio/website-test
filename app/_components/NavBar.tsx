'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu'
import React from 'react'
import { IoDocuments } from 'react-icons/io5'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import Logo from '../logo.png'

export default function NavBar() {
  const t = useTranslations()
  const { setTheme } = useTheme()
  return (
    <div className="sticky top-0 flex h-12 w-full items-center justify-between border-b-2 border-solid bg-background px-3">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={Logo.src} />
          <AvatarFallback>{t('title').charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="hidden font-extrabold text-sky-600 sm:inline">
          {t('title')}
        </span>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className="flex items-center gap-1">
                  <IoDocuments /> {t('document')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <button onClick={() => setTheme('dark')}>123</button>
      </div>
    </div>
  )
}
