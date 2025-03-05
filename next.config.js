/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 'standalone' yerine 'export' kullanın
  images: {
    unoptimized: true,
    domains: ['axidiata.com']
  },
  // Webpack optimizations to reduce bundle size
  webpack: (config, { isServer }) => {
    // Keep only necessary chunks
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      maxAsyncRequests: 25,
      minSize: 20000,
      maxSize: 12 * 1024 * 1024, // 12MB maksimum chunk boyutu
      cacheGroups: {
        default: false,
        vendors: false,
        framework: {
          name: 'framework',
          test: /[\\/]node_modules[\\/](@next|next|react|react-dom)[\\/]/,
          priority: 40,
          enforce: true,
        },
        lib: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          priority: 20,
        },
        shared: {
          name: 'shared',
          minChunks: 1,
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    };
    
    return config;
  }
}

module.exports = nextConfig