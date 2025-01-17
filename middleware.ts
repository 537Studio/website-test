import createMiddleware from 'next-intl/middleware'
import { notFound } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

import NotFound from './app/not-found'

/*(import { NextRequest, NextResponse } from 'next/server'
const nextIntlLocaleHeaderName = 'X-NEXT-INTL-LOCALE'

export function middleware(request: NextRequest) {
  request.headers.set(nextIntlLocaleHeaderName, process.env.LANGUAGE || 'zh_CN')
  return NextResponse.next({ request })
}
*/

// Export the middleware
// export const middleware = middleware

const backstagePath = process.env.BACKSTAGE_PATH || 'backstage537'
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/' + backstagePath)) {
    return NextResponse.rewrite(
      new URL(pathname.replace(backstagePath, 'backstage'), request.url),
    )
  } else if (pathname.startsWith('/backstage')) {
    // using the `else if` to exclude BACKSTAGE_PATH === "/backstage"
    // notFound()
    return NextResponse.rewrite(new URL('/not-found', request.url))
  }

  return i18nMiddleware(request)
}

const i18nMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en_us', 'zh_cn', 'zh_hk'],

  // Used when no locale matches
  defaultLocale: 'en_us',
})

export const config = {
  // Match only internationalized pathnames
  // Also match the backstage path
  matcher: [
    '/',
    '/(zh_cn|en_us|zh_hk)/:path*',
    `/admin537/:path*`, // script:needToReplace
    '/backstage/:path*',
  ],
  // .map((item) => item.),
}
