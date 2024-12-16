import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home/recommendations',
                permanent: true,
            },
            {
                source: '/home',
                destination: '/home/recommendations',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
