/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./language/i18n.ts')

const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
  },
}

export default withNextIntl(nextConfig)
