/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.globoveiculos.com',
              port: '',
            },
        ],
    },
};

export default nextConfig;
