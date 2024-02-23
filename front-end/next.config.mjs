/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_API_URL: process.env.REACT_APP_API,
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'image.webmotors.com.br',
              port: '',
            },
        ],
    },
};

export default nextConfig;
