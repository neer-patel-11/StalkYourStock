/** @type {import('next').NextConfig} */
import million from 'million/compiler'

const nextConfig = {
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false }

  //   return config
  // },
  reactStrictMode: true
}

export default million.next(nextConfig)
