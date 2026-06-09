/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@sovereign/brand", "@sovereign/ui", "@sovereign/content"],
  experimental: {
    optimizePackageImports: ["@sovereign/ui", "@sovereign/content"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/leadership",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
