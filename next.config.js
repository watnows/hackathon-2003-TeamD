import dynamic from 'next/dynamic'
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
 
const DynamicHeader = dynamic(() => import('../components/header'), {
  ssr: false,
})