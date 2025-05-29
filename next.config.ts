import type { NextConfig } from 'next'
import type { RuleSetRule } from 'webpack'

const nextConfig: NextConfig = {
  webpack(config) {
    const rules = config.module.rules as RuleSetRule[]

    const fileLoaderRule = rules.find(
      rule =>
        typeof rule === 'object' &&
        rule !== null &&
        rule.test instanceof RegExp &&
        rule.test.test('.svg')
    )

    if (!fileLoaderRule) {
      throw new Error('SVG file loader rule not found')
    }

    rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

export default nextConfig
