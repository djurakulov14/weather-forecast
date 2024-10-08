/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.worldweatheronline.com",
        port: '',
        pathname: "/images/**"
      }
    ]
  }
};

export default nextConfig;
