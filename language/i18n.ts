/* import { getRequestConfig } from 'next-intl/server'

const locales = ['en_US', 'zh_CN']

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) throw new Error('Invalid locale')

  return {
    messages: (await import(`./${locale}.json`)).default,
  }
})
*/
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// Can be imported from a shared config
const locales = ['en_us', 'zh_cn']

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  const file = (await import(`./${locale}.json`)).default
  // console.log(JSON.stringify(file))

  return {
    messages: file,
  }
})
