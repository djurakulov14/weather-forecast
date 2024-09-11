/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.worldweatheronline.com',
        port: '',
        pathname: '',
      },
    ],
  },
  // images: {
  //   // remotePatterns: ["https://cdn.worldweatheronline.com"]
  //   remotePatterns: ["https://cdn.worldweatheronline.com"]
  // },
  
};

export default nextConfig;
