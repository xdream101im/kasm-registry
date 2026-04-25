/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Ensecit',
    description: 'Kasm supported workspaces for Ensecit.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/xdream101im/kasm-registry/',
    contactUrl: 'https://github.com/xdream101im/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
