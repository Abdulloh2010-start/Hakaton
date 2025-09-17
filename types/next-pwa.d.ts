declare module "next-pwa" {
  import type { NextConfig } from "next"

  type NextPWAConfig = {
    dest?: string
    disable?: boolean
    register?: boolean
    skipWaiting?: boolean
    buildExcludes?: string[]
    [key: string]: any
  }

  export default function withPWA(config?: NextPWAConfig): (nextConfig: NextConfig) => NextConfig
}