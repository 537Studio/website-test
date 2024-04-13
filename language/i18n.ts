import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
const locales = ['en_US', 'zh_CN']

export default getRequestConfig(async ({ locale }) => {
  // There is no need to return a 404 page here, because I didn't use /[language]/some/path
  if (!locales.includes(locale as any)) throw new Error('Invalid locale')
  // Just throw a error is OK

  return {
    messages: (await import(`./${locale}.json`)).default,
  }
})
