'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

interface LanguageNavHandleProps {
  icon: string
  name: string
  href: string
}

export default function LanguageNavHandle({
  icon,
  name,
  href,
}: LanguageNavHandleProps) {
  const router = useRouter()

  function hrefHandle() {
    router.push(href)
  }
  return (
    <DropdownMenuItem className="w-full" onClick={hrefHandle}>
      <span className="flex w-full items-center px-2">
        <span className="text-[15px]">{icon}</span>
        <span className="ml-4 text-center text-[15px]">{name}</span>
      </span>
    </DropdownMenuItem>
  )
}
