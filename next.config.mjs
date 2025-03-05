/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['axidiata.com']
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Improve module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      // Ensure proper alias resolution
      '@': require('path').resolve(__dirname, 'src/'),
    };
    
    return config;
  },
}

export default nextConfig;