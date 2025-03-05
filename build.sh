#!/bin/bash

# Print current working directory
echo "Current directory: $(pwd)"
echo "Listing files:"
ls -la

# Install dependencies
echo "Installing dependencies..."
npm ci

# Fix Next.js config
echo "Updating Next.js config..."
cat > next.config.js << EOL
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['axidiata.com']
  },
}

module.exports = nextConfig
EOL

# Update jsconfig.json
echo "Creating jsconfig.json..."
cat > jsconfig.json << EOL
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
EOL

# Create src/utils/paths.js
echo "Creating paths utility..."
mkdir -p src/utils
cat > src/utils/paths.js << EOL
/**
 * Helper function to resolve module imports
 * This is to work around issues with the @ alias in some environments
 */
export function resolveModule(path) {
  // Remove @ prefix if present
  if (path.startsWith('@/')) {
    return path.replace('@/', '../');
  }
  return path;
}
EOL

# Build the application
echo "Building Next.js application..."
NODE_OPTIONS="--max-old-space-size=4096" npm run build

echo "Build process completed"
