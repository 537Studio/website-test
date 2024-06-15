import React from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { getLinks } from '@/configs/navBar'

import Logo from '../logo.png'

const LightHandle = dynamic(() => import('./LightHandle'), { ssr: false })

export default function NavBar() {
  const t = useTranslations()
  const links = getLinks(t)
  return (
    <div className="fixed top-0 z-50 flex h-12 w-full items-center justify-between border-b-2 border-solid border-slate-100 bg-white px-3 dark:border-slate-900 dark:bg-black">
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
          <NavigationMenu className="hidden gap-2 sm:flex">
            <NavigationMenuList className="flex gap-3">
              {links.map((item, index) => {
                return (
                  <NavigationMenuItem key={'NavBarMenuLinkKeyIndex' + index}>
                    <Link href={item.link} legacyBehavior passHref>
                      <NavigationMenuLink className="flex items-center gap-1 text-slate-400 dark:text-slate-600">
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
      <div className="flex items-center">
        <LightHandle />
        <DropdownMenu>
          <DropdownMenuTrigger className="block sm:hidden" asChild>
            <Button
              variant="ghost"
              size="icon"
              className="flex h-8 w-8 items-center justify-center rounded-full"
            >
              <CiMenuFries className="h-5 w-5 stroke-[1.5px]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {links.map((item, index) => {
              return (
                <DropdownMenuItem key={'NavBarMenuLinkKeyIndex' + index}>
                  <Link href={item.link} legacyBehavior passHref>
                    <span className="text-[15px]">{item.name}</span>
                  </Link>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
