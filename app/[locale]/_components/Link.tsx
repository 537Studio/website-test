'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import i18n from '@/language/i18n'

interface LinkProps extends NextLinkProps {
  locale?: string
  children: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ href, locale, children, ...props }) => {
  //const pathname = usePathname()
  const i18nLocale = useLocale()
  // get language
  const currentLocale = locale || i18nLocale || ''

  let updatedHref = href as string
  if (updatedHref.startsWith('/')) {
    updatedHref = `/${currentLocale}${updatedHref}`
  }

  return (
    <NextLink href={updatedHref} {...props}>
      {children}
    </NextLink>
  )
}

export default Link
