import { NextRequest, NextResponse } from 'next/server'

/** The header next-intl uses to determine the current locale. */
const nextIntlLocaleHeaderName = 'X-NEXT-INTL-LOCALE'

/**
 * Middleware to handle i18n and configure next-intl locale.
 */
export function middleware(request: NextRequest) {
  // Set the locale to the default locale from environment variable
  request.headers.set(nextIntlLocaleHeaderName, process.env.LANGUAGE || 'zh_CN')

  return NextResponse.next({ request })
}

// Export the middleware
// export const middleware = middleware
