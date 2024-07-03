/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

process.title = '537 Website Test'
const withNextIntl = createNextIntlPlugin('./language/i18n.ts')

const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
  },
  output: 'standalone',
}

export default withNextIntl(nextConfig)
