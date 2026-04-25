/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Ensecit',
    description: 'Kasm supported workspaces for Ensecit.',
    icon: '/img/logo.svg',
    listUrl: 'https://xdream101im.github.io/kasm-registry/',
    contactUrl: 'https://xdream101im.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
