/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'saarpharma.co.in',
            },
        ],
    },
};

export default nextConfig;
