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
export const locales = ['en_us', 'zh_cn', 'zh_hk']

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  let locale = await requestLocale

  if (locale !== process.env.BACKSTAGE_PATH && locale !== '/backstage') {
    if (!locales.includes(locale as string)) {
      notFound()
    }

    const file = (await import(`./${locale}.json`)).default
    // console.log(JSON.stringify(file))

    return { locale, messages: file }
  } else {
    return { locale, messages: [] }
  }
})
