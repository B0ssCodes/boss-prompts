/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    },
    async headers() {
        return [
          {
            source: '/api/prompt',
            headers: [
              {
                key: 'Cache-Control',
                value: 'no-store, max-age=0',
              },
            ],
          },
        ];
    },
}
  
module.exports = nextConfig