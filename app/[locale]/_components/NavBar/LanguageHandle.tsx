import React from 'react'
import { IoLanguage } from 'react-icons/io5'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { languages } from '@/configs/nav'

import LanguageNavHandle from './LanguageNavHandle'

export default function LanguageHandle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <IoLanguage className="h-6 w-6 stroke-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.keys(languages).map((language: string, index: number) => {
          return (
            <LanguageNavHandle
              icon={languages[language].icon}
              name={languages[language].name}
              href={'/' + language}
              key={'NavBarMenuLanguageHandleLinkKeyIndex' + index + language}
            />
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
