/*(import { NextRequest, NextResponse } from 'next/server'
const nextIntlLocaleHeaderName = 'X-NEXT-INTL-LOCALE'

export function middleware(request: NextRequest) {
  request.headers.set(nextIntlLocaleHeaderName, process.env.LANGUAGE || 'zh_CN')
  return NextResponse.next({ request })
}
*/

// Export the middleware
// export const middleware = middleware
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en_us', 'zh_cn', 'zh_hk'],

  // Used when no locale matches
  defaultLocale: 'en_us',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh_cn|en_us|zh_hk)/:path*'],
}
